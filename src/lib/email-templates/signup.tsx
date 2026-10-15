import { Button, Heading, Link, Text } from "@react-email/components";
import { EmailFrame, button, footer, heading, link, text } from "./surface";

interface SignupEmailProps {
  siteName: string;
  siteUrl: string;
  recipient: string;
  confirmationUrl: string;
}

export const SignupEmail = ({
  siteName,
  siteUrl,
  recipient,
  confirmationUrl,
}: SignupEmailProps) => (
  <EmailFrame preview={`Confirm your email for ${siteName}`}>
    <Heading className="email-copy" style={heading}>
      Confirm your email
    </Heading>
    <Text className="email-copy" style={text}>
      Thanks for signing up for{" "}
      <Link href={siteUrl} style={link}>
        <strong>{siteName}</strong>
      </Link>
      !
    </Text>
    <Text className="email-copy" style={text}>
      Please confirm your email address (
      <Link href={`mailto:${recipient}`} style={link}>
        {recipient}
      </Link>
      ) by clicking the button below:
    </Text>
    <Button className="email-btn" style={button} href={confirmationUrl}>
      Verify Email
    </Button>
    <Text className="email-copy" style={footer}>
      If you didn't create an account, you can safely ignore this email.
    </Text>
  </EmailFrame>
);

export default SignupEmail;
