import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/forgot-password")({
  beforeLoad: () => {
    throw redirect({ to: "/reset-password" });
  },
  component: () => null,
  head: () => ({
    meta: [
      { title: "Reset password · BBE School" },
      { name: "description", content: "Request a password reset link." },
      { name: "robots", content: "noindex" },
    ],
  }),
});
