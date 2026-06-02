// components/Prices.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.15"/>
    <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ServerIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="2" y="3" width="20" height="6" rx="2" strokeWidth="1.5"/>
    <rect x="2" y="13" width="20" height="6" rx="2" strokeWidth="1.5"/>
    <path d="M6 6h.01M6 16h.01" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloudIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" strokeWidth="1.5"/>
  </svg>
);

const MonitorIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5"/>
    <path d="M8 21h8M12 17v4" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const MobileIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="1.5"/>
    <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeWidth="1.5"/>
  </svg>
);

const LayersIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CpuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5"/>
    <rect x="9" y="9" width="6" height="6" strokeWidth="1.5"/>
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const WrenchIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const InfoIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
    <path d="M12 16v-4M12 8h.01" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Prices = () => {
  const [activePOSTab, setActivePOSTab] = useState("cloud");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NexaSoft Development & Hosting Services",
    "description": "Custom web development, mobile apps, POS systems, and hosting solutions in Sri Lanka.",
    "brand": { "@type": "Brand", "name": "NexaSoft" }
  };

  const devPlans = [
    {
      id: "wordpress",
      icon: <GlobeIcon />,
      label: "WordPress Website",
      sublabel: "Small Business · Portfolio · Info Site",
      tier: "Starter",
      tierColor: "from-emerald-500 to-teal-500",
      borderColor: "border-emerald-500/30",
      glowColor: "shadow-emerald-500/10",
      accentColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      description: "Built on WordPress — ideal for small businesses, portfolios, and informational sites. Easy to manage, fast to launch.",
      features: [
        "Fully Custom Design",
        "Up to 10 Pages",
        "Contact Form & Google Maps",
        "SEO Optimized",
        "Mobile & Desktop Friendly",
        "Free Domain & Hosting Included",
        "Secure (Free SSL Certificate)",
        "6 Months Free Service",
        "Lifetime Bug Fixes",
      ],
      cta: "Get Started",
      ctaStyle: "border border-emerald-500 text-emerald-300 hover:bg-emerald-500/10",
    },
    {
      id: "mern",
      icon: <LayersIcon />,
      label: "MERN / Next.js Web App",
      sublabel: "Business · E-Commerce · Portal",
      tier: "Premium",
      tierColor: "from-cyan-400 to-blue-500",
      borderColor: "border-cyan-500/60",
      glowColor: "shadow-cyan-500/20",
      accentColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/40",
      highlight: true,
      description: "A powerful, fully custom web application built with MERN Stack or Next.js. Built for performance, growth, and long-term success.",
      features: [
        "Fully Custom Design & Layout",
        "Admin Dashboard & Management Panel",
        "User Login & Role Management",
        "Fast, Scalable & Secure",
        "Mobile & Desktop Responsive",
        "Online Payments & Integrations",
        "SEO Ready from Day One",
        "6 Months Free Support",
        "Lifetime Bug Fixes",
      ],
      cta: "Start Project",
      ctaStyle: "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white",
    },
    {
      id: "mobile",
      icon: <MobileIcon />,
      label: "Mobile App",
      sublabel: "iOS & Android",
      tier: "Pro",
      tierColor: "from-violet-500 to-purple-600",
      borderColor: "border-violet-500/30",
      glowColor: "shadow-violet-500/10",
      accentColor: "text-violet-400",
      badgeBg: "bg-violet-500/10 text-violet-300 border-violet-500/30",
      description: "A professional mobile app for both iPhone and Android — designed around your brand and your customers.",
      features: [
        "Works on iPhone & Android",
        "Fully Custom Design",
        "Push Notifications",
        "Works Offline (Where Needed)",
        "Secure User Login",
        "App Store & Play Store Launch",
        "Fast & Smooth Performance",
        "6 Months Free Support",
        "Lifetime Bug Fixes",
      ],
      cta: "Build My App",
      ctaStyle: "border border-violet-500 text-violet-300 hover:bg-violet-500/10",
    },
    {
      id: "desktop",
      icon: <MonitorIcon />,
      label: "Desktop Software",
      sublabel: "Windows · Offline · On-Premise",
      tier: "Enterprise",
      tierColor: "from-orange-500 to-amber-500",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/10",
      accentColor: "text-orange-400",
      badgeBg: "bg-orange-500/10 text-orange-300 border-orange-500/30",
      description: "A fully offline desktop application installed directly on your Windows computer — no internet required to run.",
      features: [
        "Runs Fully Offline",
        "Windows Optimized",
        "Custom Interface for Your Workflow",
        "Works with Printers & Scanners",
        "Secure Local Data Storage",
        "Auto-Update When Online",
        "Fast & Lightweight",
        "Lifetime Bug Fixes",
      ],
      cta: "Inquire Now",
      ctaStyle: "border border-orange-500 text-orange-300 hover:bg-orange-500/10",
    },
    {
      id: "mobile-web",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
          <path d="M12 9V5M12 19v-4M15 12h3M6 12h3" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      label: "Mobile + Web App",
      sublabel: "Complete Digital Bundle",
      tier: "Ultimate",
      tierColor: "from-pink-500 to-rose-500",
      borderColor: "border-pink-500/30",
      glowColor: "shadow-pink-500/10",
      accentColor: "text-pink-400",
      badgeBg: "bg-pink-500/10 text-pink-300 border-pink-500/30",
      description: "Your business on every screen — a full web platform and a mobile app that stay perfectly in sync with each other.",
      features: [
        "Web App + Mobile App Together",
        "Live Data Sync Across Both",
        "Admin Panel on Web",
        "Mobile App for iPhone & Android",
        "Push Notifications",
        "Unified User Accounts",
        "Custom Design for Each Platform",
        "6 Months Free Support",
        "Lifetime Bug Fixes",
      ],
      cta: "Get Bundle",
      ctaStyle: "border border-pink-500 text-pink-300 hover:bg-pink-500/10",
    },
    {
      id: "desktop-web",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5"/>
          <path d="M8 21h8M12 17v4M2 10h20" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      label: "Desktop + Web App",
      sublabel: "Offline + Online Hybrid",
      tier: "Business",
      tierColor: "from-sky-500 to-indigo-500",
      borderColor: "border-sky-500/30",
      glowColor: "shadow-sky-500/10",
      accentColor: "text-sky-400",
      badgeBg: "bg-sky-500/10 text-sky-300 border-sky-500/30",
      description: "The best of both worlds — a desktop app for day-to-day offline use, paired with a web portal for monitoring and management.",
      features: [
        "Desktop App for Offline Use",
        "Web Portal for Remote Access",
        "Data Syncs When Online",
        "Central Management Dashboard",
        "Multi-User & Multi-Branch",
        "Works with Printers & Hardware",
        "Automated Reports",
        "Lifetime Bug Fixes",
      ],
      cta: "Get Bundle",
      ctaStyle: "border border-sky-500 text-sky-300 hover:bg-sky-500/10",
    },
  ];

  const hostingProviders = [
    {
      name: "Hostinger",
      tagline: "Best for shared & VPS hosting",
      url: "https://www.hostinger.com/",
      color: "from-red-500 to-orange-500",
      border: "border-red-500/30 hover:border-red-400/60",
      badge: "Budget Friendly",
      badgeColor: "bg-red-500/10 text-red-300 border-red-500/30",
      features: ["Shared, VPS & Cloud Plans", "Free SSL & Domain", "99.9% Uptime SLA", "24/7 Customer Support", "1-Click App Installer"],
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#FF6B2B" fillOpacity="0.2"/>
          <path d="M8 24V8l5 5V8l5 5V8l6 6v10H8z" fill="#FF6B2B" opacity="0.8"/>
        </svg>
      ),
    },
    {
      name: "GoDaddy",
      tagline: "Best for domains & business email",
      url: "https://www.godaddy.com/",
      color: "from-yellow-400 to-amber-500",
      border: "border-yellow-500/40 hover:border-yellow-400/70",
      badge: "Most Popular",
      badgeColor: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
      features: ["Domain Registration", "Microsoft 365 Email", "Website Builder Included", "24/7 Security Monitoring", "1-Click WordPress Install"],
      highlight: true,
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#1BDBAD" fillOpacity="0.15"/>
          <circle cx="16" cy="16" r="9" stroke="#1BDBAD" strokeWidth="2"/>
          <path d="M16 11v10M11 16h10" stroke="#1BDBAD" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: "Amazon Web Services",
      tagline: "Best for enterprise & high-traffic apps",
      url: "https://aws.amazon.com/",
      color: "from-blue-400 to-indigo-500",
      border: "border-blue-500/40 hover:border-blue-400/70",
      badge: "Enterprise Grade",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      features: ["EC2, S3, RDS, Lambda & More", "Global Infrastructure (99+ Regions)", "Auto Scaling & Load Balancing", "Enterprise SLA & Support", "Free Tier Available"],
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="8" fill="#FF9900" fillOpacity="0.15"/>
          <path d="M7 20c0 0 4 3 9 3s9-3 9-3" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 14l7-6 7 6" stroke="#FF9900" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M16 8v12" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <Helmet>
        <title>Plans & Services - NexaSoft | Web Development, Mobile Apps, POS Systems</title>
        <meta name="description" content="Explore NexaSoft's development plans: WordPress, MERN Stack, Mobile Apps, Desktop Software, POS Systems. Free consultation, 6 months free service, lifetime bug fixes." />
        <meta name="keywords" content="software development plans sri lanka, web development, mobile app development, pos system, mern stack, wordpress, free consultation, lifetime bug fixes" />
        <link rel="canonical" href="https://nexasoft.site/prices" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexasoft.site/prices" />
        <meta property="og:title" content="NexaSoft Plans - Transparent & Flexible" />
        <meta property="og:description" content="Affordable web development, mobile apps, POS systems in Sri Lanka. Free SEO, 6 months free service, lifetime bug fixes." />
        <meta property="og:image" content="https://nexasoft.site/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(6,182,212,0.8) 1px, transparent 0)", backgroundSize: "48px 48px" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HERO ── */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
            Transparent Plans · No Hidden Fees
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Development Plan
            </span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every project starts with a free consultation. Prices are custom-quoted based on your requirements — contact us to get an accurate estimate.
          </p>
        </div>

        {/* ── FREE PERKS STRIP ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 lg:mb-20">
          {[
            { icon: <StarIcon />, label: "Free SEO Setup", desc: "On all development projects" },
            { icon: <ShieldIcon />, label: "6 Months Free Service", desc: "Post-launch support included" },
            { icon: <WrenchIcon />, label: "Lifetime Bug Fixes", desc: "We stand by our code" },
          ].map((perk, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800/80">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                {perk.icon}
              </div>
              <div>
                <div className="font-semibold text-white text-sm">{perk.label}</div>
                <div className="text-gray-500 text-xs mt-0.5">{perk.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── DEV PLANS ── */}
        <div className="mb-20 lg:mb-28">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Development <span className="text-cyan-400">Solutions</span></h2>
            <p className="mt-3 text-gray-400 max-w-xl mx-auto text-sm">All plans include our core quality guarantees. Contact us for a custom quote based on your scope.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {devPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-2xl bg-gray-900/60 border ${plan.borderColor} transition-all duration-300 hover:shadow-xl hover:${plan.glowColor} group overflow-hidden`}
              >
                {plan.highlight && (
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${plan.tierColor}`} />
                )}

                <div className="p-6 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.tierColor} p-0.5 flex-shrink-0`}>
                      <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center text-white">
                        {plan.icon}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${plan.badgeBg}`}>
                      {plan.tier}
                    </span>
                  </div>

                  <div className="mb-1">
                    <h3 className="text-lg font-bold text-white">{plan.label}</h3>
                    <p className={`text-sm font-medium ${plan.accentColor}`}>{plan.sublabel}</p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 mt-2">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className={`flex items-start gap-2.5 text-sm text-gray-300 ${plan.accentColor}`}>
                        <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                        <span className="text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex gap-3 mt-auto">
                    <Link
                      to="/contact"
                      className={`flex-1 py-2.5 rounded-xl text-sm font-semibold text-center transition-all duration-200 ${plan.ctaStyle}`}
                    >
                      {plan.cta}
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2.5 rounded-xl text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600 transition-all duration-200 text-center"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-8 flex items-center justify-center gap-1.5">
            <InfoIcon />
            All projects are custom-quoted. Contact us for an accurate estimate based on your specific requirements.
          </p>
        </div>

        {/* ── POS SYSTEM ── */}
        <div className="mb-20 lg:mb-28">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4">
              <CpuIcon />
              <span>Point of Sale System</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">POS for Retail, Wholesale <span className="text-purple-400">&amp; Restaurants</span></h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              A complete POS solution with inventory management, sales reporting, and multi-user support. Available as a <strong className="text-white">Cloud-Based Web App</strong> or a <strong className="text-white">Desktop/Offline Application</strong> — your choice.
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-900 border border-gray-800 rounded-xl p-1 gap-1">
              <button
                onClick={() => setActivePOSTab("cloud")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activePOSTab === "cloud"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <CloudIcon />
                Cloud-Based
              </button>
              <button
                onClick={() => setActivePOSTab("desktop")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activePOSTab === "desktop"
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <MonitorIcon />
                Desktop / Offline
              </button>
            </div>
          </div>

          <div className="rounded-3xl border overflow-hidden transition-all duration-300"
            style={{ borderColor: activePOSTab === "cloud" ? "rgba(168,85,247,0.3)" : "rgba(249,115,22,0.3)" }}>

            {/* Cloud Tab */}
            {activePOSTab === "cloud" && (
              <div className="bg-gradient-to-br from-gray-900/80 to-purple-950/20 p-6 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                        <CloudIcon />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Cloud-Based POS</h3>
                        <p className="text-purple-400 text-xs">Access from any device, anywhere</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      A fully web-based POS system accessible via any modern browser. No installation required — manage your business from any device with an internet connection. Real-time sync across branches.
                    </p>
                    <h4 className="text-white font-semibold text-sm mb-3">Core Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Inventory Management","Sales Analytics & Reports","Employee Management","Customer Database","Barcode Scanning","Receipt Printing","Multi-Branch Support","Real-Time Cloud Sync","Customizable to Your Needs","Secure Online Access",
                      ].map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="text-purple-400 flex-shrink-0"><CheckIcon /></span>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-black/30 border border-purple-500/20 p-5">
                      <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="1.5"/></svg>
                        Requirements (Cloud Version)
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">›</span><span>Any modern browser (Chrome, Edge, Firefox)</span></li>
                        <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">›</span><span>Stable internet connection required</span></li>
                        <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">›</span><span>Works on Windows, macOS, Linux, Tablets</span></li>
                        <li className="flex items-start gap-2"><span className="text-purple-400 mt-0.5">›</span><span>No software installation needed</span></li>
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-black/30 border border-gray-700/50 p-5">
                      <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 17H17.01M11 17H11.01M5 17H5.01M3 11V5a2 2 0 012-2h14a2 2 0 012 2v6M3 11h18M3 11v6a2 2 0 002 2h14a2 2 0 002-2v-6" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        Recommended POS Hardware
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">›</span><span><strong className="text-gray-300">Receipt Printer:</strong> Xprinter (recommended) — most standard printers supported</span></li>
                        <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">›</span><span><strong className="text-gray-300">Barcode Scanner:</strong> USB or Bluetooth scanner</span></li>
                        <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">›</span><span><strong className="text-gray-300">Barcode Printer:</strong> Label printer for product tagging</span></li>
                        <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">›</span><span><strong className="text-gray-300">UPS:</strong> Optional but strongly recommended</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Desktop Tab */}
            {activePOSTab === "desktop" && (
              <div className="bg-gradient-to-br from-gray-900/80 to-orange-950/10 p-6 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                        <MonitorIcon />
                      </div>
                      <div>
                        <h3 className="font-bold text-white">Desktop / Offline POS</h3>
                        <p className="text-orange-400 text-xs">Works without internet — full offline support</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      A locally installed application for Windows. Fully functional offline — perfect for areas with unreliable connectivity. Syncs data to the cloud when an internet connection is available.
                    </p>
                    <h4 className="text-white font-semibold text-sm mb-3">Core Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        "Full Offline Operation","Inventory Management","Sales Analytics & Reports","Employee Management","Customer Database","Barcode Scanning","Receipt Printing","Multi-Branch Support","Optional Cloud Sync","Customizable to Your Needs",
                      ].map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <span className="text-orange-400 flex-shrink-0"><CheckIcon /></span>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* PC Requirements */}
                    <div className="rounded-2xl bg-black/30 border border-orange-500/20 p-5">
                      <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                        <CpuIcon />
                        Minimum PC Requirements
                      </h4>
                      <div className="space-y-3 text-sm">
                        {[
                          { label: "OS", value: "Windows 64-bit (Windows 10 or later)" },
                          { label: "CPU", value: "Intel Core i3 (2nd Gen) or AMD Ryzen 3 (3rd Gen) or better" },
                          { label: "RAM", value: "4 GB minimum (8 GB recommended)" },
                          { label: "Storage (SSD)", value: "256 GB SSD recommended" },
                          { label: "Storage (HDD)", value: "Minimum 20 GB free space (50 GB recommended)" },
                          { label: "Internet", value: "Required during software updates only; fully offline otherwise" },
                        ].map((req, i) => (
                          <div key={i} className="flex gap-3">
                            <span className="text-orange-400 font-medium w-28 flex-shrink-0 text-xs pt-0.5">{req.label}</span>
                            <span className="text-gray-300">{req.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hardware */}
                    <div className="rounded-2xl bg-black/30 border border-gray-700/50 p-5">
                      <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 17H17.01M11 17H11.01M5 17H5.01M3 11V5a2 2 0 012-2h14a2 2 0 012 2v6M3 11h18M3 11v6a2 2 0 002 2h14a2 2 0 002-2v-6" strokeWidth="1.5" strokeLinecap="round"/></svg>
                        Recommended POS Hardware
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">›</span><span><strong className="text-gray-300">Receipt Printer:</strong> Xprinter (recommended) — most standard printers supported</span></li>
                        <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">›</span><span><strong className="text-gray-300">Barcode Scanner:</strong> USB or Bluetooth scanner</span></li>
                        <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">›</span><span><strong className="text-gray-300">Barcode Printer:</strong> Label printer for product tagging</span></li>
                        <li className="flex items-start gap-2"><span className="text-cyan-400 mt-0.5">›</span><span><strong className="text-gray-300">UPS:</strong> Optional but strongly recommended for power safety</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Footer note */}
            <div className="bg-gray-900/80 border-t border-gray-800/60 px-6 sm:px-10 py-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-gray-400 flex items-start gap-2">
                  <InfoIcon />
                  <span>We deliver whichever version suits your business best — <strong className="text-white">cloud-based or desktop</strong>. Just let us know your requirement and we'll arrange it for you.</span>
                </p>
                <Link to="/contact" className="flex-shrink-0 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white rounded-xl text-sm font-semibold transition-all duration-200 text-center">
                  Inquire About POS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── HOSTING ── */}
        <div className="mb-20 lg:mb-28">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Hosting We <span className="text-cyan-400">Recommend</span></h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Providers we trust and frequently use for our projects. We'll assist with setup, migration, and configuration. Check their official sites for current pricing and plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {hostingProviders.map((h, i) => (
              <a
                key={i}
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col rounded-2xl bg-gray-900/60 border ${h.border} transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/50 overflow-hidden p-6`}
              >
                {h.highlight && (
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${h.color}`} />
                )}

                <div className="flex items-start justify-between mb-5">
                  {h.logo}
                  <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${h.badgeColor}`}>{h.badge}</span>
                </div>

                <h3 className="text-white font-bold text-lg mb-1">{h.name}</h3>
                <p className="text-gray-500 text-xs mb-4">{h.tagline}</p>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {h.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r ${h.color} text-white opacity-90 group-hover:opacity-100 transition-all duration-200`}>
                  Visit Official Website
                  <ExternalLinkIcon />
                </div>

                <p className="text-center text-gray-600 text-xs mt-3">Check current pricing on their site</p>
              </a>
            ))}
          </div>

          {/* Also check */}
          <div className="rounded-2xl bg-gray-900/40 border border-gray-800/60 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm flex-shrink-0">
              <InfoIcon />
              <span className="font-medium text-gray-300">Also worth checking:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Namecheap", url: "https://www.namecheap.com/" },
                { name: "LK Domain", url: "https://www.domains.lk/" },
                { name: "SiteGround", url: "https://www.siteground.com/" },
                { name: "Cloudflare", url: "https://www.cloudflare.com/" },
                { name: "DigitalOcean", url: "https://www.digitalocean.com/" },
              ].map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/60 hover:bg-gray-800 border border-gray-700/60 hover:border-cyan-500/40 text-gray-400 hover:text-cyan-400 rounded-lg text-xs font-medium transition-all duration-200"
                >
                  {p.name}
                  <ExternalLinkIcon />
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-gray-700 text-xs mt-4">
            Prices and plans listed on third-party providers may change. Always verify on their official websites.
          </p>
        </div>

        {/* ── CTA ── */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-700/30 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 sm:p-14 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Not sure which plan fits?
            </h2>
            <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
              Book a free consultation — we'll walk you through everything A to Z and recommend the best solution for your budget and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3.5 text-base font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
              >
                Get a Free Consultation
              </Link>
              <a
                href="tel:+94776606914"
                className="px-8 py-3.5 text-base font-medium text-cyan-300 border border-cyan-500/60 rounded-full hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;