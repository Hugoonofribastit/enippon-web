"use client";

import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Tours from "@/components/Tours";
import PlanYourTrip from "@/components/PlanYourTrip";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Tours />
        <PlanYourTrip />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </LanguageProvider>
  );
}
