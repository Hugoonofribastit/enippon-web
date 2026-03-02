"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.tours, href: "#tours" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.plan, href: "#plan" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ENIPPON TOURS" width={48} height={48} className="h-10 w-auto md:h-12" />
            <span className="font-bold text-lg md:text-xl text-[var(--color-foreground)] tracking-tight hidden sm:block">
              ENIPPON TOURS
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setLocale(locale === "es" ? "en" : "es")}
              className="ml-2 px-3 py-1.5 rounded-full text-xs font-bold border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLocale(locale === "es" ? "en" : "es")}
              className="px-3 py-1.5 rounded-full text-xs font-bold border-2 border-[var(--color-primary)] text-[var(--color-primary)]"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
