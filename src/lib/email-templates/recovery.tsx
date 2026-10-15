import { Button, Heading, Text } from "@react-email/components";
import { EmailFrame, button, footer, heading, text } from "./surface";

interface RecoveryEmailProps {
  siteName: string;
  confirmationUrl: string;
}

export const RecoveryEmail = ({
  siteName,
  confirmationUrl,
}: RecoveryEmailProps) => (
  <EmailFrame preview={`Reset your password for ${siteName}`}>
    <Heading className="email-copy" style={heading}>
      Reset your password
    </Heading>
    <Text className="email-copy" style={text}>
      We received a request to reset your password for {siteName}. Click the
      button below to choose a new password.
    </Text>
    <Button className="email-btn" style={button} href={confirmationUrl}>
      Reset Password
    </Button>
    <Text className="email-copy" style={footer}>
      If you didn't request a password reset, you can safely ignore this
      email. Your password will not be changed.
    </Text>
  </EmailFrame>
);

export default RecoveryEmail;
