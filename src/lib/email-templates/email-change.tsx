import { Button, Heading, Link, Text } from "@react-email/components";
import { EmailFrame, button, footer, heading, link, text } from "./surface";

interface EmailChangeEmailProps {
  siteName: string;
  // oldEmail is the user's current address (HookData.OldEmail). For the
  // NEW-recipient half of a secure email_change fanout, `email` equals the
  // recipient (NEW), so the "from" line must render oldEmail to read
  // "from OLD to NEW" instead of "from NEW to NEW".
  oldEmail: string;
  email: string;
  newEmail: string;
  confirmationUrl: string;
}

export const EmailChangeEmail = ({
  siteName,
  oldEmail,
  newEmail,
  confirmationUrl,
}: EmailChangeEmailProps) => (
  <EmailFrame preview={`Confirm your email change for ${siteName}`}>
    <Heading className="email-copy" style={heading}>
      Confirm your email change
    </Heading>
    <Text className="email-copy" style={text}>
      You requested to change your email address for {siteName} from{" "}
      <Link href={`mailto:${oldEmail}`} style={link}>
        {oldEmail}
      </Link>{" "}
      to{" "}
      <Link href={`mailto:${newEmail}`} style={link}>
        {newEmail}
      </Link>
      .
    </Text>
    <Text className="email-copy" style={text}>
      Click the button below to confirm this change:
    </Text>
    <Button className="email-btn" style={button} href={confirmationUrl}>
      Confirm Email Change
    </Button>
    <Text className="email-copy" style={footer}>
      If you didn't request this change, please secure your account
      immediately.
    </Text>
  </EmailFrame>
);

export default EmailChangeEmail;
