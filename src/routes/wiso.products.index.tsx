import { createFileRoute, redirect } from "@tanstack/react-router";

/** WiSo products live on the shared /products page (BBE + WiSo courses together). */
export const Route = createFileRoute("/wiso/products/")({
  beforeLoad: () => {
    throw redirect({ to: "/products" });
  },
});
