// components/Projects.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* ─── tiny helpers ─── */
const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
  </svg>
);

const TagIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
  </svg>
);

const StatusDot = ({ live }) => (
  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border
    ${live
      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
      : "bg-amber-500/10 text-amber-300 border-amber-500/30"}`}>
    <span className={`w-1.5 h-1.5 rounded-full ${live ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`}/>
    {live ? "Live" : "In Development"}
  </span>
);

/* ─── infinite marquee ─── */
const ClientMarquee = ({ clients }) => {
  const doubled = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none"/>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none"/>

      <div className="flex gap-6 marquee-track">
        {doubled.map((client, i) => (
          <div key={i}
            className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl
              bg-gray-900/60 border border-gray-800/80 hover:border-cyan-500/40
              transition-all duration-300 group cursor-default select-none min-w-[200px]">
            {/* logo placeholder — replace src with real logo path */}
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm
              bg-gradient-to-br ${client.gradient} flex-shrink-0 shadow-lg`}>
              {client.initials}
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-tight group-hover:text-cyan-300 transition-colors">
                {client.name}
              </p>
              <p className="text-gray-500 text-xs">{client.industry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── project card ─── */
const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-800/80
        bg-gray-900/50 hover:border-cyan-500/40 transition-all duration-500
        hover:shadow-2xl hover:shadow-cyan-500/8"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* image */}
      <div className="relative h-52 overflow-hidden bg-gray-800/60">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent
          transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-60"}`}/>

        {/* top-right status */}
        <div className="absolute top-3 right-3">
          <StatusDot live={project.live} />
        </div>

        {/* bottom-left type badge */}
        <div className="absolute bottom-3 left-3">
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/50 border border-white/10 text-gray-300 backdrop-blur-sm">
            {project.type}
          </span>
        </div>

        {/* hover CTA */}
        {project.liveUrl && project.liveUrl !== "#" && (
          <div className={`absolute inset-0 flex items-center justify-center gap-3
            transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400
                text-black font-semibold rounded-full text-sm transition-all duration-200
                shadow-lg shadow-cyan-500/30 hover:scale-105"
            >
              Visit Live Site <ExternalIcon />
            </a>
          </div>
        )}
      </div>

      {/* body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="text-white font-bold text-base leading-snug mb-1 group-hover:text-cyan-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-cyan-400/80 text-xs font-medium flex items-center gap-1.5">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            {project.client}
          </p>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 5).map((tag, i) => (
            <span key={i}
              className="flex items-center gap-1 px-2 py-0.5 text-xs rounded-md
                bg-gray-800/80 text-gray-400 border border-gray-700/60">
              <TagIcon />{tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="px-2 py-0.5 text-xs rounded-md bg-gray-800/60 text-gray-500 border border-gray-700/40">
              +{project.tags.length - 5} more
            </span>
          )}
        </div>

        {/* footer */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-800/60">
          {project.liveUrl && project.liveUrl !== "#" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              View Live Site <ExternalIcon />
            </a>
          ) : (
            <span className="text-xs text-gray-600 italic">
              {project.live ? "Private / Confidential" : "Coming Soon"}
            </span>
          )}
          <span className="text-xs text-gray-600">{project.year}</span>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
const Projects = () => {

  /* clients for marquee */
  const clients = [
    {
      name: "Diamond Star Manpower",
      industry: "Foreign Employment",
      initials: "DS",
      gradient: "from-blue-600 to-indigo-700",
      logo: "/DS.png",
    },
    {
      name: "Robinas",
      industry: "Clothing Retail",
      initials: "RB",
      gradient: "from-rose-500 to-pink-600",
      logo: null,
    },
    {
      name: "Happy Time (Pvt) Ltd",
      industry: "Watch Retail & Wholesale",
      initials: "HT",
      gradient: "from-amber-500 to-orange-600",
      logo: "HT.png",   // replace with actual logo path if available
    },
    {
      name: "Samagi Motors",
      industry: "Vehicle Parts",
      initials: "SM",
      gradient: "from-slate-500 to-gray-600",
      logo: "SM.png",
    },
    {
      name: "Winsor Watches",
      industry: "Watch Brand · UAE",
      initials: "WW",
      gradient: "from-cyan-600 to-teal-700",
      logo: "WINSOR.png",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Foreign Employment Agency Web App",
      client: "Diamond Star Manpower Services (DSMS)",
      description:
        "A comprehensive web application managing the full foreign employment workflow — candidate tracking, document management, vacancy listings, and an AI-powered chatbot for applicant support.",
      image: "/DSMSK.png",
      type: "Web Application",
      tags: ["Employment Portal", "Vacancy Listings", "Application Forms", "Admin Panel", "AI Chatbot", "Document Management"],
      liveUrl: null,
      live: true,
      year: "2024",
      note: "Domain not renewed by client.",
    },
    {
      id: 2,
      title: "Cloud-Based POS System",
      client: "Robinas — Clothing Retailer",
      description:
        "A fully web-based Point of Sale system handling sales, inventory, customer records, and reporting for a clothing retailer. Accessible from any device.",
      image: "/SLPOS.png",
      type: "POS · Web App",
      tags: ["POS System", "Inventory Management", "Sales Tracking", "Customer Records", "Barcode Scanning", "Reports"],
      liveUrl: null,
      live: true,
      year: "2024",
    },
    {
      id: 3,
      title: "Watch Retail & Wholesale E-Commerce",
      client: "Happy Time (Pvt) Ltd — Sri Lanka & UAE",
      description:
        "A full e-commerce platform for a watch retailer and wholesaler operating across Sri Lanka and the UAE. Features a complete product catalogue, shopping cart, secure checkout, and customer dashboard.",
      image: "/HT-PROJ.png",
      type: "E-Commerce · Web App",
      tags: ["E-Commerce", "Product Catalogue", "Shopping Cart", "Secure Checkout", "Customer Dashboard", "Live Chat"],
      liveUrl: "https://happytimeonline.com/",
      live: true,
      year: "2024–2025",
    },
    {
      id: 4,
      title: "Vehicle Parts POS System",
      client: "Samagi Motors — Hiripitiya, Sri Lanka",
      description:
        "A modern cloud-based POS and inventory system for a vehicle parts retailer and wholesaler, with full stock management, multi-user access, and sales analytics.",
      image: "/samagimoto.png",
      type: "POS · In Development",
      tags: ["POS System", "Inventory", "Sales Analytics", "Multi-User", "Vehicle Parts"],
      liveUrl: null,
      live: true,
      year: "2025",
    },
    {
      id: 5,
      title: "Winsor Watches E-Commerce Platform",
      client: "Winsor Watches — UAE Registered Brand",
      description:
        "A premium e-commerce platform for a UAE-registered wrist watch brand, showcasing a curated catalogue with seamless global ordering and a luxury brand experience.",
      image: "/WINSOR-PROJ.png",
      type: "E-Commerce · In Development",
      tags: ["E-Commerce", "Luxury Brand", "Global Shipping", "Product Showcase", "UAE Market"],
      liveUrl: "https://winsorwatches.com/",
      live: false,
      year: "2025",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "NexaSoft Projects",
    "description": "Portfolio of custom software solutions delivered by NexaSoft for clients in Sri Lanka and globally.",
    "url": "https://nexasoft.site/projects",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "CreativeWork",
          "name": p.title,
          "description": p.description,
          "url": p.liveUrl || undefined,
        },
      })),
    },
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <Helmet>
        <title>Our Projects — NexaSoft | Software Development Portfolio</title>
        <meta name="description"
          content="Browse NexaSoft's portfolio of custom software, web, POS and mobile applications delivered for clients in Sri Lanka and worldwide." />
        <meta name="keywords"
          content="software projects sri lanka, web development portfolio, pos system, nexasoft portfolio, ecommerce development, mobile app" />
        <link rel="canonical" href="https://nexasoft.site/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexasoft.site/projects" />
        <meta property="og:title" content="NexaSoft Projects — Portfolio" />
        <meta property="og:description"
          content="Explore our portfolio of custom software, web, POS and mobile applications." />
        <meta property="og:image" content="https://nexasoft.site/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* ── background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black pointer-events-none"/>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"/>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"/>
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(6,182,212,1) 1px, transparent 0)", backgroundSize: "44px 44px" }}/>

      {/* ── marquee styles injected once ── */}
      <style>{`
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .marquee-track { animation: marquee 28s linear infinite; width: max-content; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ══ HERO ══ */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30
            rounded-full text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
            Real Projects · Real Clients · Real Results
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Delivered Work
            </span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From POS systems to e-commerce platforms — every project is built with care, precision, and a focus on your business goals.
          </p>

          {/* stats row */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-10">
            {[
              { value: "5+", label: "Projects Delivered" },
              { value: "3+", label: "Live & Active Sites" },
              { value: "100%", label: "Custom Built" },
              { value: "24/7", label: "Post-Launch Support" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{s.value}</div>
                <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ CLIENT MARQUEE ══ */}
        <div className="mb-16 lg:mb-20">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-600 mb-6">
            Trusted by businesses across Sri Lanka &amp; beyond
          </p>
          <ClientMarquee clients={clients} />
        </div>

        {/* ══ PROJECTS GRID ══ */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Project <span className="text-cyan-400">Showcase</span>
            </h2>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"/>Live
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-amber-400 rounded-full"/>In Development
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* ══ PROCESS STRIP ══ */}
        <div className="mb-20 rounded-3xl border border-gray-800/60 bg-gray-900/30 p-8 sm:p-10">
          <h3 className="text-center text-lg font-bold text-white mb-8">
            How We Build <span className="text-cyan-400">Every Project</span>
          </h3>
          <div className="flex flex-nowrap overflow-x-auto gap-0 justify-start lg:justify-center scrollbar-hide pb-2">
            {["Discovery", "Design", "Development", "Testing", "Launch", "Support"].map((step, i, arr) => (
              <div key={i} className="flex items-center flex-shrink-0">
                <div className="flex flex-col items-center text-center px-3 sm:px-5">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30
                    flex items-center justify-center text-cyan-400 font-bold text-sm mb-2">
                    {i + 1}
                  </div>
                  <span className="text-gray-300 text-xs sm:text-sm font-medium whitespace-nowrap">{step}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="w-6 sm:w-10 h-px bg-gradient-to-r from-cyan-500/40 to-gray-700/40 flex-shrink-0 mx-1"/>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ══ CTA ══ */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-700/30
          bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-8 sm:p-14 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"/>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ready to Build Something Like This?
            </h2>
            <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
              Every project starts with a free consultation. Let's talk about your idea and make it a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="px-8 py-3.5 text-base font-semibold text-black
                  bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400
                  rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-400/30">
                Start Your Project
              </Link>
              <Link to="/prices"
                className="px-8 py-3.5 text-base font-medium text-cyan-300
                  border border-cyan-500/60 rounded-full hover:bg-cyan-500/10 transition-all duration-300">
                View Our Plans
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;