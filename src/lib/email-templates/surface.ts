import * as React from "react";
import { Body, Container, Head, Html, Preview } from "@react-email/components";

export const INK = "#3a2e1f";
export const MUTED = "#6b5e4e";
export const BUTTON_BG = "#161616";
export const BUTTON_FG = "#f2f1ed";

export const main = {
  backgroundColor: "transparent",
  color: INK,
  fontFamily: "Arial, sans-serif",
};
export const container = { padding: "20px 25px", backgroundColor: "transparent" };
export const heading = {
  fontSize: "22px",
  fontWeight: "bold" as const,
  color: INK,
  backgroundColor: "transparent",
  margin: "0 0 20px",
};
export const text = {
  fontSize: "14px",
  color: INK,
  backgroundColor: "transparent",
  lineHeight: "1.5",
  margin: "0 0 25px",
};
export const link = { color: INK, textDecoration: "underline", backgroundColor: "transparent" };
export const button = {
  backgroundColor: BUTTON_BG,
  color: BUTTON_FG,
  fontSize: "14px",
  border: "1px solid #161616",
  borderRadius: "8px",
  padding: "12px 20px",
  textDecoration: "none",
};
export const footer = {
  fontSize: "12px",
  color: MUTED,
  backgroundColor: "transparent",
  margin: "30px 0 0",
};
export const codeStyle = {
  fontFamily: "Courier, monospace",
  fontSize: "22px",
  fontWeight: "bold" as const,
  color: INK,
  backgroundColor: "transparent",
  margin: "0 0 30px",
};

// Rendered as a text child, which React may HTML-escape: keep this CSS free of >, &, and quotes.
// Text blocks stay transparent in light and dark clients, so Gmail cannot paint a bar behind each line.
export const emailColorCss = `
  :root { color-scheme: light dark; supported-color-schemes: light dark; }
  .email-copy {
    background-color: transparent !important;
    background-image: none !important;
  }
  .email-btn {
    background-color: #161616 !important;
    color: #f2f1ed !important;
    border-color: #161616 !important;
  }
  @media (prefers-color-scheme: dark) {
    .email-copy { background-color: transparent !important; background-image: none !important; }
    .email-btn { background-color: #161616 !important; color: #f2f1ed !important; }
  }
  [data-ogsc] .email-copy { background-color: transparent !important; background-image: none !important; }
  [data-ogsb] .email-copy { background-color: transparent !important; background-image: none !important; }
  [data-ogsc] .email-btn { background-color: #161616 !important; color: #f2f1ed !important; }
  [data-ogsb] .email-btn { background-color: #161616 !important; color: #f2f1ed !important; }
`;

export function EmailFrame({
  preview,
  children,
}: {
  preview: string;
  children: React.ReactNode;
}) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <meta name="supported-color-schemes" content="light dark" />
        <style>{emailColorCss}</style>
      </Head>
      <Preview>{preview}</Preview>
      <Body className="body email-copy" style={main}>
        <Container className="email-copy" style={container}>
          {children}
        </Container>
      </Body>
    </Html>
  );
}
