// components/Footer.jsx
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
    <footer className="relative bg-gray-950 text-gray-300 pt-16 pb-8 px-6 lg:px-12 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-1/4 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 z-10">

        {/* Company Info */}
        <div className="lg:col-span-1 space-y-5 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <img
              src="/logo1.png"
              alt="NexaSoft Logo"
              className="h-20 w-auto drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]"
            />
            <span className="text-xl font-bold text-cyan-400">NexaSoft</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Delivering high-performance web, desktop, and mobile solutions with a focus on customer satisfaction, flexibility, and innovation.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            {/* Social Icons */}
            <a
              href="https://www.linkedin.com/in/mohamad-riza-rawufdeen-9a6b76254"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              {/* LinkedIn SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohamad-riza-rawufdeen-9a6b76254"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
              aria-label="GitHub"
            >
              {/* GitHub SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="tel:+940776606914"
              className="text-gray-400 hover:text-cyan-400 transition"
              aria-label="Phone"
            >
              {/* Phone SVG */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.85.74a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.26 2.65.74 3.85a1 1 0 01-.21 1.11l-2.2 2.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path || "/"}
                  className="text-gray-400 hover:text-cyan-400 transition duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-transparent group-hover:bg-cyan-400 rounded-full mr-3 transition"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">Our Services</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index} className="text-gray-400 text-sm leading-relaxed">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-5">Get in Touch</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-cyan-400 mt-1">📧</span>
              <span className="text-sm text-gray-400">
                <strong>Email:</strong> <a href="mailto:rawufdeenriza@gmail.com" className="hover:text-blue-500">rawufdeenriza@gmail.com</a>
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-cyan-400 mt-1">📍</span>
              <span className="text-sm text-gray-400">
                <strong>Location:</strong> Narammala, Kurunegala (NWP), Sri Lanka (Remote Worldwide)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-cyan-400 mt-1">📞</span>
              <span className="text-sm text-gray-400">
                <strong>Phone:</strong> <a href="tel:+940776606914" className="hover:text-blue-500">+94 077 660 6914</a>
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        <p>
          &copy; {currentYear}{" "}
          <span className="text-cyan-400 font-medium">NexaSoft</span>. All rights reserved. 
          Crafted with precision for the future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
