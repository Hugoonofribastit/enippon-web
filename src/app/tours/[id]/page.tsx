"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { tours, seasonalTours } from "@/lib/tours";
import { translations, Locale } from "@/lib/translations";

export default function TourPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [locale, setLocale] = useState<Locale>("es");
  const t = translations[locale];
  const tour = tours.find((t) => t.id === id);
  const seasonal = seasonalTours.find((t) => t.id === id);

  if (!tour && !seasonal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tour not found</h1>
          <Link href="/#tours" className="text-[#c41e3a] font-semibold hover:underline">
            {locale === "es" ? "← Volver a tours" : "← Back to tours"}
          </Link>
        </div>
      </div>
    );
  }

  if (seasonal) {
    return (
      <div className="min-h-screen bg-white">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="ENIPPON TOURS" width={40} height={40} className="h-8 w-auto" />
              <span className="font-bold text-lg hidden sm:block">ENIPPON TOURS</span>
            </Link>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLocale(locale === "es" ? "en" : "es")}
                className="px-3 py-1.5 rounded-full text-xs font-bold border-2 border-[#c41e3a] text-[#c41e3a] hover:bg-[#c41e3a] hover:text-white transition-all"
              >
                {locale === "es" ? "EN" : "ES"}
              </button>
              <Link href="/#tours" className="text-sm font-medium text-gray-600 hover:text-[#c41e3a] transition-colors">
                ← Tours
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero banner */}
        <div className="relative h-[75vh] min-h-[500px] overflow-hidden">
          <Image
            src={seasonal.image}
            alt={seasonal.name[locale]}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/50 via-[#c41e3a]/25 to-[#1a1a2e]/70" />
          <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-16">
            <div className="text-center px-4">
              <span className="inline-block px-5 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
                {seasonal.type[locale]}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">{seasonal.name[locale]}</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            {seasonal.description[locale]}
          </p>

          {/* Contact */}
          <div className="bg-[#f5f5f7] rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {locale === "es" ? "¿Te interesa este tour?" : "Interested in this tour?"}
            </h2>
            <p className="text-gray-500 mb-8">
              {locale === "es"
                ? "Contactanos para conocer las próximas fechas disponibles."
                : "Contact us to find out the next available dates."}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/817092113559"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a
                href={`mailto:info@enippontours.com?subject=${encodeURIComponent(seasonal.name[locale])}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#2d2d44] text-white/60 text-center text-xs py-6">
          &copy; {new Date().getFullYear()} ENIPPON Co.,Ltd. {locale === "es" ? "Todos los derechos reservados." : "All rights reserved."}
        </footer>
      </div>
    );
  }

  const buildMailto = (form: FormData) => {
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const country = form.get("country") as string;
    const phone = form.get("phone") as string;
    const adults = form.get("adults") as string;
    const children = form.get("children") as string;
    const subject = form.get("subject") as string;
    const message = form.get("message") as string;

    const mailSubject = subject || `${locale === "es" ? "Consulta" : "Inquiry"}: ${tour.name[locale]}`;
    const body = `${t.form.tourName} ${tour.name[locale]}

${t.form.name}: ${name}
${t.form.email}: ${email}
${t.form.country}: ${country}
${t.form.phone}: ${phone}
${t.form.adults}: ${adults}
${t.form.children}: ${children || "-"}

${message}`;

    window.location.href = `mailto:info@enippontours.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="ENIPPON TOURS" width={40} height={40} className="h-8 w-auto" />
            <span className="font-bold text-lg hidden sm:block">ENIPPON TOURS</span>
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLocale(locale === "es" ? "en" : "es")}
              className="px-3 py-1.5 rounded-full text-xs font-bold border-2 border-[#c41e3a] text-[#c41e3a] hover:bg-[#c41e3a] hover:text-white transition-all"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>
            <Link href="/#tours" className="text-sm font-medium text-gray-600 hover:text-[#c41e3a] transition-colors">
              ← Tours
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero banner */}
      <div className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name[locale]}
          fill
          className={`object-cover ${["pop-tour", "hakone-tour"].includes(tour.id) ? "object-[center_30%]" : tour.id === "neo-tour" ? "object-[center_40%]" : "object-center"}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/50 via-[#c41e3a]/25 to-[#1a1a2e]/70" />
        <div className="absolute inset-0 flex items-end justify-center pb-12 md:pb-16">
          <div className="text-center px-4">
            <span className="inline-block px-5 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-4">
              {tour.duration}h &middot; {tour.startTime}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">{tour.name[locale]}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Quick info bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 -mt-20 relative z-10">
          {[
            { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, label: t.tours.duration, value: `${tour.duration} ${t.tours.hours}` },
            { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: t.tours.startTime, value: tour.startTime },
            { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, label: t.tours.meetingPoint, value: tour.meetingPoint[locale] },
            { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>, label: t.tours.transportCost, value: tour.transportCost === "-" ? "N/A" : tour.transportCost },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center">
              <div className="text-[#c41e3a] flex justify-center mb-2">{item.icon}</div>
              <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">{item.label}</p>
              <p className="font-bold text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {tour.description[locale]}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-12">
          {tour.highlights[locale].map((h, i) => (
            <span key={i} className="px-4 py-2 bg-[#c41e3a]/10 text-[#c41e3a] text-sm font-medium rounded-full">
              {h}
            </span>
          ))}
        </div>

        {/* Itinerary */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          {locale === "es" ? "Itinerario" : "Itinerary"}
        </h2>
        <div className="space-y-8 mb-14">
          {tour.itinerary.map((stop, i) => (
            <div key={i} className="relative pl-10 border-l-3 border-[#c41e3a]/20">
              <div className="absolute left-[-11px] top-1 w-5 h-5 rounded-full bg-[#c41e3a] border-3 border-white shadow-md" />
              <h3 className="text-xl font-bold mb-3 text-[#1a1a2e]">{stop.title[locale]}</h3>
              <p className="text-gray-600 leading-relaxed">{stop.description[locale]}</p>
            </div>
          ))}
        </div>

        {/* Includes (if applicable) */}
        {tour.includes && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 md:p-8 mb-8">
            <h3 className="font-bold text-green-800 text-lg mb-4">
              {locale === "es" ? "El tour incluye" : "Tour includes"}
            </h3>
            <ul className="space-y-3">
              {tour.includes[locale].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-green-700">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Notes */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="font-bold text-amber-800 text-lg mb-4">
            {locale === "es" ? "Tenga en cuenta" : "Please note"}
          </h3>
          <ul className="space-y-3">
            {tour.notes[locale].map((note, i) => (
              <li key={i} className="text-amber-700 flex items-start gap-3">
                <span className="text-amber-500 mt-1 text-lg">•</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* Details */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="font-bold text-blue-800 text-lg mb-4">
            {locale === "es" ? "Detalles del tour" : "Tour details"}
          </h3>
          <ul className="space-y-3">
            {tour.details[locale].map((d, i) => (
              <li key={i} className="text-blue-700 flex items-start gap-3">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Extra costs */}
        {tour.extraCosts && (
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 mb-16">
            <h3 className="font-bold text-gray-800 text-lg mb-4">
              {locale === "es" ? "Costos adicionales aproximados" : "Approximate additional costs"}
            </h3>
            <ul className="space-y-3">
              {tour.extraCosts[locale].map((c, i) => (
                <li key={i} className="text-gray-600 flex items-start gap-3">
                  <span className="text-gray-400 mt-0.5 font-bold">¥</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* FORM - Large, full width at the bottom */}
        <div id="inquiry-form" className="bg-[#f5f5f7] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{t.form.title}</h2>
            <p className="text-gray-500">
              {locale === "es"
                ? "Completa el formulario y te responderemos a la brevedad."
                : "Fill out the form and we'll get back to you shortly."}
            </p>
            <p className="text-[#c41e3a] font-semibold mt-2">{t.form.tourName} {tour.name[locale]}</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              buildMailto(new FormData(e.currentTarget));
            }}
            className="max-w-2xl mx-auto space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" required placeholder={t.form.name} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-[#c41e3a] focus:ring-2 focus:ring-[#c41e3a]/20 outline-none transition-all text-base" />
              <input name="email" type="email" required placeholder={t.form.email} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-[#c41e3a] focus:ring-2 focus:ring-[#c41e3a]/20 outline-none transition-all text-base" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="country" required placeholder={t.form.country} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-[#c41e3a] focus:ring-2 focus:ring-[#c41e3a]/20 outline-none transition-all text-base" />
              <input name="phone" required placeholder={t.form.phone} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-[#c41e3a] focus:ring-2 focus:ring-[#c41e3a]/20 outline-none transition-all text-base" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="adults" type="number" min="1" required placeholder={t.form.adults} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-[#c41e3a] focus:ring-2 focus:ring-[#c41e3a]/20 outline-none transition-all text-base" />
              <input name="children" type="number" min="0" placeholder={t.form.children} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-[#c41e3a] focus:ring-2 focus:ring-[#c41e3a]/20 outline-none transition-all text-base" />
            </div>
            <input name="subject" placeholder={t.form.subject} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-[#c41e3a] focus:ring-2 focus:ring-[#c41e3a]/20 outline-none transition-all text-base" />
            <textarea name="message" required rows={5} placeholder={t.form.message} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:border-[#c41e3a] focus:ring-2 focus:ring-[#c41e3a]/20 outline-none transition-all text-base resize-none" />
            <button type="submit" className="w-full py-4 bg-[#c41e3a] text-white text-lg font-semibold rounded-xl hover:bg-[#a01830] transition-colors shadow-lg shadow-[#c41e3a]/20">
              {t.form.send}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm mb-3">
              {locale === "es" ? "O contáctanos directamente:" : "Or contact us directly:"}
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://wa.me/817092113559"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a
                href="mailto:info@enippontours.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-900 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#2d2d44] text-white/60 text-center text-xs py-6">
        &copy; {new Date().getFullYear()} ENIPPON Co.,Ltd. {locale === "es" ? "Todos los derechos reservados." : "All rights reserved."}
      </footer>
    </div>
  );
}
