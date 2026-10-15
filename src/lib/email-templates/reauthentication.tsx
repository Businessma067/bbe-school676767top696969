import { Heading, Text } from "@react-email/components";
import { EmailFrame, codeStyle, footer, heading, text } from "./surface";

interface ReauthenticationEmailProps {
  token: string;
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <EmailFrame preview="Your verification code">
    <Heading className="email-copy" style={heading}>
      Confirm reauthentication
    </Heading>
    <Text className="email-copy" style={text}>
      Use the code below to confirm your identity:
    </Text>
    <Text className="email-copy" style={codeStyle}>
      {token}
    </Text>
    <Text className="email-copy" style={footer}>
      This code will expire shortly. If you didn't request this, you can
      safely ignore this email.
    </Text>
  </EmailFrame>
);

export default ReauthenticationEmail;
