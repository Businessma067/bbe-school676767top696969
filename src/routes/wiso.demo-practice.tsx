import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/wiso/demo-practice")({
  component: () => <Outlet />,
});
