import * as React from 'react'
import { createAuthEmailHandler } from '@lovable.dev/email-js'
import { createFileRoute } from '@tanstack/react-router'
import { SignupEmail } from '@/lib/email-templates/signup'
import { InviteEmail } from '@/lib/email-templates/invite'
import { MagicLinkEmail } from '@/lib/email-templates/magic-link'
import { RecoveryEmail } from '@/lib/email-templates/recovery'
import { EmailChangeEmail } from '@/lib/email-templates/email-change'
import { ReauthenticationEmail } from '@/lib/email-templates/reauthentication'

// Configuration
// Auth mail must From the verified Lovable sender subdomain (notify.*).
// Root bbe-school.com currently publishes SPF "v=spf1 -all" and DMARC
// p=reject with strict alignment, so From: *@bbe-school.com is rejected by
// inbox providers even when delivery goes through notify.bbe-school.com.
// Use info@bbe-school.com only after root SPF/DMARC allow Lovable "Show as".
const SITE_NAME = "BBE School"
const SENDER_DOMAIN = "notify.bbe-school.com"
const ROOT_DOMAIN = "bbe-school.com"
const SITE_URL = `https://${ROOT_DOMAIN}`
const FROM_ADDRESS = `${SITE_NAME} <noreply@${SENDER_DOMAIN}>`

// The SDK handler owns verification, dispatch, and retry semantics; this file
// owns only the email decisions: subjects, templates, and per-type props.
export const Route = createFileRoute("/lovable/email/auth/webhook")({
  server: {
    handlers: {
      POST: ({ request }) => {
        const handler = createAuthEmailHandler({
          apiKey: process.env['LOVABLE_API_KEY']!,
          from: FROM_ADDRESS,
          senderDomain: SENDER_DOMAIN,
          sendUrl: process.env['LOVABLE_SEND_URL'],
          emails: {
            signup: {
              subject: 'Confirm your email',
              render: (data) =>
                React.createElement(SignupEmail, {
                  siteName: SITE_NAME,
                  siteUrl: SITE_URL,
                  recipient: data.email,
                  confirmationUrl: data.url,
                }),
            },
            invite: {
              subject: "You've been invited",
              render: (data) =>
                React.createElement(InviteEmail, {
                  siteName: SITE_NAME,
                  siteUrl: SITE_URL,
                  confirmationUrl: data.url,
                }),
            },
            magiclink: {
              subject: 'Your login link',
              render: (data) =>
                React.createElement(MagicLinkEmail, {
                  siteName: SITE_NAME,
                  confirmationUrl: data.url,
                }),
            },
            recovery: {
              subject: 'Reset your password',
              render: (data) =>
                React.createElement(RecoveryEmail, {
                  siteName: SITE_NAME,
                  confirmationUrl: data.url,
                }),
            },
            email_change: {
              subject: 'Confirm your new email',
              render: (data) =>
                React.createElement(EmailChangeEmail, {
                  siteName: SITE_NAME,
                  oldEmail: data.old_email ?? '',
                  email: data.email,
                  newEmail: data.new_email ?? '',
                  confirmationUrl: data.url,
                }),
            },
            reauthentication: {
              subject: 'Your verification code',
              render: (data) =>
                React.createElement(ReauthenticationEmail, { token: data.token ?? '' }),
            },
          },
        })
        return handler(request)
      },
    },
  },
})
