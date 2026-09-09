import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { LocalizedLink } from "@/components/LocalizedLink";
import { hreflangLinks } from "@/lib/i18n/locale-path";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    links: [...hreflangLinks("/terms"), { rel: "canonical", href: "https://bbe-school.com/terms" }],
    meta: [
      { title: "Terms of Service · BBE School" },
      { name: "description", content: "Terms of Service for BBE School Full Course and bbe-school.com." },
    ],
  }),
});

export function TermsPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader compact maxWidthClassName="max-w-3xl" showNav={false} showMobileNav={false} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: 08.09.2026</p>

        <div className="mt-8 space-y-10 text-sm leading-relaxed text-foreground">
          <section className="space-y-4">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of bbe-school.com
              (the &quot;Site&quot;) and the BBE School Full Course exam preparation service (the
              &quot;Service&quot;), operated by Yehor Basatskyi, a private entrepreneur (ФОП)
              registered in Ukraine.
            </p>
            <p>
              By creating an account, purchasing the Full Course, or otherwise using the Site, you
              (&quot;you,&quot; &quot;User&quot;) agree to be bound by these Terms. If you do not
              agree, do not use the Site or the Service.
            </p>
            <p>
              <strong className="font-semibold">Contact:</strong>{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">1. Definitions</h2>
            <ul className="list-disc space-y-3 pl-5">
              <li>
                <strong className="font-semibold">&quot;Service&quot;</strong> means the BBE School
                Full Course: complete access to practice questions across Economics, Math, and
                English, the unlimited mock exam builder, timed practice with negative marking, all
                interactive practice tools (flashcards, matching, tutor exam), the built-in
                calculator, AI-generated explanations, and detailed statistics tracking.
              </li>
              <li>
                <strong className="font-semibold">&quot;Content&quot;</strong> means all practice
                questions, explanations, text, graphics, software, and other materials made
                available through the Service.
              </li>
              <li>
                <strong className="font-semibold">&quot;Account&quot;</strong> means the registered
                user account required to access the Service.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">2. Eligibility</h2>
            <p>
              The Service is intended for individuals preparing for the WU Vienna BBE entrance exam.
              If you are under 18, you confirm that you have permission from a parent or legal
              guardian to create an Account and make a purchase. We do not knowingly provide the
              Service to children under 16.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              3. Description of the Full Course
            </h2>
            <p>
              The Full Course provides complete digital access to BBE School&apos;s exam preparation
              materials, including:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Unlimited access to practice questions in Economics, Math, and English, written in
                BBE School&apos;s narrative, reasoning-based question style
              </li>
              <li>
                Timed practice sessions with negative marking, replicating real exam conditions
              </li>
              <li>
                Unlimited use of the mock exam builder to assemble custom practice exams
              </li>
              <li>
                Interactive practice tools: flashcards, matching exercises, and tutor exam mode
              </li>
              <li>A built-in calculator for use during practice</li>
              <li>Explanations for practice questions</li>
              <li>Detailed statistics and progress tracking across all subject areas</li>
            </ul>
            <p>
              Access is delivered digitally through your Account. There is no physical product, and
              nothing is shipped.
            </p>
            <p>
              We do not guarantee any specific exam outcome, admission result, or score improvement.
              The Service is a preparation tool, not a guarantee of exam success.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">4. Account Registration</h2>
            <p>
              To access the Full Course, you must create an Account with an accurate email address
              and a secure password. You are responsible for maintaining the confidentiality of your
              login credentials and for all activity that occurs under your Account. Notify us
              immediately at{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>{" "}
              if you suspect unauthorized use of your Account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">5. Payment</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Full Course access is offered at the price displayed on the Site at the time of
                purchase, in the currency shown.
              </li>
              <li>
                Payment is currently processed via bank transfer or card payment link (through
                Monobank Acquiring). We do not store full card numbers.
              </li>
              <li>
                Access to the Full Course is granted upon confirmation of successful payment.
              </li>
              <li>
                Prices may change at any time; changes will not affect purchases already completed.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">6. Refund Policy</h2>
            <p>
              <strong className="font-semibold">
                All purchases of the Full Course are final. BBE School does not offer refunds once
                access to paid content has been granted
              </strong>
              , except as described below.
            </p>
            <p>
              We encourage you to use the free demo content available on the Site to evaluate BBE
              School&apos;s style and content before purchasing the Full Course.
            </p>

            <h3 className="font-display text-lg font-semibold tracking-tight">
              6.1 Right of Withdrawal (EU/EEA Customers)
            </h3>
            <p>
              If you are a consumer located in the EU/EEA, you normally have a statutory 14-day right
              to withdraw from an online purchase without giving a reason.
            </p>
            <p>
              <strong className="font-semibold">
                By purchasing the Full Course, you explicitly request immediate access to the digital
                content and acknowledge that:
              </strong>
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Access begins immediately upon payment confirmation, and</li>
              <li>
                <strong className="font-semibold">
                  You lose your 14-day right of withdrawal once access to the Full Course has begun.
                </strong>
              </li>
            </ul>
            <p>
              This consent is confirmed via a dedicated checkbox at checkout, separate from your
              general acceptance of these Terms, before payment is completed. If you do not wish to
              waive this right, do not proceed with immediate access, or contact us at{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>{" "}
              before purchasing to discuss alternative arrangements.
            </p>

            <h3 className="font-display text-lg font-semibold tracking-tight">6.2 Exceptions</h3>
            <p>We will consider a refund or correction in the following limited cases:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold">Duplicate payment</strong> — you were accidentally
                charged twice for the same purchase.
              </li>
              <li>
                <strong className="font-semibold">Technical failure on our end</strong> — you paid but
                never received access to the Full Course due to an error on our side, and the issue
                could not be resolved within a reasonable time.
              </li>
              <li>
                <strong className="font-semibold">Unauthorized transaction</strong> — payment was
                made fraudulently without your authorization (subject to verification).
              </li>
            </ul>
            <p>
              To request a review under these exceptions, contact us at{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>{" "}
              with your payment confirmation and a description of the issue. We will respond within
              5 business days.
            </p>

            <h3 className="font-display text-lg font-semibold tracking-tight">6.3 Refund Processing</h3>
            <p>
              Approved refunds will be issued to the original payment method used, within 5 business
              days of approval. Processing times may vary depending on your bank or payment
              provider.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              7. Intellectual Property
            </h2>
            <p>
              All Content — including practice questions, explanations, graphics, branding, and
              software — is owned by BBE School or its licensors and is protected by copyright and
              other intellectual property laws.
            </p>
            <p>
              Your purchase of the Full Course grants you a limited, non-exclusive, non-transferable
              license to access and use the Content for your personal exam preparation only. You may
              not:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Copy, reproduce, distribute, publish, or resell any Content</li>
              <li>Share your Account credentials or paid access with any other person</li>
              <li>Scrape, download in bulk, or use automated tools to extract Content</li>
              <li>Use the Content to build a competing product or service</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate any Account found to be in breach of this
              section.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">8. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Site or its systems</li>
              <li>Interfere with or disrupt the operation of the Service</li>
              <li>
                Misuse promo codes, referral mechanisms, or attempt to redeem codes through
                automated or fraudulent means
              </li>
              <li>
                Impersonate any person or misrepresent your affiliation with any person or entity
              </li>
            </ul>
            <p>We may suspend or terminate access for any User who violates this section.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              9. AI-Generated Content
            </h2>
            <p>
              Some explanations provided within the Service are generated using artificial
              intelligence. While we aim for accuracy, AI-generated explanations may occasionally
              contain errors or oversimplifications. AI explanations are a study aid and should not
              be treated as an authoritative or exhaustive source. If you notice an error, please
              report it to{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">10. Disclaimers</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available,&quot; without
              warranties of any kind, whether express or implied, including but not limited to
              warranties of merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted, error-free, or completely
              secure. We do not guarantee that use of the Service will result in admission to WU
              Vienna or any particular exam score.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              11. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, BBE School shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages, or any loss of
              profits or revenues, arising from your use of, or inability to use, the Service.
            </p>
            <p>
              Our total liability to you for any claim arising from these Terms or the Service shall
              not exceed the amount you paid for the Full Course in the 12 months preceding the
              claim.
            </p>
            <p>
              Nothing in these Terms limits liability that cannot be excluded or limited under
              applicable law, including mandatory consumer protection rights in your country of
              residence.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">12. Termination</h2>
            <p>
              We may suspend or terminate your Account and access to the Service if you breach these
              Terms, engage in fraudulent activity, or misuse the Service. You may stop using the
              Service at any time; note that this does not entitle you to a refund except as
              described in Section 6.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              13. Changes to the Service and These Terms
            </h2>
            <p>
              We may update the Service, its features, or these Terms from time to time. Material
              changes to these Terms will be notified via email or a notice on the Site. Continued
              use of the Service after changes take effect constitutes acceptance of the updated
              Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">
              14. Governing Law and Disputes
            </h2>
            <p>
              These Terms are governed by the laws of Ukraine, without regard to conflict-of-law
              principles.
            </p>
            <p>
              If you are a consumer resident in the EU/EEA, this choice of law does not deprive you
              of any mandatory consumer protections provided by the law of your country of habitual
              residence, which continue to apply alongside these Terms.
            </p>
            <p>
              Any dispute arising from these Terms or the Service will first be addressed informally
              by contacting{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>
              . If unresolved, disputes will be subject to the jurisdiction of the competent courts,
              without prejudice to any right you may have to bring proceedings in the courts of your
              own country of residence as an EU/EEA consumer.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">15. Miscellaneous</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold">Severability:</strong> If any provision of these
                Terms is found unenforceable, the remaining provisions remain in full effect.
              </li>
              <li>
                <strong className="font-semibold">Entire Agreement:</strong> These Terms, together
                with our{" "}
                <LocalizedLink to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </LocalizedLink>
                , constitute the entire agreement between you and BBE School regarding the Service.
              </li>
              <li>
                <strong className="font-semibold">No Waiver:</strong> Failure to enforce any
                provision of these Terms does not constitute a waiver of that provision.
              </li>
              <li>
                <strong className="font-semibold">Assignment:</strong> You may not assign or transfer
                your rights under these Terms. We may assign our rights and obligations in
                connection with a business transfer.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-xl font-bold tracking-tight">16. Contact</h2>
            <p>
              Questions about these Terms:{" "}
              <a href="mailto:info@bbe-school.com" className="text-primary hover:underline">
                info@bbe-school.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-4 gap-y-2">
          <LocalizedLink to="/privacy" className="text-sm text-primary hover:underline">
            Privacy Policy
          </LocalizedLink>
          <LocalizedLink to="/" className="text-sm text-primary hover:underline">
            ← Back to home
          </LocalizedLink>
        </div>
      </div>
    </div>
  );
}
