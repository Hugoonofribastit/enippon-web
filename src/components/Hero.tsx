"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <Image
        src="/akiba.jpg"
        alt="Japan"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 via-[#c41e3a]/30 to-[#1a1a2e]/80" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <Image
            src="/logo.png"
            alt="ENIPPON TOURS"
            width={180}
            height={180}
            className="mx-auto h-32 w-auto md:h-44 drop-shadow-2xl"
          />
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tight animate-fade-in-up">
          ENIPPON TOURS
        </h1>
        <p
          className="text-lg md:text-2xl text-white mb-10 font-light max-w-2xl mx-auto animate-fade-in-up px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
          style={{ animationDelay: "0.2s", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
        >
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#tours"
            className="px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            {t.hero.cta}
          </a>
          <a
            href="#plan"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/40 hover:bg-white/20 transition-all text-base"
          >
            {t.hero.ctaPlan}
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
