// components/About.jsx
import { Link } from "react-router-dom";

const About = () => {
  const founder = {
    name: "R.M.Riza",
    role: "Founder & Lead Software Engineer",
    education: "BEng(Hons) in Software Engineering",
    bio: "I'm a passionate software engineer with a strong academic foundation and hands-on experience in building full-stack web, desktop, and mobile applications. I founded NexaSoft to empower startups and businesses with clean, high-performance solutions that are built to scale — on time, on budget, and with your satisfaction at the core.",
    skills: ["React", "Node.js", "React Native", "Electron", "JavaScript", "Python", "MongoDB", "AWS", "UI/UX Design", "REST APIs"],
    image: "/Riza's_Image.jpg", // Replace with your photo
  };

  const values = [
    {
      title: "Customer First",
      description: "Your vision drives every line of code. We listen deeply, adapt quickly, and deliver with your goals in mind.",
      icon: "🎯",
    },
    {
      title: "High Performance",
      description: "We build fast, secure, and scalable systems — no bloat, just clean, maintainable code.",
      icon: "⚡",
    },
    {
      title: "End-to-End Ownership",
      description: "From research to deployment and ongoing maintenance, we stay with you through every phase.",
      icon: "🔄",
    },
    {
      title: "Transparency & Feedback",
      description: "Weekly updates, shared progress, and open communication — you're always in control.",
      icon: "💬",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
      <div className="absolute top-20 left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">NexaSoft</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Built by a software engineer. Focused on results. Driven by your success.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Meet the Founder</h2>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cyan-400">{founder.name}</h3>
              <p className="text-lg text-white">{founder.role}</p>
              <p className="text-sm text-gray-300 italic">Graduate of BEng(Hons) in Software Engineering</p>

              <p className="text-gray-400 leading-relaxed">{founder.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {founder.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-600/20 text-cyan-300 border border-cyan-600/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-2 text-base font-medium text-black bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
                >
                  Work With Me
                </Link>
              </div>
            </div>
          </div>

          {/* Founder Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-80 h-80 object-cover rounded-2xl border-4 border-cyan-500/40 shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg animate-pulse">
                Full-Stack Engineer
              </div>
            </div>
          </div>
        </div>

        {/* Education & Expertise Highlight */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-cyan-900/30 backdrop-blur-sm border border-indigo-600/40 rounded-3xl p-8 mb-20 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-3">Academic Excellence</h3>
          <p className="text-gray-300">
            My BEng(Hons) in Software Engineering provided a strong foundation in 
            <strong> software architecture, algorithms, system design, and quality assurance</strong> — 
            principles I apply every day to build robust, future-proof solutions for your business.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-10 mb-20">
          <h2 className="text-3xl font-bold text-center mb-6">Our <span className="text-cyan-400">Mission</span></h2>
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            At NexaSoft, we believe technology should <strong>solve real problems</strong>, not create more complexity. 
            We exist to build high-performance, maintainable, and user-focused software that helps businesses grow — 
            without the bloat, delays, or miscommunication.
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our <span className="text-cyan-400">Core Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900/60 p-7 rounded-2xl border border-gray-800 hover:border-cyan-600/50 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-700/40 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold">Why <span className="text-cyan-400">Clients Choose Us</span></h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            <div>
              <div className="text-2xl font-bold text-white">1:1 Access</div>
              <p className="text-sm mt-2">You work directly with me — no project managers, no delays.</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Fast & Flexible</div>
              <p className="text-sm mt-2">Agile development, rapid iterations, and full adaptability.</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">Zero Hidden Costs</div>
              <p className="text-sm mt-2">Clear pricing, honest communication, real results.</p>
            </div>
          </div>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;