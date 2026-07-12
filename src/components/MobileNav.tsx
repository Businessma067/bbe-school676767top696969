"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const menuItems = [
  { label: "Demo-Practice", href: "/demo-practice", isRoute: true },
  { label: "Full course", href: "#full-course", isRoute: false },
  { label: "BBE-school products", href: "#bbe-products", isRoute: false },
  { label: "Important features", href: "#important-features", isRoute: false },
  { label: "Reviews", href: "#reviews", isRoute: false },
  { label: "FAQ", href: "#faq", isRoute: false },
];

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
      <SheetContent side="right" className="w-[80vw] max-w-sm border-l border-border bg-background p-0">
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
          <SheetDescription className="sr-only">
            Navigation menu for the BBE School website
          </SheetDescription>

          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <ul className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3.5 font-display text-lg font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3.5 font-display text-lg font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-border px-6 py-4">
            <p className="text-xs font-medium text-muted-foreground">
              BBE School · WU Vienna Prep
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
