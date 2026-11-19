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
    rating: "4.92",
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
      id: "scaling",
      category: "dental",
      name: "Ultrasonic Prophylaxis & Cold Laser Polish",
      duration: "45-Minute Coached Treatment",
      price: "PKR 8,500",
      description:
        "Subgingival plaque and tartar debridement with Piezoelectric ultrasonic instrumentation, tobacco/tea stain removal, and enamel desensitizing polish.",
      deliverables: [
        "Full oral cavity cancer & periodontal tissue screen",
        "Ultrasonic supragingival & subgingival debridement",
        "Surface stain micro-abrasion & fluoride re-mineralization",
      ],
    },
    {
      id: "veneers",
      category: "cosmetic",
      name: "Digital Smile Design & Ultra-Thin E-Max Veneers",
      duration: "3 Stage Diagnostic & Placement",
      price: "PKR 28,000 / tooth",
      description:
        "Computer-guided 3D aesthetic planning with minimal tooth preparation. Custom fabricated lithium disilicate (E-Max) or layered zirconia ceramic veneers.",
      deliverables: [
        "Intraoral 3D digital photogrammetry & live simulator",
        "Reversible chairside diagnostic wax-up mock-up",
        "0.3mm ultra-conservative enamel preparation",
      ],
    },
    {
      id: "aligners",
      category: "cosmetic",
      name: "Clear Invisible Orthodontic Aligners",
      duration: "6 to 14 Months Complete Course",
      price: "From PKR 160,000",
      description:
        "Medical-grade thermoplastic transparent aligners customized to correct crowding, rotations, and diastemas without traditional brackets or metal wires.",
      deliverables: [
        "Full arch digital movement simulation before fabrication",
        "Set of crack-resistant biocompatible aligner trays",
        "Monthly digital tracking and orthodontic check-ups",
      ],
    },
    {
      id: "hydrafacial",
      category: "aesthetic",
      name: "Clinical Vortex Facial & Hydro-Dermabrasion",
      duration: "60-Minute Operatory Session",
      price: "PKR 12,000",
      description:
        "Four-stage medical hydro-exfoliation: vacuum pore unclogging, painless salicylic extraction, active peptide hydration, and calming cold hammer infusion.",
      deliverables: [
        "Pore de-congestion & sebum extraction",
        "Hyaluronic acid & antioxidant dermal infusion",
        "Medical-grade LED blue/red light phototherapy",
      ],
    },
    {
      id: "whitening",
      category: "cosmetic",
      name: "In-Office Chairside Laser Teeth Whitening",
      duration: "60-Minute Clinical Session",
      price: "PKR 18,000",
      description:
        "35% stabilized hydrogen peroxide photo-activated with 460nm blue laser light. Lightens teeth 4 to 8 Vita shades in a single chairside visit with minimal sensitivity.",
      deliverables: [
        "Gingival resin barrier protection for sensitive gums",
        "Three consecutive 15-minute laser activation cycles",
        "Take-home post-procedure desensitizing serum",
      ],
    },
    {
      id: "microneedling",
      category: "aesthetic",
      name: "Medical Microneedling with PRP & Exosomes",
      duration: "75-Minute Session",
      price: "PKR 16,500",
      description:
        "Precision fractional micro-punctures inducing collagen synthesis, coupled with autologous platelet-rich plasma (PRP) or bio-active exosome serums for acne scars.",
      deliverables: [
        "Topical compound numbing for painless application",
        "Sterile single-use surgical needle cartridge",
        "Targeted depth modulation (0.5mm to 2.5mm)",
      ],
    },
  ];

  const filteredTreatments =
    activeCategory === "all"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory);

  const clinicalProtocols = [
    {
      step: "01",
      title: "Diagnostic Digital Mapping",
      summary:
        "Every patient begins with high-definition intraoral digital scanning, periodontal probing, and panoramic digital radiographs. No guesswork, no blind treatment.",
      timing: "30 Minutes",
    },
    {
      step: "02",
      title: "Written Transparent Plan & Fixed Quotation",
      summary:
        "You receive an itemized treatment schedule with exact clinical turnaround times and guaranteed fixed pricing before any procedure begins.",
      timing: "Pre-Treatment",
    },
    {
      step: "03",
      title: "Class-B Autoclave Sterilization Standard",
      summary:
        "All surgical instruments undergo 134°C vacuum autoclave sterilization in individually sealed pouches opened directly in your presence.",
      timing: "100% Sterile",
    },
    {
      step: "04",
      title: "Post-Operative Review & Monitoring",
      summary:
        "Direct clinical WhatsApp follow-up 24 hours post-treatment with scheduled recall visits to monitor tissue healing and long-term restorations.",
      timing: "Post-Care",
    },
  ];

  const faqs = [
    {
      q: "Are the treatment prices fixed or will additional fees appear?",
      a: "Our pricing is 100% transparent and itemized in writing during your initial consultation. The price quoted covers the complete procedure, materials, local anesthesia, and initial post-op review. We do not charge hidden administrative fees.",
    },
    {
      q: "Do you offer painless anesthesia for anxious dental patients?",
      a: "Yes. We use topical numbing gels prior to needle insertion, computer-buffered micro-gauge needles, and slow-infusion anesthetic protocols to ensure dental injections are virtually imperceptible.",
    },
    {
      q: "What is the difference between regular teeth cleaning and laser whitening?",
      a: "Ultrasonic cleaning removes hardened tartar, bacterial calculus, and extrinsic tea or nicotine stains from the surface of teeth. Chairside laser whitening alters the intrinsic shade of your enamel, lifting years of yellowing by 4 to 8 shades.",
    },
    {
      q: "How do I book an appointment, and how quickly can I be seen?",
      a: "You can book directly via WhatsApp or phone. We maintain dedicated daily reservation slots for new consultations and emergency pain relief, allowing most patients to be seen within 24 to 48 hours.",
    },
    {
      q: "Where is the clinic located, and is parking available?",
      a: "We are situated in Sector F-6 and Sector G-9 Commercial, Islamabad. Dedicated off-street parking is available directly in front of our facility.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#141413] antialiased selection:bg-[#0F766E] selection:text-white">
      {/* 1. TOP CLINICAL METADATA BAR */}
      <div className="border-b border-[#E7E5E4] bg-[#F3F1EB] px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 font-mono text-[11px] text-[#57534E] uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span className="text-[#0F766E] font-semibold">● CLINICAL PRACTICE</span>
            <span>{config.area}</span>
            <span className="hidden md:inline">• CLASS-B STERILIZATION STANDARD</span>
          </div>
          <div className="flex items-center gap-3">
            <span>HOURS: {config.hours}</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#141413] font-medium">DIRECT LINE: {config.phone}</span>
          </div>
        </div>
      </div>

      {/* 2. FIXED PERSISTENT NAVIGATION */}
      <nav className="sticky top-0 z-40 border-b border-[#E7E5E4] bg-[#FAF9F6]/95 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center text-white font-mono font-bold text-sm">
              ✦
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-tight text-[#141413] block leading-none">
                {config.clinic}
              </span>
              <span className="font-mono text-[10px] text-[#57534E] tracking-widest uppercase block mt-0.5">
                Dental & Facial Aesthetics
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-[#57534E]">
            <a href="#overview" className="hover:text-[#141413] transition-colors duration-150">
              01 // Overview
            </a>
            <a href="#treatments" className="hover:text-[#141413] transition-colors duration-150">
              02 // Treatments
            </a>
            <a href="#protocol" className="hover:text-[#141413] transition-colors duration-150">
              03 // Clinical Protocol
            </a>
            <a href="#facility" className="hover:text-[#141413] transition-colors duration-150">
              04 // The Clinic
            </a>
            <a href="#faq" className="hover:text-[#141413] transition-colors duration-150">
              05 // Inquiries
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppLink(
                "Hello Doctor. I would like to reserve a diagnostic consultation slot at A A Dental Clinic."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F766E] hover:bg-[#115E59] text-white font-medium text-xs px-4 py-2.5 rounded-lg transition-colors duration-150"
            >
              <span>Book Consultation</span>
              <span className="font-mono">→</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#E7E5E4] bg-white text-[#57534E] hover:text-[#141413]"
              aria-label="Toggle Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#E7E5E4] flex flex-col gap-2 font-mono text-xs uppercase tracking-wider text-[#57534E]">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F3F1EB] hover:text-[#141413]"
            >
              01 // Overview
            </a>
            <a
              href="#treatments"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F3F1EB] hover:text-[#141413]"
            >
              02 // Treatments
            </a>
            <a
              href="#protocol"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F3F1EB] hover:text-[#141413]"
            >
              03 // Clinical Protocol
            </a>
            <a
              href="#facility"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F3F1EB] hover:text-[#141413]"
            >
              04 // The Clinic
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F3F1EB] hover:text-[#141413]"
            >
              05 // Inquiries
            </a>
          </div>
        )}
      </nav>

      {/* 3. SECTION 1: ASYMMETRIC HERO SPLIT (60% / 40%) */}
      <section id="overview" className="border-b border-[#E7E5E4] py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 60% Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#E7E5E4] bg-[#F3F1EB] font-mono text-[11px] text-[#57534E] uppercase tracking-wider">
                <span className="text-[#0F766E]">●</span>
                <span>Evidence-Based Dentistry & Facial Rejuvenation</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] leading-[1.08]">
                Conservative Dental Restoration and Clinical Aesthetics.
              </h1>

              <p className="text-[#57534E] text-base sm:text-lg leading-[1.65] max-w-[62ch]">
                We combine digital intraoral planning with conservative clinical execution. Whether restoring a single fractured tooth, placing custom porcelain veneers, or treating skin laxity with medical hydro-dermabrasion, every procedure follows strict sterile protocols and transparent upfront pricing.
              </p>

              {/* Action Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={buildWhatsAppLink(
                    "Hello Doctor. I would like to book a comprehensive oral and aesthetic evaluation."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0F766E] hover:bg-[#115E59] text-white font-medium text-sm px-6 py-3.5 rounded-lg transition-colors duration-150"
                >
                  <span>Book Consultation on WhatsApp</span>
                  <span className="font-mono">→</span>
                </a>

                <a
                  href="#treatments"
                  className="inline-flex items-center justify-center gap-2 border border-[#E7E5E4] hover:border-[#D6D3D1] bg-white hover:bg-[#F3F1EB] text-[#141413] font-mono text-xs uppercase tracking-wider px-5 py-3.5 rounded-lg transition-colors duration-150"
                >
                  <span>View Treatment Fees ↓</span>
                </a>
              </div>

              {/* Monospace Clinical Specs Strip */}
              <div className="pt-6 border-t border-[#E7E5E4] grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-3.5 border border-[#E7E5E4] rounded-lg bg-white">
                  <div className="text-[11px] text-[#57534E] uppercase tracking-wider">Sterilization</div>
                  <div className="text-[#141413] font-bold mt-1 text-sm">Class-B Vacuum Autoclave</div>
                </div>
                <div className="p-3.5 border border-[#E7E5E4] rounded-lg bg-white">
                  <div className="text-[11px] text-[#57534E] uppercase tracking-wider">Consultation Fee</div>
                  <div className="text-[#141413] font-bold mt-1 text-sm">PKR 1,500 (Detailed Scan)</div>
                </div>
                <div className="p-3.5 border border-[#E7E5E4] rounded-lg bg-white">
                  <div className="text-[11px] text-[#57534E] uppercase tracking-wider">Verified Rating</div>
                  <div className="text-[#0F766E] font-bold mt-1 text-sm">{config.rating} / 5.0 ({config.reviews})</div>
                </div>
              </div>
            </div>

            {/* Right 40% Column: Concrete Clinical Proof */}
            <div className="lg:col-span-5">
              <div className="border border-[#E7E5E4] rounded-lg overflow-hidden bg-white">
                <div className="relative">
                  <img
                    src="/images/smile-hero.jpg"
                    alt="Clinical smile examination at A A Dental Clinic"
                    className="w-full h-72 sm:h-80 object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#FAF9F6]/95 border border-[#E7E5E4] font-mono text-[10px] text-[#0F766E] uppercase tracking-wider">
                    Fig. 01 // Clinical Smile Examination
                  </div>
                </div>

                {/* Technical Diagnostic Data Sheet */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-2">
                    <span className="text-[#57534E] uppercase">Diagnostic Tooling</span>
                    <span className="text-[#141413] font-semibold">3D Intraoral Scanning</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-2">
                    <span className="text-[#57534E] uppercase">Ceramic Standard</span>
                    <span className="text-[#141413] font-semibold">Ivoclar E-Max & Zirconia</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-2">
                    <span className="text-[#57534E] uppercase">Anesthesia Mode</span>
                    <span className="text-[#141413] font-semibold">Painless Computer-Buffered</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#57534E] uppercase">Turnaround Guarantee</span>
                    <span className="text-[#0F766E] font-semibold">Written Schedule Provided</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: FULL-WIDTH HORIZONTAL METRIC STRIP (HAIRLINE BORDERS) */}
      <section className="border-b border-[#E7E5E4] bg-[#F3F1EB] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="border-l-2 border-[#0F766E] pl-4">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                {config.patients}
              </div>
              <div className="font-mono text-[11px] text-[#57534E] uppercase tracking-wider mt-1">
                Patients Successfully Treated
              </div>
            </div>

            <div className="border-l-2 border-[#D6D3D1] pl-4">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                100%
              </div>
              <div className="font-mono text-[11px] text-[#57534E] uppercase tracking-wider mt-1">
                Sterilization Batch Audited
              </div>
            </div>

            <div className="border-l-2 border-[#D6D3D1] pl-4">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                12 YEARS
              </div>
              <div className="font-mono text-[11px] text-[#57534E] uppercase tracking-wider mt-1">
                Combined Clinical Experience
              </div>
            </div>

            <div className="border-l-2 border-[#0F766E] pl-4">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                4.92 / 5.0
              </div>
              <div className="font-mono text-[11px] text-[#57534E] uppercase tracking-wider mt-1">
                Google Verified Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: 2-COLUMN EDITORIAL + CATEGORY FILTERED TREATMENTS */}
      <section id="treatments" className="border-b border-[#E7E5E4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Row with Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-wider text-[#0F766E]">
                02 // Procedures & Transparent Fees
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                Clinical Treatments & Transparent Pricing
              </h2>
              <p className="text-[#57534E] text-sm max-w-[65ch]">
                Every procedure is priced with complete transparency. What you see is the exact fee quoted—inclusive of sterilized disposables, consultation diagnostics, and local anesthesia.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 font-mono text-xs uppercase tracking-wider">
              {[
                { id: "all", label: "All Procedures" },
                { id: "dental", label: "Restorative" },
                { id: "cosmetic", label: "Cosmetic & Veneers" },
                { id: "aesthetic", label: "Facial Aesthetics" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-2 rounded-lg border transition-colors duration-150 ${
                    activeCategory === tab.id
                      ? "bg-[#0F766E] text-white border-[#0F766E]"
                      : "bg-white text-[#57534E] border-[#E7E5E4] hover:border-[#D6D3D1] hover:text-[#141413]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Numbered Index List (Separated by 1px Hairline Rules) */}
          <div className="divide-y divide-[#E7E5E4] border-t border-b border-[#E7E5E4]">
            {filteredTreatments.map((treatment, idx) => (
              <div key={treatment.id} className="py-8 sm:py-10 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-[#0F766E] font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#141413]">
                      {treatment.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <span className="font-mono text-xs text-[#57534E] border border-[#E7E5E4] bg-[#F3F1EB] px-2.5 py-1 rounded-md">
                      {treatment.duration}
                    </span>
                    <span className="font-mono text-sm font-bold text-[#0F766E] border border-[#0F766E]/20 bg-[#0F766E]/5 px-3 py-1 rounded-md">
                      {treatment.price}
                    </span>
                  </div>
                </div>

                <p className="text-[#57534E] text-sm leading-[1.65] max-w-[65ch]">
                  {treatment.description}
                </p>

                {/* Treatment Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  {treatment.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-[#141413]">
                      <span className="text-[#0F766E] font-mono mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3">
                  <a
                    href={buildWhatsAppLink(
                      `Hello Doctor. I would like to inquire about scheduling the ${treatment.name} (${treatment.price}).`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#D6D3D1] bg-white hover:bg-[#F3F1EB] text-[#141413] font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-colors duration-150"
                  >
                    <span>Inquire for this Treatment</span>
                    <span className="font-mono">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: STEP-BY-STEP CLINICAL PROTOCOL (NUMBERED TIMELINE) */}
      <section id="protocol" className="border-b border-[#E7E5E4] py-20 sm:py-28 bg-[#F3F1EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#0F766E]">
                03 // Standards of Care
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight mt-1">
                The Clinical Consultation Workflow
              </h2>
            </div>
            <p className="font-mono text-xs text-[#57534E] max-w-md">
              Every procedure is preceded by photographic documentation and written consent. We never start work without your complete understanding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {clinicalProtocols.map((step) => (
              <div
                key={step.step}
                className="p-6 border border-[#E7E5E4] rounded-lg bg-white space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#0F766E]">
                      {step.step}
                    </span>
                    <span className="font-mono text-[10px] uppercase text-[#57534E] border border-[#E7E5E4] px-2 py-0.5 rounded">
                      {step.timing}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#141413]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#57534E] leading-[1.65]">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: UNEVEN BENTO GRID (THE CLINIC & OPERATORY AUDIT) */}
      <section id="facility" className="border-b border-[#E7E5E4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#0F766E]">
              04 // Operatory Infrastructure
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight mt-1">
              Surgical-Grade Cleanliness & Modern Instrumentation
            </h2>
            <p className="text-[#57534E] text-sm max-w-[65ch] mt-2">
              Our treatment rooms are designed to eliminate procedural stress while upholding European sterilization standards.
            </p>
          </div>

          {/* Uneven Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Box 1: 2:1 Large Operatory Block */}
            <div className="md:col-span-8 border border-[#E7E5E4] rounded-lg overflow-hidden bg-white flex flex-col justify-between">
              <div className="relative h-64 sm:h-80">
                <img
                  src="/images/modern-operatory.jpg"
                  alt="Modern ergonomic dental operatory chair at A A Dental Clinic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#FAF9F6]/95 border border-[#E7E5E4] font-mono text-[10px] text-[#0F766E] uppercase">
                  SUITE 01 // Digital Restorative Operatory
                </div>
              </div>
              <div className="p-5 font-mono text-xs space-y-1">
                <div className="text-[#141413] font-bold text-sm">German Ergonomic Dental Delivery Unit</div>
                <p className="text-[#57534E] font-sans text-xs">
                  Equipped with fiber-optic micro-motors, integrated intraoral camera feeds on chairside displays, and water decontamination filters.
                </p>
              </div>
            </div>

            {/* Box 2: 1:1 Side Block: Specialist Consultation */}
            <div className="md:col-span-4 border border-[#E7E5E4] rounded-lg overflow-hidden bg-white flex flex-col justify-between">
              <div className="relative h-48 sm:h-64">
                <img
                  src="/images/specialist-doctor.jpg"
                  alt="Specialist doctor discussing digital smile scan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#FAF9F6]/95 border border-[#E7E5E4] font-mono text-[10px] text-[#0F766E] uppercase">
                  SUITE 02 // Consultation Room
                </div>
              </div>
              <div className="p-5 font-mono text-xs space-y-1">
                <div className="text-[#141413] font-bold text-sm">One-on-One Specialist Diagnostic</div>
                <p className="text-[#57534E] font-sans text-xs">
                  We review your 3D digital scans together on a high-definition monitor. Every option is explained without clinical jargon.
                </p>
              </div>
            </div>

            {/* Box 3: 1:1 Side Block: Clinical Procedure */}
            <div className="md:col-span-4 border border-[#E7E5E4] rounded-lg overflow-hidden bg-white flex flex-col justify-between">
              <div className="relative h-48 sm:h-64">
                <img
                  src="/images/clinical-procedure.jpg"
                  alt="Dentist performing delicate clinical procedure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#FAF9F6]/95 border border-[#E7E5E4] font-mono text-[10px] text-[#0F766E] uppercase">
                  SUITE 03 // Precision Aesthetics
                </div>
              </div>
              <div className="p-5 font-mono text-xs space-y-1">
                <div className="text-[#141413] font-bold text-sm">Magnified Field Clinical Execution</div>
                <p className="text-[#57534E] font-sans text-xs">
                  High-magnification dental loupes with coaxial shadowless illumination ensure microscopic accuracy for margins and seals.
                </p>
              </div>
            </div>

            {/* Box 4: 2:1 Concrete Cleanliness Specs */}
            <div className="md:col-span-8 border border-[#E7E5E4] rounded-lg p-6 bg-white flex flex-col justify-between space-y-4 font-mono text-xs">
              <div>
                <span className="text-[#0F766E] uppercase tracking-wider text-[11px] block">
                  CLINICAL STERILIZATION AUDIT
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#141413] mt-1">
                  Cross-Infection Prevention Protocol
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-[#E7E5E4] p-3 rounded-md bg-[#FAF9F6] space-y-1">
                  <div className="text-[#141413] font-bold">Class-B Vacuum Autoclaving</div>
                  <div className="text-[#57534E] text-[11px]">
                    Every reusable instrument is washed, ultrasonic-cleaned, vacuum sealed, and autoclaved at 134°C with physical cycle indicators.
                  </div>
                </div>

                <div className="border border-[#E7E5E4] p-3 rounded-md bg-[#FAF9F6] space-y-1">
                  <div className="text-[#141413] font-bold">Single-Use Consumables</div>
                  <div className="text-[#57534E] text-[11px]">
                    Suction tips, patient bibs, anesthetic cartridges, micro-applicators, and matrix bands are discarded after every patient.
                  </div>
                </div>

                <div className="border border-[#E7E5E4] p-3 rounded-md bg-[#FAF9F6] space-y-1">
                  <div className="text-[#141413] font-bold">Disinfection Barrier Film</div>
                  <div className="text-[#57534E] text-[11px]">
                    Touchscreens, light handles, and chair armrests are shielded with disposable barrier film replaced between appointments.
                  </div>
                </div>

                <div className="border border-[#E7E5E4] p-3 rounded-md bg-[#FAF9F6] space-y-1">
                  <div className="text-[#141413] font-bold">Purified Waterlines</div>
                  <div className="text-[#57534E] text-[11px]">
                    All dental handpieces operate exclusively on independent closed-circuit distilled waterline systems with ozone sanitation.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: FAQ ACCORDION (HAIRLINE DIVIDERS) */}
      <section id="faq" className="border-b border-[#E7E5E4] py-20 sm:py-28 bg-[#F3F1EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#0F766E]">
              05 // Direct Inquiries
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight mt-1">
              Patient Questions & Clinical Answers
            </h2>
          </div>

          <div className="divide-y divide-[#E7E5E4] border-t border-b border-[#E7E5E4]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#141413]">
                    <span className="font-mono text-xs text-[#0F766E] mr-3">
                      Q.0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="font-mono text-base text-[#0F766E] shrink-0">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <p className="mt-3 text-[#57534E] text-sm leading-[1.65] max-w-[65ch] pl-8">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: DIRECT RESERVATION STRIP */}
      <section className="py-20 sm:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#E7E5E4] bg-white font-mono text-[11px] text-[#57534E] uppercase">
            <span>DIRECT CHAIRSIDE RESERVATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight">
            Schedule a Diagnostic Oral & Facial Evaluation.
          </h2>

          <p className="text-[#57534E] text-sm sm:text-base leading-[1.65] max-w-[55ch] mx-auto">
            Book an appointment with our clinical specialists. We inspect your dental health, provide high-resolution intraoral photos, and formulate a clear treatment roadmap.
          </p>

          <div className="pt-2">
            <a
              href={buildWhatsAppLink(
                "Hello Doctor. I would like to book an appointment for an initial consultation."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F766E] hover:bg-[#115E59] text-white font-medium text-sm sm:text-base px-8 py-4 rounded-lg transition-colors duration-150"
            >
              <span>Schedule on WhatsApp</span>
              <span className="font-mono">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. STRUCTURAL FOOTER */}
      <footer className="border-t border-[#E7E5E4] bg-[#F3F1EB] py-12 text-[#57534E] font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#0F766E] flex items-center justify-center text-white font-bold text-xs">
              ✦
            </div>
            <div>
              <span className="text-[#141413] font-bold">{config.clinic}</span>
              <span className="text-[10px] text-[#57534E] block">
                {config.area}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span>TEL: {config.phone}</span>
            <span>•</span>
            <span>{config.hours}</span>
          </div>

          <div className="text-[10px] text-[#78716C]">
            © {new Date().getFullYear()} {config.clinic}. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* 11. MOBILE PERSISTENT WHATSAPP ACTION BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#FAF9F6]/95 border-t border-[#E7E5E4] backdrop-blur-md">
        <a
          href={buildWhatsAppLink(
            "Hello Doctor. I would like to book a dental or aesthetic consultation."
          )}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#0F766E] hover:bg-[#115E59] text-white font-medium text-xs py-3 rounded-lg uppercase tracking-wider transition-colors duration-150"
        >
          <span>Book Consultation on WhatsApp</span>
          <span className="font-mono">→</span>
        </a>
      </div>
    </div>
  );
}
