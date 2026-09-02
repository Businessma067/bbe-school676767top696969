import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/forgot-password")({
  beforeLoad: () => {
    throw redirect({ to: "/reset-password" });
  },
  component: () => null,
  head: () => ({
    links: [{ rel: "canonical", href: "https://bbe-school.com/forgot-password" }],
    meta: [
      { title: "Reset password · BBE School" },
      { name: "description", content: "Request a password reset link." },
      { name: "robots", content: "noindex" },
    ],
  }),
});
