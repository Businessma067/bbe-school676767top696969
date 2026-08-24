import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy URL — keep bookmarks working; hub lives at /bbe-entrance-exam. */
export const Route = createFileRoute("/bbe-entrance-exam-guide")({
  beforeLoad: () => {
    throw redirect({ to: "/bbe-entrance-exam" });
  },
});
