"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const icons = [
    <svg key="0" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
    <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
    <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--color-foreground)]">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t.about.description}
          </p>
          <p className="mt-6 text-xl font-semibold text-[var(--color-primary)] italic">
            {t.about.tagline}
          </p>
        </div>

        <div className="bg-[var(--color-muted)] rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            {t.about.whyTitle}
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            {t.about.whyText}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.reasons.map((reason, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[var(--color-primary)]/20 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                {icons[i]}
              </div>
              <h4 className="font-bold text-lg mb-2">{reason.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
