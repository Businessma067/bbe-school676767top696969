import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/demo-practice/tutor-exam")({
  component: () => <Outlet />,
});
