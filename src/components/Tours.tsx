"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { tours, seasonalTours } from "@/lib/tours";

export default function Tours() {
  const { locale, t } = useLanguage();

  return (
    <section id="tours" className="py-20 md:py-28 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--color-foreground)]">
            {t.tours.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.tours.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              href={`/tours/${tour.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.name[locale]}
                  fill
                  className={`object-cover group-hover:scale-105 transition-transform duration-500 ${["pop-tour", "hakone-tour"].includes(tour.id) ? "object-[center_30%]" : "object-center"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">
                    {tour.duration}h{tour.startTime !== "-" && <> &middot; {tour.startTime}</>}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">
                  {tour.name[locale]}
                </h3>
                <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">
                  {tour.shortDescription[locale]}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tour.highlights[locale].slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-full border border-gray-100"
                    >
                      {h}
                    </span>
                  ))}
                  {tour.highlights[locale].length > 3 && (
                    <span className="text-xs px-2 py-0.5 bg-gray-50 text-gray-400 rounded-full border border-gray-100">
                      +{tour.highlights[locale].length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  {tour.transportCost !== "-" ? (
                    <span className="text-xs text-gray-400">
                      {t.tours.transportCost}: {tour.transportCost}
                    </span>
                  ) : <span />}
                  <span className="px-4 py-1.5 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-full group-hover:bg-[var(--color-primary-dark)] transition-colors">
                    {t.tours.details}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-3">
            {t.tours.seasonalTitle}
          </h3>
          <p className="text-gray-600 text-center mb-10">
            {t.tours.seasonalSubtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalTours.map((tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name[locale]}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full">
                    {tour.type[locale]}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-3 group-hover:text-[var(--color-primary)] transition-colors">{tour.name[locale]}</h4>
                  <span className="px-4 py-1.5 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-full group-hover:bg-[var(--color-primary-dark)] transition-colors">
                    {t.tours.details}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
