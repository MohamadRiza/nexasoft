// components/Home.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

<Helmet>
  <title>Home - NexaSoft</title>
  <meta name="description" content="Welcome to NexaSoft, your partner in high-performance software solutions." />
</Helmet>

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30, 41, 59, 0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.7) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Neon Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 lg:px-12 max-w-7xl mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                High-Performance
              </span>{" "}
              <br />
              <span className="text-white">Solutions. Zero Compromise.</span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We build web, desktop, and mobile applications with a focus on performance, flexibility, and customer satisfaction — from concept to deployment and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="#contact"
                className="relative inline-flex items-center px-7 py-3 text-lg font-medium text-black rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Project
              </Link>
              <Link
                to="#services"
                className="inline-flex items-center px-7 py-3 text-lg font-medium text-cyan-300 border border-cyan-500 rounded-full hover:bg-cyan-500/10 transition duration-300"
              >
                See How We Work
              </Link>
            </div>
          </div>

          {/* Hero Illustration */}
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

      {/* Services Section */}
      <section id="services" className="relative py-20 px-6 lg:px-12 max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            What We <span className="text-cyan-400">Deliver</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            From idea to maintenance, we cover every phase with precision and care.
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
              desc: "Cross-platform desktop software with Electron, .NET, or native tech — built for performance.",
              icon: "💻",
            },
            {
              title: "Mobile Apps",
              desc: "iOS & Android apps with React Native or Flutter — smooth, secure, and user-friendly.",
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
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="relative py-20 px-6 lg:px-12 max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our <span className="text-cyan-400">Development Flow</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A structured, agile, and feedback-powered journey from concept to reality.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
          {[
            "Research",
            "Design",
            "Develop",
            "Testing",
            "Deployment",
            "Maintenance",
          ].map((phase, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 group">
              <div className="w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>
              <span className="text-gray-300 font-medium text-center">{phase}</span>
              {index < 5 && (
                <div className="hidden lg:block w-12 h-0.5 bg-gray-700 group-hover:bg-cyan-500 transition-colors"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 lg:px-12 text-center z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-700/40 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Build with a <span className="text-cyan-400">Customer-First</span> Team?
          </h2>
          <p className="mt-6 text-xl text-gray-300">
            We’re flexible, fast, and focused on your satisfaction. Let’s create something amazing — together.
          </p>
          <div className="mt-10">
            <Link
              to="#contact"
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