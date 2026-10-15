import { Button, Heading, Text } from "@react-email/components";
import { EmailFrame, button, footer, heading, text } from "./surface";

interface MagicLinkEmailProps {
  siteName: string;
  confirmationUrl: string;
}

export const MagicLinkEmail = ({
  siteName,
  confirmationUrl,
}: MagicLinkEmailProps) => (
  <EmailFrame preview={`Your login link for ${siteName}`}>
    <Heading className="email-copy" style={heading}>
      Your login link
    </Heading>
    <Text className="email-copy" style={text}>
      Click the button below to log in to {siteName}. This link will expire
      shortly.
    </Text>
    <Button className="email-btn" style={button} href={confirmationUrl}>
      Log In
    </Button>
    <Text className="email-copy" style={footer}>
      If you didn't request this link, you can safely ignore this email.
    </Text>
  </EmailFrame>
);

export default MagicLinkEmail;
