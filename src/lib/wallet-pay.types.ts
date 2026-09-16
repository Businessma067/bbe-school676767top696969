/**
 * Shared wallet-pay types (safe for SSR). Keep browser helpers in `wallet-pay-browser.ts`.
 */

export type WalletPayConfig = {
  amountMinor: number;
  totalPrice: string;
  currencyCode: "UAH" | "EUR";
  countryCode: string;
  merchantName: string;
  googleGatewayMerchantId: string;
  appleMerchantId: string | null;
  applePayReady: boolean;
  label: string;
};
