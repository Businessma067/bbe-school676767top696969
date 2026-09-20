import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/demo-practice/matching")({
  component: () => <Outlet />,
});
