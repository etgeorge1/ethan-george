"use client";

import { site } from "@/content/site";

export function MobileNav() {
  return (
    <>
      <button
        type="button"
        popoverTarget="mobile-nav"
        aria-label="Open menu"
        className="grid size-9 place-items-center rounded-full border border-border bg-surface/60 sm:hidden"
      >
        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <nav
        id="mobile-nav"
        popover="auto"
        aria-label="Mobile"
        className="mobile-nav"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) e.currentTarget.hidePopover();
        }}
      >
        <ul className="flex flex-col gap-1">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="block rounded-xl px-4 py-3 text-lg transition hover:bg-surface">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
