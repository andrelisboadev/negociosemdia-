"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@data/site.config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-paper/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-navy-900" onClick={() => setOpen(false)}>
          <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-base text-sun-300">
            N
          </span>
          {siteConfig.name}
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                  active ? "bg-navy-50 text-navy-900" : "text-slate-600 hover:bg-navy-50 hover:text-navy-900",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contato" className="btn-primary ml-2 !min-h-[40px] !px-4 !py-2 text-sm">
            Fale comigo
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 hover:bg-navy-50 md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal (celular)" className="border-t border-navy-100 bg-paper md:hidden">
          <ul className="container-page space-y-1 py-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-navy-900 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contato" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
                Fale comigo
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
