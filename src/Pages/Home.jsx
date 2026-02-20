// components/Home.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                High-Performance
              </span>{" "}
              <br />
              <span className="text-white">Solutions. Zero Compromise.</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We build web, desktop, and mobile applications with a focus on
              performance, flexibility, and customer satisfaction - from concept
              to deployment and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="relative inline-flex items-center px-7 py-3 text-lg font-medium text-black rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center px-7 py-3 text-lg font-medium text-cyan-300 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition duration-300"
              >
                See How We Work
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/hero-illustration.svg"
                alt="NexaSoft - Full Stack Development"
                className="w-full h-auto drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]"
              />
              <div className="absolute -top-4 -right-4 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
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
              icon: "🌐",
            },
            {
              title: "Desktop Applications",
              desc: "Cross-platform desktop software with Electron, .NET, or native tech - built for performance.",
              icon: "💻",
            },
            {
              title: "Mobile Apps",
              desc: "iOS & Android apps with React Native or Flutter - smooth, secure, and user-friendly.",
              icon: "📱",
            },
            {
              title: "IT Support & Maintenance",
              desc: "Ongoing support, updates, and system monitoring to keep your solutions running flawlessly.",
              icon: "🛠️",
            },
            {
              title: "End-to-End Development",
              desc: "We handle Research, UI/UX Design, Development, Testing, Deployment, and Maintenance.",
              icon: "🔄",
            },
            {
              title: "Customer-Driven Process",
              desc: "Your feedback shapes every step. We’re flexible, transparent, and fully aligned with your goals.",
              icon: "🎯",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-900/60 p-7 rounded-2xl border border-gray-800 hover:border-cyan-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Serving Sri Lanka & Worldwide - Enhanced UI */}
      <section className="relative py-20 px-6 lg:px-12 max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Serving <span className="text-cyan-400">Sri Lanka & Beyond</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            We’re proudly based in Sri Lanka and ready to serve you - locally or remotely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: text and city tags */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              As a premier <span className="text-cyan-400 font-semibold">software company in Sri Lanka</span>, we provide on-site and remote services to clients in <strong>Colombo, Kandy, Galle, Jaffna</strong>, and across the island. Whether you're in the heart of the city or anywhere else, our team is just a message away.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              We also welcome international clients. Our remote-first approach means we can deliver high-quality software solutions to businesses worldwide. From the USA to Europe to Asia - <span className="text-cyan-400 font-semibold">NexaSoft is your global tech partner.</span>
            </p>
            <div className="flex flex-wrap gap-3 pt-6">
              {[
                "Colombo", "Kandy", "Galle", "Jaffna", "Negombo",
                "Matara", "Kurunegala", "Anuradhapura", "Badulla", "Ratnapura"
              ].map((city) => (
                <span
                  key={city}
                  className="bg-gray-800/70 text-cyan-300 px-4 py-2 rounded-full text-sm border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Right side: stylish map card (no emoji) */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-72 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-cyan-500/20 overflow-hidden shadow-2xl">
              {/* Grid overlay (world map abstraction) */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 10px 10px, cyan 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              ></div>

              {/* Animated glow */}
              <div className="absolute -inset-1 bg-cyan-500/20 rounded-2xl blur-xl opacity-50 animate-pulse"></div>

              {/* Sri Lanka highlight */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Map pin */}
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 animate-bounce-slow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  {/* Label */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900/90 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-500/40 shadow-lg backdrop-blur-sm">
                    🇱🇰 Sri Lanka
                  </div>
                </div>
              </div>

              {/* Small dots representing cities */}
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-300"></div>
              <div className="absolute bottom-12 right-8 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-ping delay-700"></div>

              {/* World map text hint */}
              <div className="absolute bottom-2 right-3 text-xs text-gray-500 italic">
                Global reach
              </div>
            </div>
          </div>
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

        {/* Mobile scrollable timeline (unchanged) */}
        <div className="flex lg:flex-row flex-nowrap lg:justify-center gap-6 lg:gap-10 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2">
          {[
            "Research",
            "Design",
            "Develop",
            "Testing",
            "Deployment",
            "Maintenance",
          ].map((phase, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 space-y-4 group snap-center"
            >
              <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <span className="text-gray-300 font-medium text-center">
                {phase}
              </span>
              {index < 5 && (
                <div className="hidden lg:block w-12 h-0.5 bg-gray-700 group-hover:bg-cyan-500 transition-colors"></div>
              )}
            </div>
          ))}
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