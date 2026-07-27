import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/mock-exams")({
  component: () => <Outlet />,
});
