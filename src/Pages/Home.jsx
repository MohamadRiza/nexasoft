// components/Home.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Laptop3D from "../Components/Laptop3D";
import EarthGlobe3D from "../Components/EarthGlobe3D";
import {
  FaGlobe,
  FaLaptop,
  FaMobileAlt,
  FaWrench,
  FaSync,
  FaBullseye,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaHandshake,
  FaVideo
} from "react-icons/fa";

const Home = () => {
  // Structured data for LocalBusiness (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NexaSoft",
    "url": "https://nexasoft.site",
    "logo": "https://nexasoft.site/logo1.png",
    "description": "Custom software development, web development, SEO, digital marketing, and IT support in Sri Lanka. Serving Colombo, Kandy, Galle and worldwide.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Colombo",
      "addressCountry": "LK"
    },
    "founder": {
      "@type": "Person",
      "name": "Rawufdeen Mohamad Riza"
    },
    "areaServed": [
      "Colombo", "Kandy", "Galle", "Jaffna", "Negombo",
      "Matara", "Kurunegala", "Anuradhapura", "Badulla", "Ratnapura",
      { "@type": "Country", "name": "Sri Lanka" },
      { "@type": "Country", "name": "Worldwide" }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/nexasoft-site",
      // "https://twitter.com/nexasoft"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="cyan-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="blue-indigo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="indigo-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="purple-pink-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="pink-rose-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
          <linearGradient id="rose-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>

      <Helmet>
        {/* Primary Meta Tags */}
        <title>NexaSoft - Custom Software Development in Sri Lanka</title>
        <meta
          name="description"
          content="NexaSoft offers custom web development, software solutions, SEO, digital marketing, and IT support in Sri Lanka. Serving Colombo, Kandy, Galle and worldwide. Founder Rawufdeen Mohamad Riza."
        />
        <meta
          name="keywords"
          content="software company sri lanka, custom software development colombo, web development kandy, digital marketing galle, IT support sri lanka, seo company sri lanka, nexasoft, rawufdeen mohamad riza, software developers sri lanka, mobile app development, desktop applications, remote IT services, software maintenance, software testing, software company, web development company, seo company"
        />
        <link rel="canonical" href="https://nexasoft.site" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexasoft.site" />
        <meta property="og:title" content="NexaSoft - Software Company Sri Lanka" />
        <meta
          property="og:description"
          content="Custom web, mobile, and desktop software development in Sri Lanka. SEO, digital marketing, and IT support for local and global clients."
        />
        <meta property="og:image" content="https://nexasoft.site/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexasoft.site" />
        <meta property="twitter:title" content="NexaSoft - Software Company Sri Lanka" />
        <meta
          property="twitter:description"
          content="Custom web, mobile, and desktop software development in Sri Lanka. SEO, digital marketing, and IT support for local and global clients."
        />
        <meta property="twitter:image" content="https://nexasoft.site/twitter-image.jpg" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Background Grid (unchanged) */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 41, 59, 0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.7) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Neon Glow Orbs (unchanged) */}
      <div className="absolute top-1/4 left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Hero Section (unchanged) */}
      <section
        id="home"
        className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(6,182,212,0.35)]">
                High-Performance
              </span>{" "}
              <br />
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">
                Solutions. Zero Compromise.
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We build web, desktop, and mobile applications with a focus on
              performance, flexibility, and customer satisfaction - from concept
              to deployment and beyond.
            </p>

            {/* Tech Stats Dashboard Overlay */}
            <div className="grid grid-cols-3 gap-4 py-4 max-w-md mx-auto lg:mx-0 border-t border-b border-cyan-500/10 bg-slate-900/20 backdrop-blur-xs rounded-xl px-4 mt-6">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-cyan-400">99.9%</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mt-0.5">Uptime</div>
              </div>
              <div className="text-center lg:text-left border-x border-cyan-500/10 px-2">
                <div className="text-2xl font-black text-cyan-400">50+</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mt-0.5">Deployed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-black text-cyan-400">24/7</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mt-0.5">Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-black rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_28px_rgba(6,182,212,0.6)] hover:scale-105 transform cursor-pointer"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-cyan-300 border border-cyan-500/40 rounded-full hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 transform cursor-pointer"
              >
                See How We Work
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center relative py-12">
            {/* Holographic Glowing Base */}
            <div className="absolute w-[320px] h-[30px] bg-cyan-500/10 rounded-full blur-2xl border border-cyan-500/20 bottom-0 left-1/2 -translate-x-1/2 scale-x-125 transform"></div>
            
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center animate-float-slow">
              {/* Real 3D CSS Laptop */}
              <Laptop3D />

              {/* Glowing Orb particles floating around */}
              <div className="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full blur-xs animate-ping"></div>
              <div className="absolute bottom-16 right-6 w-2 h-2 bg-indigo-400 rounded-full blur-xs animate-pulse delay-500"></div>
              <div className="absolute top-1/2 right-12 w-2.5 h-2.5 bg-blue-400 rounded-full blur-xs animate-ping delay-1000"></div>

              {/* Premium holographic tag overlay */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-cyan-400/20 uppercase tracking-wider select-none animate-pulse">
                Full-Cycle Dev
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (unchanged) */}
      <section
        id="services"
        className="relative py-20 px-6 lg:px-12 max-w-7xl mx-auto z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What We <span className="text-cyan-400">Deliver</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            From idea to maintenance, we cover every phase with precision and
            care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Web Applications",
              desc: "Fast, responsive, and scalable web apps using React, Node.js, and modern frameworks.",
              icon: FaGlobe,
              grad: "cyan-blue-grad",
              glow: "from-cyan-500/15 to-blue-500/15",
              border: "hover:border-cyan-500/50",
            },
            {
              title: "Desktop Applications",
              desc: "Cross-platform desktop software with Electron, .NET, or native tech - built for performance.",
              icon: FaLaptop,
              grad: "blue-indigo-grad",
              glow: "from-blue-500/15 to-indigo-500/15",
              border: "hover:border-blue-500/50",
            },
            {
              title: "Mobile Apps",
              desc: "iOS & Android apps with React Native or Flutter - smooth, secure, and user-friendly.",
              icon: FaMobileAlt,
              grad: "indigo-purple-grad",
              glow: "from-indigo-500/15 to-purple-500/15",
              border: "hover:border-indigo-500/50",
            },
            {
              title: "IT Support & Maintenance",
              desc: "Ongoing support, updates, and system monitoring to keep your solutions running flawlessly.",
              icon: FaWrench,
              grad: "purple-pink-grad",
              glow: "from-purple-500/15 to-pink-500/15",
              border: "hover:border-purple-500/50",
            },
            {
              title: "End-to-End Development",
              desc: "We handle Research, UI/UX Design, Development, Testing, Deployment, and Maintenance.",
              icon: FaSync,
              grad: "pink-rose-grad",
              glow: "from-pink-500/15 to-rose-500/15",
              border: "hover:border-rose-500/50",
            },
            {
              title: "Customer-Driven Process",
              desc: "Your feedback shapes every step. We’re flexible, transparent, and fully aligned with your goals.",
              icon: FaBullseye,
              grad: "rose-cyan-grad",
              glow: "from-rose-500/15 to-cyan-500/15",
              border: "hover:border-cyan-500/50",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-slate-950/45 backdrop-blur-md p-8 rounded-3xl border border-slate-800/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] group ${service.border}`}
            >
              {/* Background Glow Overlay */}
              <div className={`absolute -right-20 -top-20 w-44 h-44 bg-gradient-to-br ${service.glow} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700`}></div>
              
              {/* Icon Circle Panel */}
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 relative z-10">
                <service.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" style={{ fill: `url(#${service.grad})` }} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 relative z-10 group-hover:text-cyan-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Serving Sri Lanka & Worldwide - Enhanced UI */}
      <section className="relative py-20 px-6 lg:px-12 max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Serving Software <span className="text-cyan-400">Worldwide</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            We are proudly based in Sri Lanka and serve clients locally and internationally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: text and city tags */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              Based in <span className="text-cyan-400 font-semibold">Sri Lanka</span>, we are a global software partner delivering custom software engineering and digital solutions to clients locally and <span className="text-cyan-400 font-semibold">worldwide</span>.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Whether you prefer **face-to-face physical meetings** at our locations or **seamless virtual online meetings** (via Zoom, Teams, or Google Meet), we adapt to your requirements. We manage everything from project scoping to daily standups and remote handovers smoothly.
            </p>
            <div className="flex flex-wrap gap-3 pt-6">
              {[
                { label: "Sri Lanka", icon: FaMapMarkerAlt },
                { label: "International", icon: FaGlobeAmericas },
                { label: "Physical Meetings", icon: FaHandshake },
                { label: "Online Meetings", icon: FaVideo },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="bg-slate-900/80 text-cyan-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800/90 transition-all duration-300 flex items-center space-x-2 shadow-sm group"
                >
                  <tag.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" style={{ fill: "url(#cyan-blue-grad)" }} />
                  <span>{tag.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right side: 3D rotating earth globe */}
          <div className="flex justify-center items-center relative py-4">
            {/* Ambient blue background shadow behind the globe */}
            <div className="absolute w-[260px] h-[260px] bg-cyan-500/5 rounded-full blur-3xl"></div>
            
            {/* 3D Earth Globe Component */}
            <div className="relative z-10 flex flex-col items-center">
              <EarthGlobe3D />
              <div className="mt-4 bg-slate-900/80 text-cyan-400 px-5 py-2 rounded-full text-xs font-black border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.25)] uppercase tracking-widest select-none animate-pulse">
                Global Operations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="relative py-16 px-6 lg:px-12 max-w-7xl mx-auto z-10 border-t border-cyan-500/5">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            Trusted by <span className="text-cyan-400">Industry Leaders</span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-base">
            We partner with ambitious organizations to engineer high-performance software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center items-stretch">
          {[
            {
              name: "Happy Time Pvt Ltd",
              src: "/client-happytime.png",
              alt: "Happy Time Private Limited Logo",
              desc: "Sri Lanka and UAE watch wholesaler and retailer.",
            },
            {
              name: "Winsor Watches",
              src: "/client-winsor.png",
              alt: "Winsor Logo",
              desc: "UAE Dubai registered watch brand. Available internationally including Sri Lanka locations like Thilakma, Happy Time, Cool Planet, KCC, and Havelock City Mall.",
            },
            {
              name: "Samagi Motors",
              src: "/client-samagi.jpg",
              alt: "Samagi Motors Logo",
              desc: "Trusted vehicle parts and accessories reseller based in Hiripitiya, Kurunegala.",
            },
            {
              name: "Diamond Star Agencies",
              src: "/client-diamondstar.png",
              alt: "Diamond Star Logo",
              desc: "Trusted foreign employment and manpower recruitment agency based in Kurunegala.",
            },
          ].map((client) => (
            <div
              key={client.name}
              className="relative w-full max-w-[260px] min-h-[280px] bg-gradient-to-b from-slate-900/60 to-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-3xl flex flex-col justify-between p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_8px_25px_rgba(6,182,212,0.18)] hover:-translate-y-1 transform group overflow-hidden"
            >
              {/* Inner glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Top Section: Logo container */}
              <div className="h-24 w-full flex items-center justify-center relative z-10 p-2">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-w-full max-h-20 object-contain filter brightness-95 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300 rounded-xl"
                />
              </div>

              {/* Gradient Separator */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent my-1 relative z-10"></div>

              {/* Bottom Section: Text Content */}
              <div className="flex-1 flex flex-col justify-center items-center text-center mt-3 relative z-10">
                <h3 className="text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors tracking-wide">
                  {client.name}
                </h3>
                <p className="text-[11px] text-gray-400 mt-2 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {client.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="relative py-16 px-6 lg:px-12 max-w-7xl mx-auto z-10 border-t border-cyan-500/5">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
            Client <span className="text-cyan-400">Success Stories</span>
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto text-base">
            See how NexaSoft helps our partners achieve global scalability and digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center items-stretch">
          {[
            {
              author: "MR.Shilmy",
              role: "Director",
              company: "Happy Time Pvt Ltd",
              project: "E-Commerce Watch Selling",
              stars: 5,
              text: "NexaSoft built a highly secure E-commerce platform that transformed our watch retail and wholesale operations. It seamlessly synchronizes our stock across Sri Lanka and the UAE, providing our customers with a smooth checkout experience. Their technical expertise is top-tier!",
            },
            {
              author: "Mr.Riyas",
              role: "Director and founder",
              company: "Winsor Brand",
              project: "Brand Web & E-Commerce",
              stars: 5,
              text: "We are extremely impressed with the unified brand website NexaSoft built. They integrated both modern e-commerce capabilities and advanced AI tools that make store management and customer service incredibly easy. The interface is stunning and very user-friendly!",
            },
            {
              author: "Mr.Ruzaik",
              role: "Director",
              company: "Samagi Motors",
              project: "POS & Stock Management",
              stars: 5,
              text: "NexaSoft delivered a robust POS system that completely streamlined our auto parts sales and stock management. Tracking inventory has never been faster or more accurate. Their ongoing support and dedication to quality are exceptional!",
            },
            {
              author: "Mr.Haris",
              role: "Director",
              company: "Diamond Star",
              project: "Careers & Job Openings",
              stars: 5,
              text: "Their platform for managing our job openings, careers, and candidate workflows has transformed our foreign employment agency operations. Extremely responsive, structured, and talented team!",
            },
          ].map((review, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-[260px] min-h-[360px] bg-gradient-to-b from-slate-900/60 to-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-3xl flex flex-col justify-between p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_8px_25px_rgba(6,182,212,0.18)] hover:-translate-y-1 transform group overflow-hidden"
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Top Section: Stars and Project Tag */}
              <div className="relative z-10 flex flex-col items-start">
                {/* Stars Grid */}
                <div className="flex space-x-1 mb-2">
                  {Array(review.stars)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-sm drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]"
                      >
                        ★
                      </span>
                    ))}
                </div>

                {/* Project Tag */}
                <span className="bg-cyan-500/10 text-cyan-300 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-cyan-500/20 mb-3 select-none">
                  {review.project}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-xs text-gray-400 italic leading-relaxed flex-1 relative z-10 group-hover:text-gray-300 transition-colors text-left mb-4">
                "{review.text}"
              </p>

              {/* Separator Line */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent my-3 relative z-10"></div>

              {/* Reviewer Details with WhatsApp-style Silhouette Avatar */}
              <div className="relative z-10 flex items-center space-x-3 text-left">
                {/* Custom Gradient Profile Image (DP) */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border border-cyan-500/30 bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-950 p-0.5 shadow-[0_0_10px_rgba(6,182,212,0.25)] flex items-center justify-center overflow-hidden ring-2 ring-cyan-500/10 group-hover:ring-cyan-500/30 transition-all duration-300">
                    <svg className="w-8 h-8 text-cyan-400/70 group-hover:text-cyan-300 transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="7" r="4" fill="currentColor" />
                      <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                <div>
                  <div className="font-bold text-xs text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                    {review.author}
                  </div>
                  <div className="text-[9px] text-cyan-400/80 font-black uppercase tracking-wider mt-0.5 leading-none">
                    {review.role}
                  </div>
                  <div className="text-[9px] text-gray-500 font-semibold mt-1">
                    {review.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative py-20 px-6 lg:px-12 max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-cyan-400">Development Flow</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A structured, agile, and feedback-powered journey from concept to
            reality.
          </p>
        </div>

        <div className="relative py-8 bg-slate-950/40 border border-slate-905 rounded-3xl p-8 backdrop-blur-md overflow-hidden">
          <div className="flex lg:flex-row flex-nowrap lg:justify-center gap-6 lg:gap-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2 relative z-10">
            {[
              { name: "Research", desc: "Scope & requirements analysis" },
              { name: "Design", desc: "UI/UX mockup prototyping" },
              { name: "Develop", desc: "Clean, performant coding standard" },
              { name: "Testing", desc: "Rigorous QA automation auditing" },
              { name: "Deployment", desc: "Secure CI/CD rollout" },
              { name: "Maintenance", desc: "24/7 uptime & scaling SLAs" },
            ].map((phase, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0 w-40 space-y-4 group snap-center relative"
              >
                {/* Connector Line (Only for desktop) */}
                {index < 5 && (
                  <div className="hidden lg:block absolute top-7 left-28 w-24 h-0.5 bg-slate-800 group-hover:bg-cyan-500/50 transition-colors duration-500 z-0"></div>
                )}
                
                {/* Node Circle */}
                <div className="w-14 h-14 rounded-full bg-slate-900 border-2 border-cyan-500/30 flex items-center justify-center text-white font-black text-lg relative z-10 shadow-lg group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:scale-110 transition-all duration-300">
                  {index + 1}
                </div>

                <div className="flex flex-col items-center text-center space-y-1">
                  <span className="text-gray-300 font-bold group-hover:text-cyan-400 transition-colors">
                    {phase.name}
                  </span>
                  <span className="text-[10px] text-gray-500 max-w-[120px] leading-tight">
                    {phase.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder mention */}
        <div className="mt-16 text-center text-gray-400 border-t border-gray-800 pt-10">
          <p className="text-lg">
            Founded by <span className="text-cyan-400 font-semibold">Rawufdeen Mohamad Riza</span>, NexaSoft combines technical expertise with a customer-first mindset to deliver exceptional software solutions.
          </p>
        </div>
      </section>

      {/* CTA Section (unchanged) */}
      <section className="relative py-20 px-6 lg:px-12 text-center z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-700/40 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Build with a{" "}
            <span className="text-cyan-400">Customer-First</span> Team?
          </h2>
          <p className="mt-6 text-xl text-gray-300">
            We’re flexible, fast, and focused on your satisfaction. Let’s create
            something amazing - together.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;