import { LocalizedLink } from "@/components/LocalizedLink";
import { cn } from "@/lib/utils";

/** Switch between the BBE demo and the WiSo demo. Hybrid comes later. */
export function DemoTrackSwitch({ active }: { active: "bbe" | "wiso" }) {
  const item =
    "inline-flex min-h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors";
  return (
    <div className="mt-6 inline-flex rounded-lg border border-border bg-card p-1">
      <LocalizedLink
        to="/demo-practice"
        className={cn(
          item,
          active === "bbe"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-current={active === "bbe" ? "page" : undefined}
      >
        BBE demo
      </LocalizedLink>
      <LocalizedLink
        to="/wiso/demo-practice"
        className={cn(
          item,
          active === "wiso"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground",
        )}
        aria-current={active === "wiso" ? "page" : undefined}
      >
        WiSo demo
      </LocalizedLink>
    </div>
  );
}
