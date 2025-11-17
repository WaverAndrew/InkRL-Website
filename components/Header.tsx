"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import InkLogo from "./InkLogo";

const navItems = [
  { label: "Manifesto", href: "/" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Team", href: "/team" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/80 font-mono uppercase tracking-[0.35em] text-xs text-ink backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <InkLogo className="h-8 w-8" />
          <span className="text-base font-medium">inkRL</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[0.65rem] text-muted-gray transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#demo-section"
            className="rounded-full border border-ink px-5 py-2 text-[0.65rem] tracking-[0.4em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Get a demo
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-ink/40 text-[0.6rem] tracking-[0.4em] text-ink md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      <div
        className={`md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } fixed inset-0 z-40 bg-paper transition-opacity duration-300`}
      >
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 text-center text-sm tracking-[0.4em]">
          {navItems.map((item) => (
            <Link
              key={item.label + "-mobile"}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted-gray transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#demo-section"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-full border border-ink px-6 py-3 text-muted-gray transition-colors hover:bg-ink hover:text-paper"
          >
            Get a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
