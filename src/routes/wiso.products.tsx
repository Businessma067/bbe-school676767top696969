import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/wiso/products")({
  component: () => <Outlet />,
});
