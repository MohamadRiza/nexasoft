// components/Prices.jsx
import { Link } from "react-router-dom";

const Prices = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
      <div className="absolute top-20 left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-cyan-400">Services & Pricing</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent, flexible, and tailored to your needs. Whether you need a custom web app, mobile solution, or ready-to-deploy system — we’ve got you covered.
          </p>
        </div>

        {/* Development Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Custom <span className="text-cyan-400">Development</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Web Development */}
            <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 hover:border-cyan-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group">
              <div className="text-5xl mb-5">🌐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                High-performance websites and web applications using React, Node.js, and modern frameworks — built for speed, SEO, and scalability.
              </p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✅ Responsive & Mobile-First</li>
                <li>✅ REST/GraphQL APIs</li>
                <li>✅ CMS Integration</li>
                <li>✅ Admin Dashboards</li>
                <li>✅ Ongoing Support</li>
              </ul>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-500 hover:to-cyan-700 rounded-full font-medium transition"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Software Development */}
            <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 hover:border-cyan-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group">
              <div className="text-5xl mb-5">💻</div>
              <h3 className="text-2xl font-bold text-white mb-4">Software Development</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Custom desktop and cross-platform applications (Electron, Python, .NET) for internal tools, automation, and business systems.
              </p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✅ Cross-Platform (Windows, macOS, Linux)</li>
                <li>✅ Offline-First Support</li>
                <li>✅ Data Encryption & Security</li>
                <li>✅ API & Database Integration</li>
                <li>✅ Maintenance Included</li>
              </ul>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-500 hover:to-cyan-700 rounded-full font-medium transition"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 hover:border-cyan-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group">
              <div className="text-5xl mb-5">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Mobile App Development</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Native-like iOS & Android apps using React Native or Flutter — with push notifications, offline mode, and cloud sync.
              </p>
              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✅ iOS & Android Compatible</li>
                <li>✅ Firebase / AWS Backend</li>
                <li>✅ Push Notifications</li>
                <li>✅ App Store Deployment</li>
                <li>✅ UX/UI Design Included</li>
              </ul>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-500 hover:to-cyan-700 rounded-full font-medium transition"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Product: Employment Agency Web App */}
        <div className="bg-gradient-to-r from-indigo-900/40 to-cyan-900/40 backdrop-blur-sm border border-cyan-600/50 rounded-3xl p-10 mb-20 text-center relative overflow-hidden">
          {/* Floating Glow */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative z-10">
            <div className="inline-block px-5 py-2 bg-cyan-600/30 border border-cyan-500 rounded-full text-sm font-bold text-cyan-300 mb-6">
              PREMIUM SOLUTION
            </div>
            <h2 className="text-3xl font-bold mb-4">Employment Agency Web Application</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              A fully-featured, ready-to-deploy web app for staffing agencies — manage job listings, candidates, employers, applications, and interviews in one powerful system.
            </p>

            <div className="bg-black/40 rounded-2xl p-6 max-w-md mx-auto mb-8 text-left">
              <h3 className="text-xl font-bold text-white mb-4">Features</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Candidate & Employer Portals</li>
                <li>✅ Job Posting & Search</li>
                <li>✅ Application Tracking</li>
                <li>✅ Admin Dashboard</li>
                <li>✅ Email & SMS Notifications</li>
                <li>✅ Role-Based Access</li>
                <li>✅ Responsive Design</li>
              </ul>
            </div>

            <div className="text-3xl font-bold text-cyan-400 mb-6">From LKR 180,000</div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 rounded-full font-semibold transition"
              >
                Buy Now / Inquire
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3 border border-cyan-500 hover:bg-cyan-500/10 rounded-full font-medium transition"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Hosting & Maintenance */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Add-On: <span className="text-cyan-400">Hosting & Maintenance</span></h2>
          <div className="max-w-4xl mx-auto bg-gray-900/60 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Reliable Hosting + Monthly Maintenance</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Keep your application fast, secure, and up-to-date with our managed hosting and maintenance plan.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>🔧 Server Setup & Deployment (AWS, VPS, or Shared)</li>
              <li>🛡️ Security Updates & Backups</li>
              <li>📈 Performance Monitoring</li>
              <li>🐞 Bug Fixes & Minor Updates</li>
              <li>📧 24/7 Support (Email & Slack)</li>
            </ul>
            <div className="mt-6 text-center">
              <div className="text-2xl font-bold text-cyan-400">LKR 8,000 / month</div>
              <Link
                to="/contact"
                className="mt-4 inline-block px-6 py-2 text-cyan-300 border border-cyan-500 hover:bg-cyan-500/10 rounded-full text-sm transition"
              >
                Add to Your Project
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Need a <span className="text-cyan-400">Custom Quote</span>?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            All projects are tailored to your needs. Let’s discuss your idea and build a solution that fits your budget and timeline.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Prices;