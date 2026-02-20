// components/Prices.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";

const Prices = () => {
  // Structured data for Price page (Product/Service offerings)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NexaSoft Development & Hosting Services",
    "description": "Custom web development, mobile apps, POS systems, and hosting solutions in Sri Lanka. Free consultation, 6 months free service, lifetime bug fixes.",
    "brand": {
      "@type": "Brand",
      "name": "NexaSoft"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "5000",
      "highPrice": "300000",
      "priceCurrency": "LKR",
      "offerCount": "8"
    }
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Prices & Plans - NexaSoft | Web Development, Mobile Apps, Hosting</title>
        <meta
          name="description"
          content="Transparent pricing for web development, mobile apps, POS systems, and hosting in Sri Lanka. Free SEO, 6 months free service, lifetime bug fixes. Custom solutions from LKR 10,000."
        />
        <meta
          name="keywords"
          content="software development prices sri lanka, web development cost, mobile app development cost, pos system price, hosting plans sri lanka, mern stack development, wordpress websites, free consultation, lifetime bug fixes"
        />
        <link rel="canonical" href="https://nexasoft.site/prices" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexasoft.site/prices" />
        <meta property="og:title" content="NexaSoft Pricing - Transparent & Flexible Plans" />
        <meta
          property="og:description"
          content="Affordable web development, mobile apps, POS systems, and hosting in Sri Lanka. Free SEO, 6 months free service, lifetime bug fixes. Get a free consultation."
        />
        <meta property="og:image" content="https://nexasoft.site/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexasoft.site/prices" />
        <meta property="twitter:title" content="NexaSoft Pricing - Transparent & Flexible Plans" />
        <meta
          property="twitter:description"
          content="Affordable web development, mobile apps, POS systems, and hosting in Sri Lanka. Free SEO, 6 months free service, lifetime bug fixes. Get a free consultation."
        />
        <meta property="twitter:image" content="https://nexasoft.site/og-image.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
      <div className="absolute top-20 left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Transparent <span className="text-cyan-400">Pricing</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Flexible plans tailored to your needs. Free consultation, 6 months free service, and lifetime bug fixes on all development projects.
          </p>
        </div>

        {/* Free Services Highlight */}
        <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 backdrop-blur-sm border border-green-500/40 rounded-3xl p-8 mb-16 text-center">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-3xl">✅</span>
              <span className="font-semibold">Free SEO</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🛡️</span>
              <span className="font-semibold">6 Months Free Service</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl">🔧</span>
              <span className="font-semibold">Lifetime Bug Fixes</span>
            </div>
          </div>
          <p className="text-gray-300 mt-4 text-sm">* Applicable to all development projects (web, mobile, POS). Conditions apply.</p>
        </div>

        {/* Development Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Development <span className="text-cyan-400">Solutions</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WordPress Website */}
            <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 hover:border-green-600/50 transition-all duration-300 group">
              <div className="text-center mb-5">
                <div className="inline-block px-4 py-1 bg-green-700 text-white text-sm font-bold rounded-full">SMALL BUSINESS</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">WordPress Website</h3>
              <div className="text-center text-3xl font-bold text-green-400 mb-2">LKR 20,000 – 50,000</div>
              <p className="text-center text-sm text-gray-400 mb-4 font-bold">(Free .lk domain & hosting)</p>
              <p className="text-gray-400 text-sm mb-4">Ideal for small businesses, information pages, portfolios.</p>

              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✅</span>
                  <span>Custom WordPress Theme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✅</span>
                  <span>Up to 10 Pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✅</span>
                  <span>Contact Form & Maps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✅</span>
                  <span>SEO Optimized</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✅</span>
                  <span>Mobile Responsive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✅</span>
                  <span>Domain & Hosting Included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">✅</span>
                  <span>Free SSL Certificate</span>
                </li>
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 border border-green-600 hover:bg-green-600/10 rounded-full font-medium transition"
                >
                  Get WordPress Site
                </Link>
              </div>
            </div>

            {/* MERN Stack (Standard) */}
            <div className="bg-gray-900/70 rounded-2xl p-8 border border-cyan-500/70 bg-cyan-900/10 ring-1 ring-cyan-500/50 transform md:scale-105 transition-all duration-300 group">
              <div className="text-center mb-5">
                <div className="inline-block px-4 py-1 bg-cyan-600 text-white text-sm font-bold rounded-full">RECOMMENDED</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">MERN Stack Web App</h3>
              <div className="text-center text-3xl font-bold text-cyan-400 mb-2">LKR 10,000 – 300,000</div>
              <p className="text-center text-sm text-gray-400 mb-4 font-bold">(excluding domain & hosting fee)</p>
              <p className="text-gray-400 text-sm mb-4">High-performance, fully responsive (mobile & desktop). Suitable for long-term, high-traffic businesses.</p>

              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✅</span>
                  <span>Full Stack (React, Node.js, Express, MongoDB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✅</span>
                  <span>100% Mobile & Desktop Responsive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✅</span>
                  <span>Custom UI/UX Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✅</span>
                  <span>API Integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✅</span>
                  <span>Admin Dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✅</span>
                  <span>Scalable Architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✅</span>
                  <span>Free SEO + 6 Months Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">✅</span>
                  <span>Lifetime Bug Fixes</span>
                </li>
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 rounded-full font-medium transition"
                >
                  Start MERN Project
                </Link>
              </div>
            </div>

            {/* Mobile App */}
            <div className="bg-gray-900/70 rounded-2xl p-8 border border-indigo-600/50 hover:border-indigo-500 transition-all duration-300 group">
              <div className="text-center mb-5">
                <div className="inline-block px-4 py-1 bg-indigo-700 text-white text-sm font-bold rounded-full">MOBILE</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Mobile Application</h3>
              <div className="text-center text-3xl font-bold text-indigo-400 mb-2">LKR 10,000 – 300,000</div>
              <p className="text-center text-sm text-gray-400 mb-4 font-bold">(excluding domain & hosting fee)</p>
              <p className="text-gray-400 text-sm mb-4">iOS & Android apps built with React Native or Flutter. Tailored to your requirements.</p>

              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-0.5">✅</span>
                  <span>Cross-Platform (iOS & Android)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-0.5">✅</span>
                  <span>Custom UI/UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-0.5">✅</span>
                  <span>API Integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-0.5">✅</span>
                  <span>Push Notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-0.5">✅</span>
                  <span>App Store Submission Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-0.5">✅</span>
                  <span>Free SEO + 6 Months Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-0.5">✅</span>
                  <span>Lifetime Bug Fixes</span>
                </li>
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 border border-indigo-600 hover:bg-indigo-600/10 rounded-full font-medium transition"
                >
                  Build Mobile App
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* POS System Product */}
        <div className="bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm border border-purple-600/50 rounded-3xl p-10 mb-20 text-center relative overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative z-10">
            <div className="inline-block px-5 py-2 bg-purple-600/30 border border-purple-500 rounded-full text-sm font-bold text-purple-300 mb-6">
              POINT OF SALE SYSTEM
            </div>
            <h2 className="text-3xl font-bold mb-4">POS System for Retail, Wholesale & Restaurants</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6 leading-relaxed">
              A complete POS solution with inventory management, sales reporting, and multi-user support. Fully customizable to your business needs.
            </p>

            <div className="bg-black/40 rounded-2xl p-6 max-w-md mx-auto mb-6 text-left">
              <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">✅</span>
                  <span className="text-gray-300 text-sm">Inventory Management</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">✅</span>
                  <span className="text-gray-300 text-sm">Sales Analytics</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">✅</span>
                  <span className="text-gray-300 text-sm">Employee Management</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">✅</span>
                  <span className="text-gray-300 text-sm">Customer Database</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">✅</span>
                  <span className="text-gray-300 text-sm">Barcode Scanning</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">✅</span>
                  <span className="text-gray-300 text-sm">Receipt Printing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">✅</span>
                  <span className="text-gray-300 text-sm">Multi-Branch Support</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">✅</span>
                  <span className="text-gray-300 text-sm">Cloud Sync</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-400">✅</span>
                  <span className="text-gray-300 text-sm font-bold">(Customizeable to Customer Requirements)</span>
                </div>
              </div>
            </div>

            <div className="text-3xl font-bold text-purple-400 mb-2">LKR 20,000 – 100,000</div>
            <p className="text-sm text-gray-400 mb-6">(excluding domain & hosting)</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 rounded-full font-semibold transition"
              >
                Inquire About POS
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3 border border-purple-500 hover:bg-purple-500/10 rounded-full font-medium transition"
              >
                See Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Hosting Providers (We Recommend) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Hosting <span className="text-cyan-400">We Recommend</span></h2>
          <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
            These are providers we frequently use and trust for our projects. Prices are indicative; please check their official websites for current plans. We’ll assist with setup and migration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hostinger */}
            <a
              href="https://www.hostinger.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 block relative"
            >
              <h3 className="text-xl font-bold text-white mb-2">Hostinger</h3>
              <div className="text-2xl font-bold text-red-400 mb-4">From LKR 1,200 / month</div>
              <p className="text-gray-400 text-sm mb-6">Budget-friendly shared hosting, VPS, and cloud plans with 24/7 support.</p>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✅</span>
                  <span>Free SSL & Domain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✅</span>
                  <span>100 GB SSD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✅</span>
                  <span>Unlimited Bandwidth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">✅</span>
                  <span>1-Click WordPress Install</span>
                </li>
              </ul>
              <div className="text-center text-cyan-400 font-medium">Visit Hostinger →</div>
            </a>

            {/* GoDaddy */}
            <a
              href="https://www.godaddy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/60 rounded-2xl p-8 border border-yellow-600/50 bg-yellow-900/10 ring-1 ring-yellow-600/40 transform md:scale-105 transition-all duration-300 block relative"
            >
              <h3 className="text-xl font-bold text-white mb-2">GoDaddy</h3>
              <div className="text-2xl font-bold text-yellow-400 mb-4">From LKR 499 / month</div>
              <p className="text-gray-400 text-sm mb-6">Widely used for domains, shared hosting, and business email.</p>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✅</span>
                  <span>Domain Registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✅</span>
                  <span>Microsoft 365 Email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✅</span>
                  <span>24/7 Security Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✅</span>
                  <span>1-Click App Install</span>
                </li>
              </ul>
              <div className="text-center text-cyan-400 font-medium">Visit GoDaddy →</div>
            </a>

            {/* AWS - Recommended for Enterprise */}
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900/60 rounded-2xl p-8 border border-blue-600/50 bg-blue-900/10 ring-2 ring-blue-500/60 transition-all duration-300 block relative overflow-hidden"
            >
              {/* Enterprise badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                🏢 RECOMMENDED FOR ENTERPRISE
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Amazon Web Services</h3>
              <div className="text-2xl font-bold text-blue-400 mb-4">Pay-as-you-go</div>
              <p className="text-gray-400 text-sm mb-6">Scalable cloud computing, perfect for high-traffic, mission-critical applications. Global infrastructure with enterprise-grade security.</p>
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✅</span>
                  <span>EC2, S3, RDS, Lambda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✅</span>
                  <span>Global Infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✅</span>
                  <span>Free Tier Available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✅</span>
                  <span>Enterprise Support & SLA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✅</span>
                  <span>Auto Scaling & Load Balancing</span>
                </li>
              </ul>
              <div className="text-center text-cyan-400 font-medium">Visit AWS →</div>
            </a>
          </div>

          {/* Additional providers note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <FaInfoCircle className="inline-block text-cyan-400 mr-1" />
            Also check:{" "}
            <a href="https://www.namecheap.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Namecheap</a>,{" "}
            <a href="https://www.domains.lk/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">LK Domain</a>,{" "}
            <a href="https://www.siteground.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">SiteGround</a>
          </div>
          <p className="text-center text-xs text-gray-600 mt-4">
            * Prices/plans may differ. Please check official websites for latest offers.
          </p>
        </div>

        {/* Free Consultation CTA */}
        <div className="text-center bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Need a <span className="text-cyan-400">Free Consultation</span>?</h2>
          <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
            Whether you're tech-savvy or new to software, our team will explain everything A to Z. Call us or drop a message — we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
            >
              Contact Us Now
            </Link>
            <a
              href="tel:+94776606914" // Replace with actual phone number
              className="px-8 py-3 text-lg font-medium text-cyan-300 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;