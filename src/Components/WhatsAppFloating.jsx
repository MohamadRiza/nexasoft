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
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.379 3.475 2.238 2.241 3.468 5.218 3.465 8.386-.006 6.536-5.332 11.86-11.861 11.86-2.003-.001-3.973-.509-5.728-1.477L0 24zm6.59-4.846c1.62.962 3.208 1.488 4.869 1.489 5.372 0 9.742-4.367 9.746-9.743.002-2.605-1.011-5.055-2.855-6.899-1.843-1.844-4.29-2.858-6.897-2.859-5.378 0-9.748 4.368-9.752 9.744-.001 1.77.465 3.5 1.348 5.031l-.995 3.633 3.729-.977zm12.39-7.399c-.3-.15-1.77-.875-2.04-.972-.27-.099-.465-.15-.66.15-.195.3-.755.972-.925 1.162-.17.19-.34.21-.64.06-1.597-.798-2.628-1.39-3.674-3.187-.27-.465.27-.43.77-.935.1-.1.21-.24.3-.36.09-.12.15-.21.22-.36.07-.15.03-.285-.015-.385-.045-.1-.465-1.124-.637-1.544-.17-.41-.357-.35-.49-.35h-.42c-.15 0-.39.06-.595.285-.205.223-.78.765-.78 1.86 0 1.095.8 2.15.91 2.3.11.15 1.57 2.4 3.805 3.365.53.23 1.05.37 1.41.485.535.17 1.02.146 1.405.09.43-.065 1.77-.725 2.02-1.42.25-.695.25-1.295.175-1.42-.075-.125-.27-.2-.57-.35z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppFloating;
