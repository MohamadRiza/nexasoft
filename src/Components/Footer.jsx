import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Prices", path: "/prices" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Applications",
    "Desktop Software",
    "Mobile App Development",
    "IT Support & Maintenance",
    "End-to-End Development",
  ];

  return (
    <footer className="relative bg-gray-950 text-gray-300 pt-20 pb-10 px-6 lg:px-12 overflow-hidden border-t border-slate-900/60">
      {/* Background Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 41, 59, 0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.35) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Background Glow Effects */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 z-10">

        {/* Company Info */}
        <div className="space-y-6 text-left">
          {/* Logo Brand lockup matching Navbar style */}
          <div className="flex items-center space-x-3.5 group cursor-default">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/logo1.png"
                alt="NexaSoft Logo"
                className="h-12 w-auto object-contain filter brightness-95 group-hover:brightness-100 transition-all duration-300 relative z-10"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.25)]">
                NexaSoft
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-gray-500 font-extrabold mt-0.5 leading-none">
                Software Solutions
              </span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
            Delivering high-performance web, desktop, and mobile solutions with a focus on customer satisfaction, flexibility, and innovation.
          </p>

          {/* Social Icons wrapped in glassmorphic hover buttons */}
          <div className="flex space-x-3.5 pt-2">
            {[
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/company/nexasoft-site/",
                path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              },
              {
                name: "Instagram",
                href: "https://www.instagram.com/nexasoft_com?igsh=MXh3cnRwdTRyaTE1dQ==",
                path: "M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1 1 0 110 2 1 1 0 010-2z"
              },
              {
                name: "TikTok",
                href: "https://www.tiktok.com/@nexasoft_2025?_t=ZS-8zUuC5khCjK&_r=1",
                path: "M12 2h2.4c.1 1 .5 2.1 1.2 3a6 6 0 003.6 2v2.5a8 8 0 01-4.8-1.6v7.6a5.9 5.9 0 01-6 6c-3.3 0-6-2.7-6-6s2.7-6 6-6c.4 0 .7 0 1 .1V12c-.3-.1-.6-.1-1-.1a3.5 3.5 0 103.5 3.5V2z"
              },
              {
                name: "Phone",
                href: "tel:+940776606914",
                path: "M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.85.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.65.74 3.85a1 1 0 01-.21 1.11l-2.2 2.2z"
              }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-1 transition-all duration-300"
                aria-label={social.name}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400/90">
            Quick Links
          </h3>
          <ul className="space-y-3.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-cyan-300 transition-all duration-300 flex items-center group hover:translate-x-1.5 transform"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/20 group-hover:bg-cyan-400 mr-3 transition-colors"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400/90">
            Our Services
          </h3>
          <ul className="space-y-3.5">
            {services.map((service, index) => (
              <li key={index} className="text-sm text-gray-400 flex items-center group cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/20 group-hover:bg-cyan-400 mr-3 transition-colors"></span>
                <span className="group-hover:text-cyan-300 transition-colors">{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400/90">
            Get in Touch
          </h3>
          <ul className="space-y-4">
            {/* Email */}
            <li className="flex items-start space-x-3.5 group">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.25)] transition-all duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black leading-none mb-1">
                  Email
                </span>
                <a
                  href="mailto:nexasoft.it@gmail.com"
                  className="text-xs font-semibold text-gray-300 hover:text-cyan-400 transition-colors leading-normal"
                >
                  nexasoft.it@gmail.com
                </a>
              </div>
            </li>

            {/* Location */}
            <li className="flex items-start space-x-3.5 group">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.25)] transition-all duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black leading-none mb-1">
                  Location
                </span>
                <span className="text-xs font-semibold text-gray-300 leading-normal">
                  Narammala, Kurunegala (NWP), Sri Lanka
                  <span className="block text-[10px] text-cyan-400/80 font-black tracking-wide mt-0.5 uppercase">
                    Remote Worldwide
                  </span>
                </span>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-start space-x-3.5 group">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.25)] transition-all duration-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black leading-none mb-1">
                  Phone
                </span>
                <a
                  href="tel:+940776606914"
                  className="text-xs font-semibold text-gray-300 hover:text-cyan-400 transition-colors leading-normal"
                >
                  +94 077 660 6914
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-16 pt-8 border-t border-slate-900 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 px-6 gap-4">
        <p className="text-center sm:text-left leading-relaxed">
          &copy; {currentYear}{" "}
          <span className="text-cyan-400 font-bold tracking-wide">NexaSoft</span>. All rights reserved. 
          Crafted with precision for the future.
        </p>
        <div className="flex space-x-6">
          <Link to="/about" className="hover:text-cyan-400 transition">About Team</Link>
          <Link to="/projects" className="hover:text-cyan-400 transition">Case Studies</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition">Get Estimate</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
