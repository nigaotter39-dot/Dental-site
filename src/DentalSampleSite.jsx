"use client";

import React, { useEffect, useState } from "react";

export default function DentalSampleSite() {
  const [config, setConfig] = useState({
    clinic: "A A Dental & Aesthetic Clinic",
    city: "Islamabad",
    area: "Islamabad / Rawalpindi",
    hours: "Mon–Sat: 11:00 AM – 9:00 PM",
    phone: "+92 300 0000000",
    whatsapp: "923000000000",
    rating: "4.9",
    reviews: "180+",
    patients: "2,500+",
    mapUrl: "https://www.google.com/maps?q=Islamabad,Pakistan&output=embed",
  });

  const [activeTab, setActiveTab] = useState('smile');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    // Dynamic URL Parameter Engine for rapid client pitching
    const params = new URLSearchParams(window.location.search);
    setConfig((prev) => ({
      clinic: params.get("clinic") || prev.clinic,
      city: params.get("city") || prev.city,
      area: params.get("area") || prev.area,
      hours: params.get("hours") || prev.hours,
      phone: params.get("phone") || prev.phone,
      whatsapp: params.get("whatsapp") || prev.whatsapp,
      rating: params.get("rating") || prev.rating,
      reviews: params.get("reviews") || prev.reviews,
      patients: params.get("patients") || prev.patients,
      mapUrl: params.get("map") || prev.mapUrl,
    }));
  }, []);

  const buildWhatsAppLink = (message) =>
    `https://wa.me/${config.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1c1917] font-sans antialiased selection:bg-[#0D5C53] selection:text-white overflow-x-hidden">
      
      {/* 1. TOP CLINICAL STATUS LEDGER */}
      <div className="border-b border-stone-200 bg-[#F4F0EA] text-[11px] font-mono tracking-wider py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-stone-600">
          <div className="flex items-center gap-3">
            <span className="text-[#0D5C53] font-bold">LOCATION: {config.area.toUpperCase()}</span>
            <span className="text-stone-300 hidden sm:inline">|</span>
            <span>CLINICAL HOURS: {config.hours.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>STERILIZATION: <strong className="text-stone-900 font-bold">CLASS-B AUTOCLAVE</strong></span>
            <span className="text-stone-300 hidden sm:inline">|</span>
            <span className="text-[#0D5C53] font-bold">VERIFIED RATING: {config.rating} / 5.0</span>
          </div>
        </div>
      </div>

      {/* 2. REFINED ATELIER NAVIGATION */}
      <nav className="border-b border-stone-200 bg-[#FAF8F5]/95 sticky top-0 z-50 backdrop-blur-md px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-3">
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#15191E] uppercase">
              {config.clinic.split(" ")[0]} <span className="italic font-normal text-[#0D5C53]">{config.clinic.split(" ").slice(1).join(" ")}</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-stone-500">
            <a href="#philosophy" className="hover:text-stone-900 transition-colors">01. Standard</a>
            <a href="#treatments" className="hover:text-stone-900 transition-colors">02. Treatment Menu</a>
            <a href="#protocol" className="hover:text-stone-900 transition-colors">03. 3-Step Protocol</a>
            <a href="#suites" className="hover:text-stone-900 transition-colors">04. Operatory Suites</a>
            <a href="#location" className="hover:text-stone-900 transition-colors">05. Location</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book an appointment with your senior consultant.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#15191E] bg-[#15191E] hover:bg-[#0D5C53] hover:border-[#0D5C53] text-white font-mono text-xs font-bold px-5 py-2.5 uppercase tracking-wider transition-all duration-200"
            >
              Consult via WhatsApp →
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900 font-mono text-sm border border-stone-300"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-stone-200 flex flex-col gap-2 font-mono text-xs uppercase tracking-wider text-stone-700 pb-2">
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="py-2 px-2 hover:bg-stone-100">01. The Standard</a>
            <a href="#treatments" onClick={() => setMobileMenuOpen(false)} className="py-2 px-2 hover:bg-stone-100">02. Treatment Menu</a>
            <a href="#protocol" onClick={() => setMobileMenuOpen(false)} className="py-2 px-2 hover:bg-stone-100">03. 3-Step Protocol</a>
            <a href="#suites" onClick={() => setMobileMenuOpen(false)} className="py-2 px-2 hover:bg-stone-100">04. Operatory Suites</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="py-2 px-2 hover:bg-stone-100">05. Location & Concierge</a>
          </div>
        )}
      </nav>

      {/* 3. HERO SECTION: Architectural Editorial Split */}
      <header className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          
          {/* Left Column: Manifesto & Call to Action */}
          <div className="lg:col-span-7 p-6 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200">
            <div>
              <div className="font-mono text-xs text-[#0D5C53] uppercase tracking-widest mb-6">
                // BESPOKE SMILE & FACIAL ARCHITECTURE • {config.city.toUpperCase()}
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-[#15191E] leading-[1.05] tracking-tight mb-8">
                The Architecture of a <br />
                <span className="italic font-light text-[#0D5C53]">Flawless, Painless</span> <br />
                Smile in One Visit.
              </h1>

              <p className="text-stone-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-10">
                Gentle clinical precision, imported laser enamel technology, and specialized facial aesthetics. Designed specifically for discerning patients who demand natural elegance without waiting rooms or discomfort.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book an appointment. Please share your earliest available slot.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0D5C53] hover:bg-[#093f39] text-white font-mono text-xs uppercase font-bold tracking-widest py-4 px-8 text-center transition-colors shadow-sm"
                >
                  Book 1-Click WhatsApp Consult →
                </a>
                <a
                  href="#treatments"
                  className="border border-stone-300 hover:border-stone-800 text-stone-700 hover:text-stone-900 font-mono text-xs uppercase tracking-widest py-4 px-6 text-center transition-colors"
                >
                  View Treatment Menu ↓
                </a>
              </div>
            </div>

            {/* Bottom Metadata Ledger */}
            <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-stone-200 font-mono text-left">
              <div>
                <span className="text-stone-400 text-[10px] block uppercase">Clinical Record</span>
                <span className="text-[#15191E] text-base sm:text-lg font-bold">{config.patients}</span>
                <span className="text-stone-500 text-[10px] block">Smiles Restored</span>
              </div>
              <div>
                <span className="text-stone-400 text-[10px] block uppercase">Google Ledger</span>
                <span className="text-[#15191E] text-base sm:text-lg font-bold">{config.rating} / 5.0</span>
                <span className="text-stone-500 text-[10px] block">{config.reviews} Reviews</span>
              </div>
              <div>
                <span className="text-stone-400 text-[10px] block uppercase">Pain Protocol</span>
                <span className="text-[#0D5C53] text-base sm:text-lg font-bold">0 / 10 SCALE</span>
                <span className="text-stone-500 text-[10px] block">Gentle Anesthesia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Full-Height Specialist Doctor Frame */}
          <div className="lg:col-span-5 relative bg-stone-900 overflow-hidden min-h-[360px] lg:min-h-full">
            <img 
              src="/images/specialist-doctor.jpg" 
              alt="Senior dental specialist in surgical operatory" 
              className="w-full h-full object-cover object-top contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 font-mono text-xs bg-white/95 border border-stone-200 p-4">
              <span className="text-[#0D5C53] block font-bold text-[11px] mb-0.5">LEAD CLINICIAN PROTOCOL</span>
              <p className="text-stone-600 text-[11px] leading-tight font-sans">
                Every assessment is personally conducted by certified cosmetic dental surgeons and facial aesthetic physicians.
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* 4. SECTION 01: THE CLINICAL STANDARD (Brutalist 3-Column Ledger) */}
      <section id="philosophy" className="border-b border-stone-200 bg-[#F4F0EA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          
          <div className="p-8 sm:p-10">
            <span className="font-mono text-xs text-[#0D5C53] font-bold block mb-3">PILLAR 01 // ENAMEL PRESERVATION</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-3">Micro-Conservative Dentistry</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We never aggressively file down healthy teeth. Our veneers and bonding rely on ultra-thin 0.3mm ceramic shells and bioactive bonding agents that preserve your biological tooth structure for life.
            </p>
          </div>

          <div className="p-8 sm:p-10">
            <span className="font-mono text-xs text-[#0D5C53] font-bold block mb-3">PILLAR 02 // ZERO SENSITIVITY WHITENING</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-3">Targeted Laser Phototherapy</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Standard peroxide gels cause excruciating post-whitening electric shocks. Our calibrated laser whitening system breaks stubborn stains at molecular depth with desensitizing minerals applied simultaneously.
            </p>
          </div>

          <div className="p-8 sm:p-10">
            <span className="font-mono text-xs text-[#0D5C53] font-bold block mb-3">PILLAR 03 // TRANSPARENT ACCOUNTABILITY</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 mb-3">Fixed Pricing, No Hidden Fees</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Every procedure cost is quoted upfront before treatment begins. No mystery add-ons, no surprise x-ray charges, and direct WhatsApp invoice confirmation.
            </p>
          </div>

        </div>
      </section>

      {/* 5. SECTION 02: THE 3-STEP PROTOCOL (Destroys Patient Anxiety) */}
      <section id="protocol" className="border-b border-stone-200 py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-stone-200 gap-4">
            <div>
              <span className="font-mono text-xs text-[#0D5C53] uppercase tracking-widest block mb-1">
                // ANXIETY-FREE PATIENT JOURNEY
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900">
                The 3-Step Smile Protocol
              </h2>
            </div>
            <p className="font-mono text-xs text-stone-500">
              [ ZERO MESSY IMPRESSION GOOP • 4K DIGITAL SIMULATION ]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono">
            
            <div className="border border-stone-200 bg-white p-8">
              <span className="text-stone-400 text-xs block mb-2">STEP // 01</span>
              <h4 className="font-serif text-2xl font-normal text-stone-900 mb-3 font-sans">
                3D Intraoral Scanning
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                Our optical wand takes 6,000 frames per second to map your bite with sub-millimeter precision. No gagging on sticky impression paste.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-8">
              <span className="text-stone-400 text-xs block mb-2">STEP // 02</span>
              <h4 className="font-serif text-2xl font-normal text-stone-900 mb-3 font-sans">
                Live Outcome Preview
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                Before we touch your teeth, review your custom smile outcome on a high-definition screen. You approve your tooth shape, shade, and alignment.
              </p>
            </div>

            <div className="border border-stone-200 bg-white p-8">
              <span className="text-stone-400 text-xs block mb-2">STEP // 03</span>
              <h4 className="font-serif text-2xl font-normal text-stone-900 mb-3 font-sans">
                Gentle Single-Visit Delivery
              </h4>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                Relax in ergonomic memory-foam dental suites with noise-canceling audio. Walk out the exact same day with immediate, radiantly transformed results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION 03: CLINICAL SUITES & REAL OUTCOME MATRIX (Using 4 Photos) */}
      <section id="suites" className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          
          <div className="p-6 sm:p-8 border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
            <span className="text-[#0D5C53] font-bold uppercase tracking-widest">
              // FACILITY & CLINICAL OUTCOME EVIDENCE
            </span>
            <span className="text-stone-500">
              SECTOR F-6 / G-9 COMMERCIAL • STRICT ISO-CERTIFIED ENVIRONMENT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            
            {/* Cell 1: Smile Outcome */}
            <div className="relative h-80 sm:h-96 overflow-hidden bg-stone-100 group border-b border-stone-200">
              <img 
                src="/images/smile-hero.jpg" 
                alt="Whitened teeth clinical outcome" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent p-6 flex flex-col justify-end font-mono">
                <span className="text-[10px] text-teal-300 uppercase font-bold tracking-widest mb-1">CLINICAL RESULT</span>
                <h4 className="font-serif text-2xl font-normal text-white">Laser Whitening & Micro-Bonding</h4>
                <p className="text-stone-300 text-xs mt-1 font-sans">Enamel-safe stain removal achieved in a single 45-minute clinical appointment.</p>
              </div>
            </div>

            {/* Cell 2: Modern Operatory Suite */}
            <div className="relative h-80 sm:h-96 overflow-hidden bg-stone-100 group border-b border-stone-200">
              <img 
                src="/images/modern-operatory.jpg" 
                alt="Private modern operatory suite" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent p-6 flex flex-col justify-end font-mono">
                <span className="text-[10px] text-teal-300 uppercase font-bold tracking-widest mb-1">OPERATORY SUITE</span>
                <h4 className="font-serif text-2xl font-normal text-white">Tranquil Private Treatment Room</h4>
                <p className="text-stone-300 text-xs mt-1 font-sans">Imported ergonomic chair, low-radiation sensors, and multi-stage air purification.</p>
              </div>
            </div>

            {/* Cell 3: Procedure In Action */}
            <div className="relative h-80 sm:h-96 overflow-hidden bg-stone-100 group">
              <img 
                src="/images/clinical-procedure.jpg" 
                alt="Doctor performing delicate dental procedure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent p-6 flex flex-col justify-end font-mono">
                <span className="text-[10px] text-teal-300 uppercase font-bold tracking-widest mb-1">SURGICAL PRECISION</span>
                <h4 className="font-serif text-2xl font-normal text-white">Optical Loupe Magnification</h4>
                <p className="text-stone-300 text-xs mt-1 font-sans">Every restoration is completed under 3.5x magnification for seamless margins.</p>
              </div>
            </div>

            {/* Cell 4: Specialist Consultation */}
            <div className="relative h-80 sm:h-96 overflow-hidden bg-stone-100 group">
              <img 
                src="/images/specialist-doctor.jpg" 
                alt="Dental specialist ready for patient consult" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent p-6 flex flex-col justify-end font-mono">
                <span className="text-[10px] text-teal-300 uppercase font-bold tracking-widest mb-1">CONSULTATION</span>
                <h4 className="font-serif text-2xl font-normal text-white">Comprehensive Diagnostic Assessment</h4>
                <p className="text-stone-300 text-xs mt-1 font-sans">One-on-one consultation addressing your exact aesthetic desires and bite function.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. SECTION 04: TRANSPARENT TREATMENT PACKAGES (Architectural Ledger) */}
      <section id="treatments" className="border-b border-stone-200 py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs text-[#0D5C53] uppercase tracking-widest block mb-2">
              // TRANSPARENT CARE PACKAGES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-stone-900">
              Curated Treatment Menu
            </h2>
            <p className="text-stone-600 text-sm mt-3">
              Direct booking via WhatsApp. Locked pricing with zero hidden clinical surcharges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x border border-stone-200 bg-white">
            
            {/* Package 1 */}
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-4 font-mono text-xs">
                  <span className="text-[#0D5C53] font-bold">MENU // 01</span>
                  <span className="text-stone-400">1 APPOINTMENT</span>
                </div>

                <h3 className="font-serif text-3xl font-normal text-stone-900 mb-2">
                  Complete Smile Refresh
                </h3>
                <p className="text-xs text-stone-500 mb-6 leading-relaxed font-sans">
                  Deep preventive hygiene, ultrasonic plaque removal, and gentle desensitizing laser whitening.
                </p>

                <div className="border-t border-b border-stone-200 py-6 mb-8 font-mono">
                  <span className="text-3xl font-bold text-stone-900 block">PKR 8,500</span>
                  <span className="text-xs text-stone-500 block mt-1">Full Clinical Session Included</span>
                </div>

                <ul className="space-y-3 font-mono text-xs text-stone-700 mb-8 font-sans">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0D5C53] font-bold mt-0.5">+</span>
                    <span>Ultrasonic plaque, tartar & deep smoker/tea stain extraction</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0D5C53] font-bold mt-0.5">+</span>
                    <span>Enamel-safe high-precision laser whitening session</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0D5C53] font-bold mt-0.5">+</span>
                    <span>Comprehensive digital intraoral exam & gum screening</span>
                  </li>
                </ul>
              </div>

              <a
                href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book the Complete Smile Refresh package (PKR 8,500). What slots are available?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-4 text-center font-mono text-xs uppercase font-bold tracking-wider bg-stone-100 hover:bg-[#15191E] text-stone-900 hover:text-white border border-stone-300 transition-colors"
              >
                Book Smile Refresh →
              </a>
            </div>

            {/* Package 2: Highlighted */}
            <div className="p-8 sm:p-10 flex flex-col justify-between bg-[#15191E] text-white relative">
              <div className="absolute top-0 right-0 bg-[#0D5C53] text-teal-100 font-mono text-[10px] font-bold uppercase tracking-widest px-3.5 py-1">
                FLAGSHIP MAKE-OVER
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-4 font-mono text-xs">
                  <span className="text-teal-300 font-bold">MENU // 02</span>
                  <span className="text-stone-400">CUSTOM CAD/CAM</span>
                </div>

                <h3 className="font-serif text-3xl font-normal text-white mb-2">
                  Hollywood Smile & Alignment
                </h3>
                <p className="text-xs text-stone-400 mb-6 leading-relaxed font-sans">
                  Full aesthetic transformation consultation, including 3D realistic smile simulation, Zirconia veneers & clear aligner mapping.
                </p>

                <div className="border-t border-b border-stone-700 py-6 mb-8 font-mono">
                  <span className="text-3xl font-bold text-teal-300 block">PKR 15,000</span>
                  <span className="text-xs text-stone-400 block mt-1">Full Diagnostic Consult & Simulation</span>
                </div>

                <ul className="space-y-3 font-mono text-xs text-stone-300 mb-8 font-sans">
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold mt-0.5">+</span>
                    <span>3D digital optical scan & instant photorealistic smile preview</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold mt-0.5">+</span>
                    <span>Evaluation for ultra-thin Zirconia porcelain veneers & invisible aligners</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-bold mt-0.5">+</span>
                    <span>Bespoke treatment timeline with flexible stage installments</span>
                  </li>
                </ul>
              </div>

              <a
                href={buildWhatsAppLink(`Hi ${config.clinic}! I'm interested in the Hollywood Smile & Alignment Consult. Can we schedule an assessment?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-4 text-center font-mono text-xs uppercase font-bold tracking-wider bg-[#0D5C53] hover:bg-teal-500 text-white transition-colors"
              >
                Book Smile Makeover Consult →
              </a>
            </div>

            {/* Package 3 */}
            <div className="p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-4 font-mono text-xs">
                  <span className="text-[#0D5C53] font-bold">MENU // 03</span>
                  <span className="text-stone-400">CLINICAL FACIAL</span>
                </div>

                <h3 className="font-serif text-3xl font-normal text-stone-900 mb-2">
                  Clinical Skin & Facial Glow
                </h3>
                <p className="text-xs text-stone-500 mb-6 leading-relaxed font-sans">
                  Medical-grade HydraFacial, deep sebum extraction, and dermal infusion to restore natural youthful radiance.
                </p>

                <div className="border-t border-b border-stone-200 py-6 mb-8 font-mono">
                  <span className="text-3xl font-bold text-stone-900 block">PKR 10,000</span>
                  <span className="text-xs text-stone-500 block mt-1">60-Minute Specialist Session</span>
                </div>

                <ul className="space-y-3 font-mono text-xs text-stone-700 mb-8 font-sans">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0D5C53] font-bold mt-0.5">+</span>
                    <span>Medical-grade vortex vacuum pore extraction & dead skin exfoliation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0D5C53] font-bold mt-0.5">+</span>
                    <span>Hyaluronic acid & antioxidant dermal infusion protocol</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#0D5C53] font-bold mt-0.5">+</span>
                    <span>Specialist post-treatment barrier recovery plan</span>
                  </li>
                </ul>
              </div>

              <a
                href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book the Clinical Skin & Facial Glow package (PKR 10,000). Please share available timings.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block py-4 text-center font-mono text-xs uppercase font-bold tracking-wider bg-stone-100 hover:bg-[#15191E] text-stone-900 hover:text-white border border-stone-300 transition-colors"
              >
                Book Facial Session →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 8. SECTION 05: COMMON PATIENT QUESTIONS (Clean Accordion) */}
      <section className="border-b border-stone-200 py-16 px-4 sm:px-8 bg-[#F4F0EA]">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-10 text-left">
            <span className="font-mono text-xs text-[#0D5C53] uppercase tracking-widest block mb-1">
              // TRANSPARENT CLINICAL ANSWERS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-stone-300 divide-y divide-stone-300 font-mono">
            {[
              {
                q: "Is teeth whitening painful? Will my teeth hurt afterwards?",
                a: "No. Traditional bleaching methods often dehydrate the tooth causing electric nerve shocks. Our system combines calibrated cold laser light with mineral desensitizers applied immediately during the session, making the procedure pain-free for over 95% of patients."
              },
              {
                q: "How does booking on WhatsApp work? Who actually replies?",
                a: "When you tap any WhatsApp link on this site, you connect directly with our patient coordination desk at the clinic. We immediately check our real-time operatory calendar and lock in your preferred time slot with zero automated bot delays."
              },
              {
                q: "What is the difference between composite bonding and porcelain veneers?",
                a: "Composite bonding is sculpted chairside directly onto your teeth in a single appointment, making it an affordable, immediate fix for chips and minor gaps. Porcelain veneers are custom-milled Zirconia or E-Max shells fabricated in a dental laboratory for maximum longevity and stain resistance."
              },
              {
                q: "How clean and sterile is the facility?",
                a: "We adhere to hospital-grade sterilization protocols. Every single handpiece and instrument is processed through a Class-B medical vacuum autoclave with chemical indicator strips verifying complete sterility prior to every patient appointment."
              }
            ].map((faq, idx) => (
              <div key={idx} className="py-5">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-start justify-between gap-4 text-sm sm:text-base font-bold text-stone-900 hover:text-[#0D5C53] transition-colors"
                >
                  <span className="font-sans leading-snug">{faq.q}</span>
                  <span className="text-[#0D5C53] font-mono text-sm shrink-0">
                    {activeFaq === idx ? '[-]' : '[+]'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans max-w-2xl">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. LOCATION TERMINAL & WHATSAPP CONCIERGE FOOTER */}
      <footer id="location" className="bg-[#15191E] text-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="font-mono text-xs text-teal-300 uppercase tracking-widest block">
              // DIRECT CONSULTATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white leading-tight">
              Begin Your Smile & <br />
              <span className="italic text-teal-300">Facial Architecture</span> Today.
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm font-sans max-w-md leading-relaxed">
              Skip receptionist phone tags. Message our direct clinical coordination desk on WhatsApp to confirm your preferred consultation slot.
            </p>
            <div className="pt-2">
              <a
                href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book an appointment with your senior consultant.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#0D5C53] hover:bg-teal-500 text-white font-mono text-xs uppercase font-bold tracking-widest py-4 px-8 transition-colors shadow-lg"
              >
                Message on WhatsApp in 1 Click →
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 border border-stone-800 bg-black/40 p-6 sm:p-8 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <span className="text-stone-400 uppercase text-[10px]">CLINICAL LOCATION TERMINAL</span>
              <span className="text-teal-400 font-bold text-[10px]">OPERATIONAL</span>
            </div>
            <div className="space-y-1.5 text-stone-300 text-[11px] sm:text-xs font-sans">
              <p className="text-white font-bold text-sm font-mono">{config.clinic}</p>
              <p>Main Boulevard, Sector F-6 / G-9 Commercial, {config.area}</p>
              <p>
                TELEPHONE: <a href={`tel:${config.phone.replace(/\s+/g, "")}`} className="text-teal-300 hover:underline">{config.phone}</a>
              </p>
              <p>HOURS: {config.hours} (Sunday by appointment)</p>
              <p className="text-stone-500 text-[10px] pt-1 font-mono">DEDICATED PATIENT PARKING ON-SITE</p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between font-mono text-[10px] text-stone-500 gap-3 text-center sm:text-left">
          <span>{config.clinic} // ALL RIGHTS RESERVED</span>
          <span>STRICT ISO STERILIZATION PROTOCOLS FOLLOWED</span>
        </div>
      </footer>

    </div>
  );
}
