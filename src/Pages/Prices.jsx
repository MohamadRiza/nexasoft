// components/Prices.jsx
import { FaInfo, FaInfoCircle } from "react-icons/fa";
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
            Transparent <span className="text-cyan-400">Pricing</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you need a simple website or a full-scale application, we offer flexible plans to fit your budget and goals.
          </p>
        </div>

        {/* Development Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Development <span className="text-cyan-400">Solutions</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 hover:border-cyan-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group">
              <div className="text-center mb-5">
                <div className="inline-block px-4 py-1 bg-gray-700 text-gray-200 text-sm font-bold rounded-full">BASIC</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Starter Web Apps</h3>
              <div className="text-center text-3xl font-bold text-gray-300 mb-6">LKR 5,000 – 10,000</div>

              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✅ Simple Frontend (React or WordPress)</li>
                <li>✅ Up to 5 Pages</li>
                <li>✅ Basic Contact Form</li>
                <li>✅ Responsive Design</li>
                <li>✅ SEO-Friendly Structure</li>
                <li className="text-gray-500">❌ No Source Code Included</li>
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 border border-cyan-500 hover:bg-cyan-500/10 rounded-full font-medium transition"
                >
                  Discuss Project
                </Link>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-gray-900/70 rounded-2xl p-8 border border-cyan-500/70 bg-cyan-900/10 ring-1 ring-cyan-500/50 transform md:scale-105 transition-all duration-300 group">
              <div className="text-center mb-5">
                <div className="inline-block px-4 py-1 bg-cyan-600 text-white text-sm font-bold rounded-full">STANDARD</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">Mid-Level Applications</h3>
              <div className="text-center text-3xl font-bold text-cyan-400 mb-6">LKR 20,000 – 30,000</div>

              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✅ Full Stack (React + Node.js)</li>
                <li>✅ 5–10 Pages + Dashboard</li>
                <li>✅ API Integrations</li>
                <li>✅ Admin Panel</li>
                <li>✅ Responsive & Modern UI</li>
                <li>✅ Deployment Support</li>
                <li className="text-gray-500">❌ Source Code (Optional +LKR 5,000)</li>
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 rounded-full font-medium transition"
                >
                  Start Project
                </Link>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 hover:border-cyan-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group">
              <div className="text-center mb-5">
                <div className="inline-block px-4 py-1 bg-indigo-600 text-white text-sm font-bold rounded-full">PREMIUM</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 text-center">High-Performance Apps</h3>
              <div className="text-center text-3xl font-bold text-indigo-400 mb-6">From LKR 50,000</div>

              <ul className="space-y-3 mb-8 text-gray-300">
                <li>✅ Full Stack + Advanced Features</li>
                <li>✅ AI/ML Integration (Optional)</li>
                <li>✅ Custom APIs & Database Design</li>
                <li>✅ Role-Based Access Control</li>
                <li>✅ Futuristic UI/UX Design</li>
                <li>✅ Real-Time Features (e.g., Chat)</li>
                <li>✅ Source Code Included</li>
                <li>✅ 3 Months Free Support</li>
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-800 hover:from-indigo-500 hover:to-indigo-700 rounded-full font-medium transition"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Hosting Plans */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Hosting <span className="text-cyan-400">Plans</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Low Traffic */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Starter Hosting</h3>
              <div className="text-2xl font-bold text-green-400 mb-4">LKR 5,000 / year</div>
              <p className="text-gray-400 text-sm mb-6">Ideal for portfolios, small business sites.</p>

              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li>✅ Free SSL Certificate</li>
                <li>✅ 10GB SSD Storage</li>
                <li>✅ 100GB Bandwidth</li>
                <li>✅ Email Support</li>
                <li>✅ Domain Included (Free 1st Year)</li>
                <li>✅ Auto Backups (Weekly)</li>
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-2 border border-gray-600 hover:bg-gray-800 rounded-full text-sm transition"
                >
                  Add to Project
                </Link>
              </div>
            </div>

            {/* Medium Traffic */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-yellow-600/50 bg-yellow-900/10 ring-1 ring-yellow-600/40 transform md:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Business Hosting</h3>
              <div className="text-2xl font-bold text-yellow-400 mb-4">LKR 7,999 / year</div>
              <p className="text-gray-400 text-sm mb-6">Perfect for agencies, POS, e-commerce.</p>

              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li>✅ Free SSL & CDN</li>
                <li>✅ 50GB SSD Storage</li>
                <li>✅ Unlimited Bandwidth</li>
                <li>✅ 5 Email Accounts</li>
                <li>✅ Daily Backups</li>
                <li>✅ Priority Support</li>
                <li>✅ Domain Included</li>
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 rounded-full text-sm font-medium transition"
                >
                  Add to Project
                </Link>
              </div>
            </div>

            {/* High Traffic */}
            <div className="bg-gray-900/60 rounded-2xl p-8 border border-red-600/50 bg-red-900/10 ring-1 ring-red-600/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Hosting</h3>
              <div className="text-2xl font-bold text-red-400 mb-4">LKR 24,999 / year</div>
              <p className="text-gray-400 text-sm mb-6">For high-traffic apps, SaaS, and APIs.</p>

              <ul className="space-y-3 mb-8 text-gray-300 text-sm">
                <li>✅ Dedicated VPS (2GB RAM, 2 CPU)</li>
                <li>✅ 100GB SSD NVMe</li>
                <li>✅ DDoS Protection</li>
                <li>✅ 24/7 Monitoring</li>
                <li>✅ Daily + Real-Time Backups</li>
                <li>✅ Free Migration</li>
                <li>✅ Domain + Email Included</li>
              </ul>

              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block w-full py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-full text-sm font-medium transition"
                >
                  Deploy Now
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            * Hosting can also be managed via <strong>Hostinger, Namecheap, or GoDaddy</strong> — we’ll assist with setup. <br/> <FaInfoCircle className="inline-block text-red-600"/> <strong className="text-red-600">Price/Plans Maybe Differ Please feel free to check Hostinger, Godaddy, LK Domain and NameCheap</strong>
          </p>
        </div>

        {/* Premium Product: Employment Agency Web App */}
        <div className="bg-gradient-to-r from-indigo-900/40 to-cyan-900/40 backdrop-blur-sm border border-cyan-600/50 rounded-3xl p-10 mb-20 text-center relative overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative z-10">
            <div className="inline-block px-5 py-2 bg-cyan-600/30 border border-cyan-500 rounded-full text-sm font-bold text-cyan-300 mb-6">
              READY-TO-DEPLOY
            </div>
            <h2 className="text-3xl font-bold mb-4">Employment Agency Web Application</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              A fully-featured, scalable solution for staffing agencies — manage candidates, jobs, employers, and interviews in one system.
            </p>

            <div className="bg-black/40 rounded-2xl p-6 max-w-md mx-auto mb-8 text-left">
              <h3 className="text-xl font-bold text-white mb-4">Key Features For Admin Page</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Admin Panel</li>
                <li>✅ Create|Read|Update|Delete Vacancies (Admin)</li>
                <li>✅ Read Customer Inquries (Admin)</li>
                <li>✅ Delete|Read Applications (Admin)</li>
                <li>✅ Change Login Password (Admin)</li>
                <li>✅ Generate Job Description (AI) (Admin)</li>
                <li>✅ Secured Admin Page and Authentication</li>
              </ul>
            </div>

            <div className="text-3xl font-bold text-cyan-400 mb-6">LKR 20,000 (One-Time)</div>

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

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Need a <span className="text-cyan-400">Custom Solution</span>?</h2>
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