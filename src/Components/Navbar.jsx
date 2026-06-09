import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    { name: "Services", path: "/prices" },
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
        <div className="flex justify-between items-center h-20 relative z-10">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="/logo1.png"
                alt="NexaSoft Logo"
                className="h-10 sm:h-12 w-auto relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col items-start leading-none select-none">
              <span className="text-xl sm:text-2xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all duration-300 group-hover:drop-shadow-[0_0_18px_rgba(6,182,212,0.6)]">
                NexaSoft
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-cyan-500/80 font-semibold mt-0.5">
                Software Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative group text-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.4)]"
                      : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_#06b6d4] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-4 relative inline-flex items-center px-5 py-2 text-white font-medium rounded-full overflow-hidden group shadow-[0_0_15px_rgba(6,182,212,0.35)] hover:shadow-[0_0_22px_rgba(6,182,212,0.6)] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-700"></span>
              <span className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative">Get in Touch</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="relative w-10 h-10 flex items-center justify-center group focus:outline-none z-50 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                {/* Line 1 */}
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-gray-200 rounded-full transition-all duration-300 transform ${
                    isOpen
                      ? "top-[9px] rotate-45 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                      : "top-0 group-hover:bg-cyan-400"
                  }`}
                />
                {/* Line 2 */}
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-gray-200 rounded-full transition-all duration-300 transform top-[9px] ${
                    isOpen ? "opacity-0 scale-x-0" : "group-hover:bg-cyan-400"
                  }`}
                />
                {/* Line 3 */}
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-gray-200 rounded-full transition-all duration-300 transform ${
                    isOpen
                      ? "top-[9px] -rotate-45 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                      : "top-[18px] group-hover:bg-cyan-400"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-950/95 backdrop-blur-xl border-t border-cyan-500/10 ${
            isOpen ? "max-h-[450px] opacity-100 py-6" : "max-h-0 opacity-0 py-0 pointer-events-none"
          }`}
        >
          <div className="px-6 flex flex-col space-y-4 items-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium w-full text-center py-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400 bg-cyan-950/20 border border-cyan-500/20 shadow-[inset_0_0_12px_rgba(6,182,212,0.1)]"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-gray-900/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 w-full text-center py-3 rounded-full text-white font-medium bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-400 hover:to-cyan-600 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
