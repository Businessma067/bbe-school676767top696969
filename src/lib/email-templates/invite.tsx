import { Button, Heading, Link, Text } from "@react-email/components";
import { EmailFrame, button, footer, heading, link, text } from "./surface";

interface InviteEmailProps {
  siteName: string;
  siteUrl: string;
  confirmationUrl: string;
}

export const InviteEmail = ({
  siteName,
  siteUrl,
  confirmationUrl,
}: InviteEmailProps) => (
  <EmailFrame preview={`You've been invited to join ${siteName}`}>
    <Heading className="email-copy" style={heading}>
      You've been invited
    </Heading>
    <Text className="email-copy" style={text}>
      You've been invited to join{" "}
      <Link href={siteUrl} style={link}>
        <strong>{siteName}</strong>
      </Link>
      . Click the button below to accept the invitation and create your
      account.
    </Text>
    <Button className="email-btn" style={button} href={confirmationUrl}>
      Accept Invitation
    </Button>
    <Text className="email-copy" style={footer}>
      If you weren't expecting this invitation, you can safely ignore this
      email.
    </Text>
  </EmailFrame>
);

export default InviteEmail;
