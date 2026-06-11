import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloating = () => {
  // WhatsApp Link using the correct Sri Lankan country code format
  const whatsappUrl = "https://wa.me/94776606914?text=Hi%20NexaSoft,%20I'm%20interested%20in%20your%20software%20development%20services!";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Slide-out Tooltip */}
      <span className="mr-3 bg-slate-900/90 border border-slate-800 text-white text-[11px] font-bold tracking-wider px-3.5 py-2.5 rounded-2xl shadow-2xl opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none backdrop-blur-md select-none">
        Chat on WhatsApp
      </span>

      {/* Button Wrapper with pulse ring */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:scale-110 transform transition-all duration-300"
        aria-label="Contact NexaSoft on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none"></span>

        {/* WhatsApp Icon */}
        <FaWhatsapp className="w-8 h-8 text-white relative z-10" />
      </a>
    </div>
  );
};

export default WhatsAppFloating;
