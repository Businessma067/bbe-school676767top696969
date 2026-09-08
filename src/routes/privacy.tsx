import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { hreflangLinks } from "@/lib/i18n/locale-path";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    links: [...hreflangLinks("/privacy"), { rel: "canonical", href: "https://bbe-school.com/privacy" }],
    meta: [
      { title: "Privacy Policy · BBE School" },
      {
        name: "description",
        content:
          "How BBE School collects, uses, and protects personal data under the GDPR and Ukrainian law.",
      },
    ],
  }),
});

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader
        maxWidthClassName="max-w-3xl"
        compact
        actions={
          <LocalizedLink to="/" className="text-sm text-primary hover:underline">
            ← Back to home
          </LocalizedLink>
        }
      />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: 08.09.2026</p>

        <div className="mt-8 space-y-10 text-sm leading-relaxed text-foreground">
          <section className="space-y-4">
            <p>
              This Privacy Policy explains how Yehor Basatskyi, a private entrepreneur (ФОП)
              registered in Ukraine (&quot;BBE School,&quot; &quot;we,&quot; &quot;us,&quot;
              &quot;our&quot;), collects, uses, and protects your personal data when you use
              bbe-school.com (the &quot;Site&quot;) and the BBE School Full Course exam preparation
              service (the &quot;Service&quot;).
            </p>
            <p>
              This Policy should be read together with our{" "}
              <LocalizedLink to="/terms" className="text-primary hover:underline">
                Terms of Service
              </LocalizedLink>
              . Capitalized terms not defined here have the meaning given in the Terms of Service.
            </p>
            <p>
              We are committed to complying with the EU General Data Protection Regulation (GDPR)
              for Users located in the EU/EEA, as well as applicable Ukrainian data protection law.
            </p>
            <p>
              <strong className="font-semibold">Contact:</strong>{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">1. Who We Are</h2>
            <p>
              BBE School is operated by Yehor Basatskyi, a private entrepreneur (ФОП). For the
              purposes of the GDPR, we act as the{" "}
              <strong className="font-semibold">data controller</strong> for personal data collected
              through the Site and the Service.
            </p>
            <p>
              We have not appointed a Data Protection Officer, as this is not currently required
              given the scale of our processing. Any privacy-related questions should be sent to{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              2. What Personal Data We Collect
            </h2>
            <p>We collect the following categories of personal data:</p>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong className="font-semibold">Account data.</strong> When you register for an
                Account: your email address, first name, last name, phone number, display name, a
                hashed password (if you register with email), and your account creation date. If you
                sign in with Google, we also receive basic profile information from Google (such as
                name, email, and avatar) as part of the sign-in flow.
              </li>
              <li>
                <strong className="font-semibold">Purchase and payment data.</strong> When you
                purchase the Full Course: your name, billing details, purchase history, and
                transaction status. Card and full payment details are handled directly by our payment
                processor Monobank Acquiring —{" "}
                <strong className="font-semibold">
                  we do not receive or store full card numbers.
                </strong>
              </li>
              <li>
                <strong className="font-semibold">Usage and learning data.</strong> Your activity
                within the Service, including practice question attempts, answers selected, mock exam
                results, timed practice performance, flashcard progress, and statistics generated
                from this activity.
              </li>
              <li>
                <strong className="font-semibold">Technical data.</strong> IP address, browser type,
                device type, general location (country/city level), and log data collected
                automatically when you use the Site, including through cookies and similar
                technologies (see Section 7).
              </li>
              <li>
                <strong className="font-semibold">Communications.</strong> Information you provide
                when you contact us at{" "}
                <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                  info@bbe-school.com
                </a>
                , including the content of your message and any attachments.
              </li>
              <li>
                <strong className="font-semibold">Content submitted to AI features.</strong> If you
                use AI-generated explanations or interact with AI-powered features, the relevant
                question, your response, and any related input may be processed by our AI
                provider(s) in order to generate that content (see Section 12).
              </li>
            </ul>
            <p>
              We do not intentionally collect any special categories of data (e.g., health,
              religious beliefs, political opinions) and ask that you do not submit such information
              to us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              3. How We Use Your Personal Data
            </h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Create and administer your Account</li>
              <li>Provide access to the Full Course and its features</li>
              <li>Process payments and maintain purchase records</li>
              <li>Generate AI-based explanations and personalize your practice experience</li>
              <li>Track your progress and display statistics within your dashboard</li>
              <li>
                Respond to support requests sent to{" "}
                <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                  info@bbe-school.com
                </a>
              </li>
              <li>
                Send transactional emails (e.g., purchase confirmation, password reset, access
                issues)
              </li>
              <li>Detect and prevent fraud, abuse, or violations of our Terms of Service</li>
              <li>Maintain and improve the Site and Service, including basic analytics on usage</li>
              <li>Comply with legal obligations (e.g., accounting and tax records)</li>
            </ul>
            <p>
              We do <strong className="font-semibold">not</strong> sell your personal data to third
              parties, and we do not use your data to serve third-party advertising.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              4. Legal Basis for Processing (EU/EEA Users)
            </h2>
            <p>Where the GDPR applies, we rely on the following legal bases:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-4 font-semibold">Purpose</th>
                    <th className="py-2 font-semibold">Legal basis</th>
                  </tr>
                </thead>
                <tbody className="align-top">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">
                      Creating and managing your Account, providing the Service you purchased
                    </td>
                    <td className="py-3">Performance of a contract (Art. 6(1)(b) GDPR)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Processing payments, accounting, tax records</td>
                    <td className="py-3">Legal obligation (Art. 6(1)(c) GDPR)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">
                      Fraud prevention, Site security, service improvement
                    </td>
                    <td className="py-3">Legitimate interest (Art. 6(1)(f) GDPR)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">
                      Non-essential cookies and marketing communications
                    </td>
                    <td className="py-3">
                      Consent (Art. 6(1)(a) GDPR), which you may withdraw at any time
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              5. Third Parties We Share Data With
            </h2>
            <p>
              We share personal data only with service providers who process it on our behalf
              (&quot;processors&quot;), or where legally required. Current processors include:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold">Supabase</strong> — authentication, database, and
                related backend infrastructure
              </li>
              <li>
                <strong className="font-semibold">Monobank Acquiring</strong> — payment processing
              </li>
              <li>
                <strong className="font-semibold">Google</strong> — Google sign-in (when you choose
                that option), and Search Console / Analytics for website indexing and usage
                analytics where enabled
              </li>
              <li>
                <strong className="font-semibold">AI providers (e.g., Anthropic, OpenAI)</strong> —
                generating AI-based explanations and related features
              </li>
              <li>
                <strong className="font-semibold">Hosting and email delivery providers</strong> —
                operating the Site and sending transactional messages
              </li>
            </ul>
            <p>
              These providers are contractually restricted from using your data for any purpose
              other than providing services to us, and are required to apply appropriate security
              measures. We do not permit them to sell your data.
            </p>
            <p>
              We may also disclose personal data where required by law, to protect our legal rights,
              or in connection with a merger, acquisition, or sale of business assets (in which case
              we will notify affected Users).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              6. International Data Transfers
            </h2>
            <p>
              We are based in Ukraine, and some of our service providers (including Supabase, hosting
              providers, and AI providers) may process or store data outside your country of
              residence, including in the United States or other countries outside the EU/EEA.
            </p>
            <p>
              Where we transfer personal data of EU/EEA Users outside the EU/EEA, we rely on
              appropriate safeguards required by the GDPR, such as Standard Contractual Clauses, or
              on the fact that the recipient is located in a country recognized by the European
              Commission as providing adequate protection, where applicable. You may contact us at{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>{" "}
              for more information about the safeguards used for a specific transfer.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              7. Cookies and Similar Technologies
            </h2>
            <p>We use cookies and similar technologies to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Keep you logged in to your Account (strictly necessary)</li>
              <li>Remember your preferences on the Site</li>
              <li>
                Understand how the Site and Service are used, so we can improve them (analytics)
              </li>
            </ul>
            <p>
              You can control or disable non-essential cookies through your browser settings.
              Disabling strictly necessary cookies may prevent parts of the Service, such as login,
              from working correctly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">8. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary for the purposes described in
              this Policy:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold">Account and usage data</strong> — for as long as
                your Account remains active, and for a reasonable period afterward in case you wish
                to reactivate it, unless you request earlier deletion.
              </li>
              <li>
                <strong className="font-semibold">Payment and transaction records</strong> — for the
                period required by Ukrainian tax and accounting law (typically several years).
              </li>
              <li>
                <strong className="font-semibold">Support communications</strong> — for as long as
                needed to resolve your request and for a reasonable period afterward for
                record-keeping.
              </li>
            </ul>
            <p>
              When personal data is no longer needed, we delete it or anonymize it so that it can no
              longer be linked to you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">9. Your Rights</h2>
            <p>
              If you are located in the EU/EEA, you have the following rights under the GDPR
              regarding your personal data:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold">Access</strong> — request a copy of the personal
                data we hold about you
              </li>
              <li>
                <strong className="font-semibold">Rectification</strong> — request correction of
                inaccurate or incomplete data
              </li>
              <li>
                <strong className="font-semibold">Erasure</strong> — request deletion of your data,
                subject to certain exceptions (e.g., legal retention obligations)
              </li>
              <li>
                <strong className="font-semibold">Restriction</strong> — request that we limit how we
                use your data in certain circumstances
              </li>
              <li>
                <strong className="font-semibold">Portability</strong> — request your data in a
                structured, commonly used, machine-readable format
              </li>
              <li>
                <strong className="font-semibold">Objection</strong> — object to processing based on
                legitimate interest, including for analytics
              </li>
              <li>
                <strong className="font-semibold">Withdraw consent</strong> — where processing is
                based on consent, withdraw it at any time without affecting prior processing
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>
              . We will respond within the timeframe required by applicable law (generally within
              one month under the GDPR).
            </p>
            <p>
              If you believe we have not handled your personal data properly, you have the right to
              lodge a complaint with your local data protection supervisory authority in the EU/EEA,
              in addition to contacting us directly.
            </p>
            <p>
              Users outside the EU/EEA may also contact us to exercise similar rights where
              applicable under local law; we will handle such requests on a reasonable-efforts
              basis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">10. Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect personal data from children under 16. If we become aware
              that we have collected personal data from a child under 16 without appropriate parental
              or guardian consent, we will take steps to delete that data. Eligibility to use the
              Service is described in Section 2 of our{" "}
              <LocalizedLink to="/terms" className="text-primary hover:underline">
                Terms of Service
              </LocalizedLink>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">11. Data Security</h2>
            <p>
              We use reasonable technical and organizational measures to protect your personal data,
              including encrypted connections (HTTPS), access controls on our database and admin
              systems, and reliance on established infrastructure providers that maintain their own
              security standards.
            </p>
            <p>
              No method of transmission or storage is completely secure, and we cannot guarantee
              absolute security. If we become aware of a data breach affecting your personal data, we
              will notify affected Users and relevant authorities as required by applicable law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              12. AI Features and Your Data
            </h2>
            <p>
              When you use AI-powered features, relevant content (such as the question and your
              input) may be sent to our AI provider to generate a response. This data is processed
              under contractual terms that restrict our AI providers from using it to train their
              models on your personal data, except where a provider offers this by default and we
              have not opted out — we will update this section if that changes. Accuracy limitations
              of AI-generated explanations are described in Section 9 of our{" "}
              <LocalizedLink to="/terms" className="text-primary hover:underline">
                Terms of Service
              </LocalizedLink>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              13. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or legal requirements. Material changes will be notified via email or a
              notice on the Site. The &quot;Last updated&quot; date at the top of this Policy
              indicates when it was last revised. Continued use of the Service after changes take
              effect constitutes acceptance of the updated Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">14. Contact Us</h2>
            <p>
              Questions about this Privacy Policy or how we handle your personal data:{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-4 gap-y-2">
          <LocalizedLink to="/terms" className="text-sm text-primary hover:underline">
            Terms of Service
          </LocalizedLink>
          <LocalizedLink to="/" className="text-sm text-primary hover:underline">
            ← Back to home
          </LocalizedLink>
        </div>
      </div>
    </div>
  );
}
