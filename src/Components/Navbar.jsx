// components/Navbar.jsx
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Routes for pages
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Prices", path: "/prices" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-md shadow-lg"
          : "bg-gray-950"
      }`}
    >
      {/* Neon Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex justify-between items-center h-16 relative z-10">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center space-x-3">
            <img
              src="/logo1.png"
              alt="NexaSoft Logo"
              className="h-26 w-auto drop-shadow-[0_0_20px_rgba(6,182,212,0.8)] sm:h-20 md:h-30"
            />
            <span className="text-2xl font-extrabold text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] tracking-wide">
              NexaSoft
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group text-lg text-gray-300 hover:text-cyan-400 transition"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-cyan-400 shadow-[0_0_6px_#06b6d4] w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 relative inline-flex items-center px-5 py-2 text-white font-medium rounded-full overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700"></span>
              <span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-cyan-400 focus:outline-none transition"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-md shadow-lg px-6 py-6 flex flex-col space-y-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg text-gray-300 hover:text-cyan-400 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 w-full text-center py-2 rounded-full text-white font-medium bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-400 hover:to-cyan-600 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
