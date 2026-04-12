"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

function FaqAnswer({ text }: { text: string }) {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let bulletGroup: string[] = [];

  const flushBullets = () => {
    if (bulletGroup.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="mt-2 mb-2 space-y-1.5 pl-1">
          {bulletGroup.map((b, j) => (
            <li key={j} className="flex items-start gap-2">
              <span className="text-[var(--color-primary)] mt-0.5 flex-shrink-0">●</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      );
      bulletGroup = [];
    }
  };

  lines.forEach((line, i) => {
    if (line.startsWith("● ") || line.startsWith("●")) {
      bulletGroup.push(line.replace(/^●\s*/, ""));
    } else {
      flushBullets();
      if (line.trim()) {
        elements.push(
          <p key={`p-${i}`} className={elements.length > 0 ? "mt-2" : ""}>
            {line}
          </p>
        );
      }
    }
  });
  flushBullets();

  return <>{elements}</>;
}

export default function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[var(--color-muted)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          {t.faq.title}
        </h2>
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-sm md:text-base pr-4">
                  {item.q}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed animate-fade-in">
                  <FaqAnswer text={item.a} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
