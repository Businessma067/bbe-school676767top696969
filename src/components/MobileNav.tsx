"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/config/site-nav";
import { NavItemLink } from "./NavItemLink";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-all hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85vw] max-w-sm border-l border-border bg-background p-0 [&>button]:hidden">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <SheetTitle className="font-display text-base font-semibold tracking-tight text-foreground">
              Menu
            </SheetTitle>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <SheetDescription className="sr-only">Navigation menu</SheetDescription>

          <nav className="overflow-y-auto px-6 py-4">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavItemLink
                    item={item}
                    onNavigate={() => setOpen(false)}
                    className="block w-full rounded-lg px-3 py-2.5 text-left font-display text-base font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
