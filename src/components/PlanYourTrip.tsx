"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function PlanYourTrip() {
  const { locale, t } = useLanguage();

  const icons = [
    <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
    <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
    <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
    <svg key="4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="5" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    <svg key="6" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  ];

  const buildMailto = (form: FormData) => {
    const fields = ["name", "phone", "email", "country", "dates", "days", "people", "destinations", "budget", "message"];
    const labels = t.plan.form;
    const labelsArr = [labels.name, labels.phone, labels.email, labels.country, labels.dates, labels.days, labels.people, labels.destinations, labels.budget, labels.message];

    let body = "";
    fields.forEach((f, i) => {
      const val = form.get(f) as string;
      if (val) body += `${labelsArr[i]}: ${val}\n`;
    });

    const subject = locale === "es" ? "Consulta - Planificación de viaje" : "Inquiry - Trip Planning";
    window.location.href = `mailto:info@enippontours.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="plan" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.plan.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.plan.subtitle}</p>
        </div>

        <div className="bg-[var(--color-muted)] rounded-3xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl font-bold mb-3">{t.plan.howWeWork}</h3>
          <p className="text-gray-600 leading-relaxed mb-8">{t.plan.howWeWorkText}</p>
          <p className="text-gray-600 leading-relaxed">{t.plan.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-20">
          {t.plan.services.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-3">
                {icons[i]}
              </div>
              <h4 className="font-bold text-sm mb-1">{service.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{t.plan.formTitle}</h3>
            <p className="text-gray-600">{t.plan.formSubtitle}</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              buildMailto(new FormData(e.currentTarget));
            }}
            className="space-y-4 bg-[var(--color-muted)] rounded-3xl p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" required placeholder={t.plan.form.name} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm" />
              <input name="phone" placeholder={t.plan.form.phone} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="email" type="email" required placeholder={t.plan.form.email} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm" />
              <input name="country" placeholder={t.plan.form.country} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input name="dates" placeholder={t.plan.form.dates} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm" />
              <input name="days" type="number" min="1" placeholder={t.plan.form.days} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm" />
              <input name="people" type="number" min="1" placeholder={t.plan.form.people} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm" />
            </div>
            <input name="destinations" placeholder={t.plan.form.destinations} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm" />
            <input name="budget" placeholder={t.plan.form.budget} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm" />
            <textarea name="message" rows={4} placeholder={t.plan.form.message} className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all text-sm resize-none" />
            <button
              type="submit"
              className="w-full py-3.5 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors shadow-lg shadow-[var(--color-primary)]/20 text-base"
            >
              {t.plan.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
