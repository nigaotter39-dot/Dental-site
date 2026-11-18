"use client";

import React, { useEffect, useState } from "react";

export default function DentalSampleSite() {
  const [config, setConfig] = useState({
    clinic: "A A Dental & Aesthetic Clinic",
    city: "Islamabad",
    area: "Sector F-6 / G-9, Islamabad",
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
      desc: "Comprehensive oral prophylaxis, ultrasonic scaling, stubborn stain removal & cold laser desensitizing whitening.",
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
      desc: "Complete aesthetic redesign using 3D digital oral mapping, ultra-thin porcelain veneers, and clear aligner planning.",
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
    <div className="min-h-screen bg-[#0B1120] text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-white pb-20 sm:pb-0">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0F172A] border-b border-slate-800/80 text-xs py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-center sm:text-left">
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
              ★ {config.rating} <span className="text-slate-400">({config.reviews} patient reviews)</span>
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-300 hidden md:inline">Hospital-Grade Class-B Autoclave</span>
          </div>
        </div>
      </div>

      {/* HEADER / NAVIGATION */}
      <nav className="sticky top-0 z-40 bg-[#0B1120]/95 backdrop-blur-md border-b border-slate-800/90 px-4 sm:px-8 py-3.5 sm:py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-teal-900/30">
              ✦
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block leading-tight">
                {config.clinic.split(" ")[0]} <span className="text-teal-400">{config.clinic.split(" ").slice(1, 3).join(" ")}</span>
              </span>
              <span className="text-[11px] text-slate-400 tracking-wider uppercase block font-medium">
                Dental & Facial Aesthetics
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-teal-400 transition-colors">Treatments</a>
            <a href="#why-us" className="hover:text-teal-400 transition-colors">Why Choose Us</a>
            <a href="#protocol" className="hover:text-teal-400 transition-colors">Our Process</a>
            <a href="#facility" className="hover:text-teal-400 transition-colors">Our Clinic</a>
            <a href="#faq" className="hover:text-teal-400 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book a consultation.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200"
            >
              <span>Book Appointment</span>
              <span>→</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors"
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
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-800/80 flex flex-col gap-1 text-sm font-medium text-slate-200 pb-3">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-teal-400"
            >
              Treatments & Pricing
            </a>
            <a 
              href="#why-us" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-teal-400"
            >
              Why Choose Us
            </a>
            <a 
              href="#protocol" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-teal-400"
            >
              3-Step Painless Process
            </a>
            <a 
              href="#facility" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-teal-400"
            >
              Clinic & Operatory
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-teal-400"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-2 px-1">
              <a
                href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book an appointment.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-teal-500 text-slate-950 font-bold py-3 rounded-xl text-center"
              >
                Chat on WhatsApp Directly →
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,148,136,0.15),rgba(255,255,255,0))] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wide">
                <span>✦</span>
                <span>Painless Dentistry & Clinical Facial Aesthetics</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                Get the Confident, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-emerald-300">
                  Radiant Smile
                </span> You Deserve.
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience gentle dental care with imported laser technology, digital 3D scans, and specialized aesthetic care. Zero discomfort, crystal-clear pricing, and visible results in a single visit.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book an appointment with your dental specialist.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="#services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm sm:text-base px-6 py-4 rounded-xl transition-colors"
                >
                  View Treatments & Fees
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80">
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white">{config.patients}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Smiles Restored</div>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 text-left">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">{config.rating} ★</div>
                  <div className="text-xs text-slate-400 mt-0.5">{config.reviews} Reviews</div>
                </div>
                <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/60 text-left">
                  <div className="text-xl sm:text-2xl font-bold text-teal-400">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Sterilized & Safe</div>
                </div>
              </div>
            </div>

            {/* Right Card Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-slate-950/80 group">
                <img 
                  src="/images/specialist-doctor.jpg" 
                  alt="Senior dental doctor in surgical operatory" 
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-lg shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold">Personalized Doctor Consultation</h4>
                      <p className="text-slate-300 text-xs mt-0.5">Every patient is directly evaluated by senior dental surgeons.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THREE PILLARS SECTION */}
      <section id="why-us" className="py-16 sm:py-20 bg-[#0F172A] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-2">Why Discerning Patients Choose Us</h2>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">Modern Dentistry Designed For Comfort</h3>
            <p className="text-slate-400 text-sm sm:text-base mt-3">We eliminate anxiety, pain, and uncertainty through modern technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center text-xl font-bold">
                01
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">Tooth Enamel Preservation</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                We believe in micro-conservative dentistry. We never aggressively grind healthy teeth. Our ultra-thin 0.3mm ceramic shells keep your natural teeth safe.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center text-xl font-bold">
                02
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">Zero-Sensitivity Whitening</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ordinary whitening burns nerves. Our imported cold laser photo-activation removes years of coffee and tea stains pain-free with protective minerals applied.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center text-xl font-bold">
                03
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">Transparent, Fixed Fees</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                No hidden clinic fees, surprise x-ray charges, or vague estimations. You receive a complete transparent estimate on WhatsApp before any work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS SECTION */}
      <section id="protocol" className="py-16 sm:py-20 border-b border-slate-800 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">Zero Anxiety Journey</span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">How Your Smile Transformation Works</h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2">No goopy impression trays. No weeks of waiting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 relative">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3">Step 1</div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">3D Digital Optical Scan</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                An ultra-fast optical wand records 6,000 frames per second to digitally capture your bite in 3 minutes. Zero gag reflex.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 relative">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3">Step 2</div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Live Realistic Smile Preview</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                See your new smile on screen before anything starts. Review and approve tooth alignment, shape, and natural color shade.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900 border border-slate-800 relative">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3">Step 3</div>
              <h4 className="font-serif text-xl font-bold text-white mb-2">Painless Single-Visit Care</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Relax in ergonomic memory foam chairs with soothing music. Leave the clinic on the same day with an immediate visible transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS & PRICING MENU */}
      <section id="services" className="py-16 sm:py-24 bg-[#0F172A] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">Transparent Treatment Packages</span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">Popular Clinical Procedures</h3>
            <p className="text-slate-400 text-sm sm:text-base mt-2">Instant booking via WhatsApp with upfront confirmed pricing.</p>

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
                  className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                    activeCategory === cat.id 
                      ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20" 
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
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
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                  item.popular 
                    ? "bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-teal-500 shadow-xl shadow-teal-950/50" 
                    : "bg-slate-900/80 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {item.popular && (
                  <div className="absolute -top-3.5 right-6 bg-teal-500 text-slate-950 text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                    Most Requested
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="uppercase tracking-wider font-semibold text-teal-400">{item.category}</span>
                    <span>{item.time}</span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">{item.desc}</p>

                  <div className="py-4 border-y border-slate-800/80 mb-6">
                    <div className="text-3xl font-extrabold text-white">{item.price}</div>
                    {item.priceNote && <div className="text-xs text-slate-400 mt-1">{item.priceNote}</div>}
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-8">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-teal-400 font-bold mt-0.5">✓</span>
                        <span>{feat}</span>
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
                      ? "bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-lg shadow-teal-500/25"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
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
      <section id="facility" className="py-16 sm:py-20 bg-[#0B1120] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">Facility & Outcomes</span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">Our Modern Clinic & Suites</h3>
            <p className="text-slate-400 text-sm mt-2">Private operatories designed for sterility, tranquility, and safety.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-800 bg-slate-900">
              <img 
                src="/images/smile-hero.jpg" 
                alt="Teeth whitening smile result" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Clinical Result</span>
                <h5 className="font-serif text-lg font-bold text-white">Laser Whitening</h5>
                <p className="text-slate-300 text-xs mt-1">Stain-free radiance achieved in 45 minutes.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-800 bg-slate-900">
              <img 
                src="/images/modern-operatory.jpg" 
                alt="Modern dental operatory" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Operatory Suite</span>
                <h5 className="font-serif text-lg font-bold text-white">Tranquil Suite</h5>
                <p className="text-slate-300 text-xs mt-1">Ergonomic memory foam and HEPA filtration.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-800 bg-slate-900">
              <img 
                src="/images/clinical-procedure.jpg" 
                alt="Delicate dental procedure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Precision Care</span>
                <h5 className="font-serif text-lg font-bold text-white">High Magnification</h5>
                <p className="text-slate-300 text-xs mt-1">3.5x optical loupe accuracy on all work.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-800 bg-slate-900">
              <img 
                src="/images/specialist-doctor.jpg" 
                alt="Dental doctor ready for consultation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-teal-400 text-xs font-bold uppercase tracking-wider">Consultation</span>
                <h5 className="font-serif text-lg font-bold text-white">Senior Doctors</h5>
                <p className="text-slate-300 text-xs mt-1">Dedicated one-on-one specialist exam.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section id="faq" className="py-16 sm:py-20 bg-[#0F172A] border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest block mb-2">Got Questions?</span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</h3>
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
                className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-teal-400 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base leading-snug">{faq.q}</span>
                  <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 font-bold shrink-0">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & LOCATION */}
      <footer className="bg-[#0B1120] text-slate-300 py-12 sm:py-16 px-4 sm:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-6 space-y-4">
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
              {config.clinic}
            </h4>
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

          <div className="md:col-span-6 rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-3 text-xs sm:text-sm">
            <div className="text-white font-bold text-base mb-1">Clinic Contact & Location</div>
            <p className="text-slate-300"><strong className="text-slate-200">Address:</strong> {config.area}</p>
            <p className="text-slate-300">
              <strong className="text-slate-200">Phone:</strong>{" "}
              <a href={`tel:${config.phone.replace(/\s+/g, "")}`} className="text-teal-400 hover:underline">{config.phone}</a>
            </p>
            <p className="text-slate-300"><strong className="text-slate-200">Hours:</strong> {config.hours}</p>
            <p className="text-slate-500 text-xs pt-1">Dedicated Patient Parking Available On-Site</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <span>© {new Date().getFullYear()} {config.clinic}. All rights reserved.</span>
          <span>Class-B Hospital-Grade Sterilization Protocols</span>
        </div>
      </footer>

      {/* MOBILE FLOATING WHATSAPP BAR (Always accessible on phones) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3">
        <a
          href={buildWhatsAppLink(`Hi ${config.clinic}! I'd like to book an appointment.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 bg-teal-500 text-slate-950 font-bold text-sm py-3 px-4 rounded-xl shadow-lg shadow-teal-500/20 active:scale-[0.98] transition-transform"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Book Appointment via WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
