"use client";

import Link from "next/link";
import InkLogo from "./InkLogo";

const navItems = [
  { label: "Manifesto", href: "/" },
  { label: "How it works", href: "#how-it-works", hideOnMobile: true },
  { label: "Team", href: "/team" },
];

export default function Header() {
  return (
    <header className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center pb-6">
      <nav className="pointer-events-auto flex w-[min(92%,64rem)] flex-wrap items-center justify-between gap-3 rounded-[2rem] border border-ink/15 bg-paper/95 px-5 py-3 font-mono uppercase tracking-[0.35em] text-[0.6rem] text-ink shadow-[0_20px_45px_rgba(17,17,17,0.15)] backdrop-blur-md sm:px-8 sm:py-4">
        <Link
          href="/"
          className="hidden items-center gap-2 text-[0.65rem] tracking-[0.4em] sm:flex"
        >
          <InkLogo className="h-9 w-9" />
          <span className="text-base font-medium">inkRL</span>
        </Link>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-3 text-muted-gray">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full border border-transparent px-4 py-1 text-[0.58rem] tracking-[0.4em] transition-colors hover:border-ink/40 hover:text-ink ${
                item.hideOnMobile ? "hidden sm:inline-flex" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
