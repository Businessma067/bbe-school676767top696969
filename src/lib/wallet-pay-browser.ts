/**
 * Browser helpers for native Apple Pay + Google Pay (Monobank acquiring).
 */

import type { WalletPayConfig } from "@/lib/wallet-pay.types";

export type { WalletPayConfig } from "@/lib/wallet-pay.types";

type GooglePaymentsClient = {
  isReadyToPay: (request: object) => Promise<{ result: boolean }>;
  createButton: (options: {
    onClick: () => void;
    buttonColor?: string;
    buttonType?: string;
    buttonSizeMode?: string;
  }) => HTMLElement;
  loadPaymentData: (request: object) => Promise<GooglePaymentData>;
};

type GooglePaymentData = {
  paymentMethodData: {
    tokenizationData: { token: string };
  };
};

declare global {
  interface Window {
    ApplePaySession?: {
      new (version: number, request: object): ApplePaySessionLike;
      canMakePayments: () => boolean;
      STATUS_SUCCESS: number;
      STATUS_FAILURE: number;
    };
    google?: {
      payments: {
        api: {
          PaymentsClient: new (opts: { environment: string }) => GooglePaymentsClient;
        };
      };
    };
  }
}

type ApplePaySessionLike = {
  begin: () => void;
  abort: () => void;
  completeMerchantValidation: (session: unknown) => void;
  completePayment: (status: number) => void;
  onvalidatemerchant: ((event: { validationURL: string }) => void) | null;
  onpaymentauthorized: ((event: { payment: { token: unknown } }) => void) | null;
  oncancel: (() => void) | null;
};

let googleScriptPromise: Promise<void> | null = null;

export function loadGooglePayScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.google?.payments?.api) return Promise.resolve();
  if (googleScriptPromise) return googleScriptPromise;
  googleScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://pay.google.com/gp/p/js/pay.js"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("Google Pay script failed.")));
      if (window.google?.payments?.api) resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://pay.google.com/gp/p/js/pay.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Pay script failed."));
    document.head.appendChild(script);
  });
  return googleScriptPromise;
}

function googleBaseRequest(config: WalletPayConfig) {
  return {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["VISA", "MASTERCARD"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "monobank",
            gatewayMerchantId: config.googleGatewayMerchantId,
          },
        },
      },
    ],
  };
}

export async function isGooglePayAvailable(config: WalletPayConfig): Promise<boolean> {
  try {
    await loadGooglePayScript();
    const client = new window.google!.payments.api.PaymentsClient({
      environment: "PRODUCTION",
    });
    const ready = await client.isReadyToPay({
      ...googleBaseRequest(config),
      existingPaymentMethodRequired: false,
    });
    return !!ready.result;
  } catch {
    return false;
  }
}

export function mountGooglePayButton(options: {
  container: HTMLElement;
  config: WalletPayConfig;
  onToken: (token: string) => Promise<void>;
  onError: (message: string) => void;
}): () => void {
  const { container, config, onToken, onError } = options;
  container.replaceChildren();

  let cancelled = false;
  void (async () => {
    try {
      await loadGooglePayScript();
      if (cancelled) return;
      const client = new window.google!.payments.api.PaymentsClient({
        environment: "PRODUCTION",
      });
      const button = client.createButton({
        onClick: () => {
          void (async () => {
            try {
              const paymentData = await client.loadPaymentData({
                ...googleBaseRequest(config),
                merchantInfo: { merchantName: config.merchantName },
                transactionInfo: {
                  totalPriceStatus: "FINAL",
                  totalPrice: config.totalPrice,
                  currencyCode: config.currencyCode,
                  countryCode: config.countryCode,
                },
              });
              const token = paymentData.paymentMethodData.tokenizationData.token;
              if (!token) {
                onError("Google Pay did not return a payment token.");
                return;
              }
              await onToken(token);
            } catch (err) {
              const statusCode =
                err && typeof err === "object" && "statusCode" in err
                  ? String((err as { statusCode?: string }).statusCode)
                  : "";
              if (statusCode === "CANCELED") return;
              const message =
                err instanceof Error ? err.message : "Google Pay could not complete.";
              onError(message);
            }
          })();
        },
        buttonColor: "black",
        buttonType: "pay",
        buttonSizeMode: "fill",
      });
      button.style.width = "100%";
      button.style.height = "48px";
      container.appendChild(button);
    } catch (err) {
      if (cancelled) return;
      const message = err instanceof Error ? err.message : "Google Pay unavailable.";
      onError(message);
    }
  })();

  return () => {
    cancelled = true;
    container.replaceChildren();
  };
}

export function canUseApplePay(): boolean {
  try {
    return !!window.ApplePaySession?.canMakePayments?.();
  } catch {
    return false;
  }
}

export function startApplePaySession(options: {
  config: WalletPayConfig;
  validateMerchant: (validationURL: string) => Promise<unknown>;
  onToken: (tokenJson: string) => Promise<void>;
  onError: (message: string) => void;
  onCancel?: () => void;
}): void {
  const { config, validateMerchant, onToken, onError, onCancel } = options;
  const ApplePaySession = window.ApplePaySession;
  if (!ApplePaySession || !config.appleMerchantId) {
    onError("Apple Pay is not available on this device.");
    return;
  }

  const request = {
    countryCode: config.countryCode,
    currencyCode: config.currencyCode,
    supportedNetworks: ["visa", "masterCard"],
    merchantCapabilities: ["supports3DS"],
    total: {
      label: config.merchantName || "BBE School",
      amount: config.totalPrice,
      type: "final",
    },
  };

  const session = new ApplePaySession(3, request);

  session.onvalidatemerchant = (event) => {
    void (async () => {
      try {
        const merchantSession = await validateMerchant(event.validationURL);
        session.completeMerchantValidation(merchantSession);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Apple Pay merchant validation failed.";
        onError(message);
        session.abort();
      }
    })();
  };

  session.onpaymentauthorized = (event) => {
    void (async () => {
      try {
        const tokenJson = JSON.stringify(event.payment.token);
        await onToken(tokenJson);
        session.completePayment(ApplePaySession.STATUS_SUCCESS);
      } catch (err) {
        session.completePayment(ApplePaySession.STATUS_FAILURE);
        const message =
          err instanceof Error ? err.message : "Apple Pay could not complete.";
        onError(message);
      }
    })();
  };

  session.oncancel = () => {
    onCancel?.();
  };

  session.begin();
}
