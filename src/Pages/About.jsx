// components/About.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    { 
      name: "R.M. Riza",
      role: "Founder & Lead Software Engineer",
      titleBadge: "Founder",
      image: "./Riza's_Image.jpg", // replace with real photo
      education: "BEng(Hons) in Software Engineering",
      bio: "As the founder of NexaSoft, I personally handle every stage of software development — from design and coding to testing, deployment, maintenance, and documentation. I believe in delivering solutions that are not only functional but also reliable, scalable, and aligned with our clients' goals.",
      responsibilities: [
        "Full-stack Development",
        "Testing & Quality Assurance",
        "Deployment & Maintenance",
        "System Documentation",
        "Client Support",
      ],
      priority: true, // highlight Riza as key driving force
    },
    {
      name: "Rusaid",
      role: "Chief Executive Officer (CEO)",
      titleBadge: "CEO",
      image: "./Rusaid.jpg", // replace with real photo
      education: "BEng(Hons) in Software Engineering",
      bio: "As CEO, I focus on understanding client needs and ensuring projects stay on track. I manage our team, support requirement gathering, and keep open communication with clients while also contributing to quality assurance.",
      responsibilities: [
        "Requirement Gathering",
        "Client Communication",
        "Team Management",
        "Testing Oversight",
        "Business Strategy",
      ],
    },
    {
      name: "Vimukthi",
      role: "Chief Technology Officer (CTO)",
      titleBadge: "CTO",
      image: "/images/cto.jpg", // replace with real photo
      education: "BEng(Hons) in Software Engineering",
      bio: "As CTO, I bridge technology and business needs. I handle research, system design, and user experience, while supporting development and technical documentation to ensure solutions meet client expectations.",
      responsibilities: [
        "Requirement Gathering",
        "UI/UX & System Design",
        "Technical Research",
        "Development Support",
        "Testing & Documentation",
      ],
    },
  ];

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
      <Helmet>
        <title>About Us - NexaSoft</title>
        <meta
          name="description"
          content="Learn more about NexaSoft, our mission, and the team behind our innovative solutions."
        />
      </Helmet>

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
            Built by passionate engineers. Focused on results. Driven by your success.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our <span className="text-cyan-400">Leadership Team</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className={`bg-gray-900/60 p-7 rounded-2xl border ${
                  member.priority ? "border-cyan-500/70 shadow-cyan-400/30" : "border-gray-800"
                } hover:border-cyan-600/50 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col items-center text-center`}
              >
                {/* Image */}
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-2xl border-4 border-cyan-500/40 shadow-2xl"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                    {member.titleBadge}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-cyan-400">{member.name}</h3>
                <p className="text-white">{member.role}</p>
                <p className="text-sm text-gray-400 italic mt-1">{member.education}</p>
                <p className="text-gray-300 mt-3 text-sm leading-relaxed">{member.bio}</p>

                {/* Responsibilities */}
                <div className="mt-4 text-left w-full">
                  <h4 className="text-sm font-semibold text-cyan-300 mb-2">Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    {member.responsibilities.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
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
              <div className="text-2xl font-bold text-white">Direct Access</div>
              <p className="text-sm mt-2">Work directly with our leadership — no middle layers, no delays.</p>
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
