"use client";

import React, { useEffect, useState } from "react";

export default function DentalSampleSite() {
  const [config, setConfig] = useState({
    clinic: "A A Dental & Aesthetic Clinic",
    city: "Islamabad",
    area: "Sector F-6 / G-9 Commercial, Islamabad",
    hours: "Mon–Sat: 11:00 AM – 9:00 PM",
    phone: "+92 300 0000000",
    whatsapp: "923000000000",
    rating: "4.9",
    reviews: "180+",
    patients: "2,500+",
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
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
    }));
  }, []);

  const buildWhatsAppLink = (message) =>
    `https://wa.me/${config.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  const treatments = [
    {
      id: "refresh",
      category: "dental",
      name: "Complete Smile Refresh",
      time: "Single 45-Min Session",
      price: "PKR 8,500",
      desc: "Deep oral prophylaxis, ultrasonic scaling, stubborn nicotine/tea stain removal, and cold laser desensitizing whitening.",
      features: [
        "Deep plaque, calculus & smoking/tea stain removal",
        "Gentle, enamel-safe cold laser whitening",
        "Full oral wellness evaluation & gum health check",
      ],
      popular: false,
    },
    {
      id: "hollywood",
      category: "cosmetic",
      name: "Hollywood Smile & Veneers",
      time: "Custom Treatment Plan",
      price: "PKR 15,000",
      priceNote: "Initial Diagnostic & 3D Simulation",
      desc: "Comprehensive aesthetic redesign using 3D digital oral mapping, ultra-thin porcelain veneers, and clear aligner planning.",
      features: [
        "3D intraoral digital scan & live smile simulator",
        "Evaluation for ultra-thin 0.3mm Zirconia / E-Max veneers",
        "Clear aligner invisible teeth-straightening plan",
      ],
      popular: true,
    },
    {
      id: "hydrafacial",
      category: "aesthetic",
      name: "Medical HydraFacial Glow",
      time: "60-Minute Treatment",
      price: "PKR 10,000",
      desc: "Clinical vortex vacuum pore cleansing, painless blackhead extraction, followed by active antioxidant & hyaluronic infusion.",
      features: [
        "Vortex exfoliation & sebum extraction",
        "Hyaluronic acid & peptide nourishment infusion",
        "LED light therapy for rapid skin rejuvenation",
      ],
      popular: false,
    },
  ];

  const filteredTreatments = activeCategory === "all" 
    ? treatments 
    : treatments.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-teal-600 selection:text-white pb-20 sm:pb-0 relative overflow-x-hidden">

      {/* TOP ANNOUNCEMENT TICKER */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-4">
            <span className="inline-flex items-center gap-1.5 text-teal-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              {config.area}
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>{config.hours}</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="text-amber-400 flex items-center gap-1">
              ★ {config.rating} <span className="text-slate-300">({config.reviews} verified reviews)</span>
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-300 hidden md:inline">Hospital-Grade Class-B Autoclave</span>
          </div>
        </div>
      </div>

      {/* STICKY GLASS HEADER */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-teal-700/20">
              ✦
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 block leading-tight">
                {config.clinic.split(" ")[0]} <span className="text-teal-700">{config.clinic.split(" ").slice(1, 3).join(" ")}</span>
              </span>
              <span className="text-[11px] text-slate-500 tracking-wider uppercase block font-semibold">
                Dental & Facial Aesthetics
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#services" className="hover:text-teal-700 transition-colors">Treatments</a>
            <a href="#why-us" className="hover:text-teal-700 transition-colors">Why Choose Us</a>
            <a href="#protocol" className="hover:text-teal-700 transition-colors">Our Process</a>
            <a href="#facility" className="hover:text-teal-700 transition-colors">Our Clinic</a>
            <a href="#faq" className="hover:text-teal-700 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book a consultation.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md shadow-teal-700/20 hover:shadow-teal-700/30 transition-all duration-200"
            >
              <span>Book Consultation</span>
              <span>→</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 flex flex-col gap-1 text-sm font-semibold text-slate-700 pb-3">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-teal-700"
            >
              Treatments & Pricing
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-teal-700"
            >
              Why Choose Us
            </a>
            <a 
              href="#protocol" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-teal-700"
            >
              3-Step Painless Process
            </a>
            <a 
              href="#facility" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-teal-700"
            >
              Clinic & Operatory
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50 hover:text-teal-700"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-2 px-1">
              <a
                href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book an appointment.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-teal-700 text-white font-bold py-3 rounded-xl text-center shadow-md shadow-teal-700/20"
              >
                Chat on WhatsApp Directly →
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION WITH DYNAMIC VIBRANT GRADIENT MESH */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:py-20 lg:py-24 border-b border-slate-100">
        
        {/* Living Background Atmosphere: Soft warm/teal blurred glowing orbs */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-teal-200/40 via-emerald-100/40 to-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-20 right-[-100px] w-[350px] h-[350px] bg-amber-100/40 rounded-full blur-2xl pointer-events-none -z-10" />
        <div className="absolute bottom-[-50px] left-[-80px] w-[300px] h-[300px] bg-teal-100/50 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide shadow-xs">
                <span className="text-teal-600">✦</span>
                <span>Painless Dentistry & Facial Aesthetics</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                The Confident, Natural <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-600">
                  Smile You Deserve,
                </span> <br className="hidden sm:inline" />
                In Just One Visit.
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Gentle clinical care with imported laser whitening, 3D digital bite simulations, and medical aesthetics. Designed for busy individuals who want pristine care without the pain, anxiety, or surprise fees.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book an appointment with your dental specialist.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-teal-700/25 hover:shadow-teal-700/35 transition-all duration-200"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>WhatsApp Appointment</span>
                </a>

                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm sm:text-base px-6 py-4 rounded-xl shadow-xs transition-colors"
                >
                  View Treatments & Fees ↓
                </a>
              </div>

              {/* Trust Cards with Micro-Borders and Warm Accents */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                <div className="p-3.5 bg-gradient-to-br from-white to-slate-50/80 rounded-2xl border border-slate-200/80 shadow-xs text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900">{config.patients}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Smiles Restored</div>
                </div>
                <div className="p-3.5 bg-gradient-to-br from-white to-amber-50/40 rounded-2xl border border-amber-200/60 shadow-xs text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-amber-600">{config.rating} ★</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{config.reviews} Reviews</div>
                </div>
                <div className="p-3.5 bg-gradient-to-br from-white to-teal-50/40 rounded-2xl border border-teal-200/60 shadow-xs text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-teal-700">100%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Sterilized & Safe</div>
                </div>
              </div>
            </div>

            {/* Right Card Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-2xl shadow-teal-900/10 group">
                <img 
                  src="/images/specialist-doctor.jpg" 
                  alt="Senior dental doctor in surgical operatory" 
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-slate-900 text-sm font-bold">Personalized Doctor Consultation</h4>
                      <p className="text-slate-600 text-xs mt-0.5">Directly evaluated by certified cosmetic surgeons & aesthetic physicians.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (Clean Warm Tinted Background with Life) */}
      <section id="why-us" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-2 block">Our Clinical Standard</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Modern Dentistry Designed For Comfort</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">We eliminate anxiety, pain, and uncertainty through modern dental innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100/70 text-teal-800 flex items-center justify-center text-xl font-bold">
                01
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">Tooth Enamel Preservation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe in micro-conservative dentistry. We never aggressively file down healthy teeth. Our ultra-thin 0.3mm ceramic shells keep your biological tooth structure intact for life.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100/70 text-teal-800 flex items-center justify-center text-xl font-bold">
                02
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">Zero-Sensitivity Whitening</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ordinary bleaching burns nerves. Our imported cold laser photo-activation gently lifts stubborn coffee, tea, and smoker stains with desensitizing minerals applied simultaneously.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200/80 hover:border-teal-300 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100/70 text-teal-800 flex items-center justify-center text-xl font-bold">
                03
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">Transparent, Locked Pricing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No mystery clinic add-ons, surprise x-ray charges, or vague verbal quotes. You receive a complete itemized estimate on WhatsApp before any treatment starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP PROTOCOL SECTION */}
      <section id="protocol" className="py-16 sm:py-20 border-b border-slate-100 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Zero Anxiety Patient Journey</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">How Your Smile Transformation Works</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">No goopy impression trays. No weeks of agonizing wait.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-sm transition-all">
              <div className="inline-block text-xs font-bold text-teal-700 bg-teal-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-4">Step 01</div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">3D Digital Optical Scan</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                An ultra-fast optical wand captures 6,000 frames per second to digitally model your bite in under 3 minutes. Zero gagging, zero paste.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-sm transition-all">
              <div className="inline-block text-xs font-bold text-teal-700 bg-teal-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-4">Step 02</div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Live Realistic Smile Preview</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                See your new smile on screen before anything begins. Review and approve exact tooth alignment, shape, and natural shade.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-sm transition-all">
              <div className="inline-block text-xs font-bold text-teal-700 bg-teal-100/70 px-3 py-1 rounded-full uppercase tracking-wider mb-4">Step 03</div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Painless Single-Visit Care</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Relax in ergonomic memory foam suites with calming audio. Walk out of the clinic the same day with an immediate visible transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS & PRICING MENU (Vibrant Card Presentation) */}
      <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/15 to-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Transparent Treatment Packages</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Curated Clinical Treatments</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">Upfront pricing with direct WhatsApp booking confirmation.</p>

            {/* Filter buttons */}
            <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
              {[
                { id: "all", label: "All Treatments" },
                { id: "dental", label: "Teeth Whitening" },
                { id: "cosmetic", label: "Veneers & Aligners" },
                { id: "aesthetic", label: "Facial Care" },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                    activeCategory === cat.id 
                      ? "bg-teal-700 text-white shadow-md shadow-teal-700/25" 
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredTreatments.map((item) => (
              <div 
                key={item.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                  item.popular 
                    ? "bg-slate-900 text-white border-2 border-teal-500 shadow-xl shadow-slate-900/15" 
                    : "bg-white text-slate-800 border border-slate-200/90 shadow-sm hover:shadow-md"
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3.5 right-6 bg-teal-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`uppercase tracking-wider font-bold ${item.popular ? "text-teal-400" : "text-teal-700"}`}>
                      {item.category}
                    </span>
                    <span className={item.popular ? "text-slate-400" : "text-slate-500 font-medium"}>
                      {item.time}
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl font-bold mb-2 ${item.popular ? "text-white" : "text-slate-900"}`}>
                    {item.name}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${item.popular ? "text-slate-300" : "text-slate-600"}`}>
                    {item.desc}
                  </p>

                  <div className={`py-4 border-y mb-6 ${item.popular ? "border-slate-800" : "border-slate-100"}`}>
                    <div className={`text-3xl font-extrabold ${item.popular ? "text-teal-300" : "text-slate-900"}`}>
                      {item.price}
                    </div>
                    {item.priceNote && (
                      <div className={`text-xs mt-1 ${item.popular ? "text-slate-400" : "text-slate-500"}`}>
                        {item.priceNote}
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm mb-8">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className={`font-bold mt-0.5 ${item.popular ? "text-teal-400" : "text-teal-700"}`}>✓</span>
                        <span className={item.popular ? "text-slate-300" : "text-slate-700"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book ${item.name} (${item.price}). Please share earliest available slots.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-bold transition-all ${
                    item.popular
                      ? "bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md shadow-teal-500/20"
                      : "bg-teal-700 hover:bg-teal-800 text-white shadow-md shadow-teal-700/20"
                  }`}
                >
                  Book on WhatsApp →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FACILITY & REAL OUTCOME GALLERY */}
      <section id="facility" className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Facility & Outcomes</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Our Clinic & Operatory Suites</h2>
            <p className="text-slate-600 text-sm mt-2">Private suites designed for sterility, tranquility, and surgical precision.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-200/80 bg-slate-900 shadow-xs">
              <img 
                src="/images/smile-hero.jpg" 
                alt="Teeth whitening smile result" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-5 flex flex-col justify-end">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Clinical Result</span>
                <h3 className="font-serif text-lg font-bold text-white">Laser Whitening</h3>
                <p className="text-slate-200 text-xs mt-1">Stain-free radiance achieved in 45 minutes.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-200/80 bg-slate-900 shadow-xs">
              <img 
                src="/images/modern-operatory.jpg" 
                alt="Modern dental operatory" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-5 flex flex-col justify-end">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Operatory Suite</span>
                <h3 className="font-serif text-lg font-bold text-white">Tranquil Suite</h3>
                <p className="text-slate-200 text-xs mt-1">Ergonomic memory foam & HEPA filtration.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-200/80 bg-slate-900 shadow-xs">
              <img 
                src="/images/clinical-procedure.jpg" 
                alt="Delicate dental procedure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-5 flex flex-col justify-end">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Precision Care</span>
                <h3 className="font-serif text-lg font-bold text-white">High Magnification</h3>
                <p className="text-slate-200 text-xs mt-1">3.5x optical loupe accuracy on all work.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-200/80 bg-slate-900 shadow-xs">
              <img 
                src="/images/specialist-doctor.jpg" 
                alt="Dental doctor ready for consultation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-5 flex flex-col justify-end">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Consultation</span>
                <h3 className="font-serif text-lg font-bold text-white">Senior Doctors</h3>
                <p className="text-slate-200 text-xs mt-1">Dedicated one-on-one specialist exam.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section id="faq" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest block mb-2">Got Questions?</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Is teeth whitening painful? Will my teeth feel sensitive?",
                a: "No. Traditional bleaching methods dehydrate the tooth causing electric shocks. Our advanced cold laser system uses protective mineral desensitizers applied simultaneously, making it pain-free for over 95% of patients."
              },
              {
                q: "How does booking on WhatsApp work? Who actually replies?",
                a: "When you tap any WhatsApp button, you connect directly with our clinic's desk coordinator in Islamabad. We quickly check our schedule and confirm your preferred slot without annoying bots or delays."
              },
              {
                q: "What is the difference between composite bonding and porcelain veneers?",
                a: "Composite bonding is hand-crafted chairside in a single appointment, perfect for chips and minor gaps. Porcelain veneers are laboratory-milled ceramic shells engineered for maximum long-term durability and stain resistance."
              },
              {
                q: "How strict are your sterilization standards?",
                a: "We adhere strictly to hospital-grade standards. Every instrument is sealed in sterile pouches and sanitized through a Class-B vacuum autoclave with chemical indicator test strips verified before every appointment."
              }
            ].map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-slate-200/90 bg-white shadow-xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-900 hover:text-teal-700 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base leading-snug">{faq.q}</span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-teal-700 font-bold shrink-0">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & LOCATION */}
      <footer className="bg-slate-900 text-slate-300 py-12 sm:py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              {config.clinic}
            </h3>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              Modern dental care and clinical facial aesthetics in {config.city}. Experience world-class treatment without fear or unexpected fees.
            </p>
            <div className="pt-2">
              <a
                href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to schedule an appointment.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <span>Book Instant Consultation</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 space-y-3 text-xs sm:text-sm">
            <div className="text-white font-bold text-base mb-1">Clinic Contact & Location</div>
            <p className="text-slate-300"><strong className="text-white">Address:</strong> {config.area}</p>
            <p className="text-slate-300">
              <strong className="text-white">Phone:</strong>{" "}
              <a href={`tel:${config.phone.replace(/\s+/g, "")}`} className="text-teal-400 hover:underline">{config.phone}</a>
            </p>
            <p className="text-slate-300"><strong className="text-white">Hours:</strong> {config.hours}</p>
            <p className="text-slate-400 text-xs pt-1">Dedicated Patient Parking Available On-Site</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <span>© {new Date().getFullYear()} {config.clinic}. All rights reserved.</span>
          <span>Class-B Hospital-Grade Sterilization Protocols</span>
        </div>
      </footer>

      {/* MOBILE FLOATING WHATSAPP BAR (Always accessible on phones) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg">
        <a
          href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book an appointment.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 bg-teal-700 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-md shadow-teal-700/20 active:scale-[0.98] transition-transform"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Book Appointment via WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
