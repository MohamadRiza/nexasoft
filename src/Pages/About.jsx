import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TeamMemberCard = ({ member }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`card-3d-effect bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border flex flex-col items-center text-center relative group ${
        member.priority 
          ? "border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:border-cyan-400" 
          : "border-slate-800/80 hover:border-cyan-500/40"
      }`}
    >
      {/* Inner glow backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

      {/* 3D Floating Image Container */}
      <div className="card-3d-child-image relative mb-8 z-10">
        <div className="relative rounded-2xl overflow-visible border-4 border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300 shadow-xl shadow-black/40">
          {!imgError ? (
            <img
              src={member.image}
              alt={member.name}
              onError={() => setImgError(true)}
              className="w-40 sm:w-44 aspect-[3/4] object-cover object-top rounded-xl"
            />
          ) : (
            <div className="w-40 sm:w-44 aspect-[3/4] rounded-xl bg-gradient-to-br from-cyan-950 via-slate-900 to-indigo-950 flex items-center justify-center">
              <svg className="w-20 h-20 text-cyan-500/40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="7" r="4" fill="currentColor" />
                <path d="M12 14c-4.418 0-8 3.582-8 8h16c0-4.418-3.582-8-8-8z" fill="currentColor" />
              </svg>
            </div>
          )}
        </div>
        
        {/* Title Badge overlay */}
        <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r ${member.badgeColor} text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border border-white/10 select-none z-20`}>
          {member.titleBadge}
        </div>
      </div>

      {/* 3D Floating Info Section */}
      <div className="card-3d-child-text relative z-10 space-y-2 w-full mt-2">
        <h3 className="text-xl font-black text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-sm font-semibold text-cyan-300/95 leading-none">
          {member.role}
        </p>
        <p className="text-[11px] text-gray-500 font-medium tracking-wide">
          {member.education}
        </p>
        
        {/* Divider line */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent my-4"></div>
        
        <p className="text-gray-400 text-xs leading-relaxed text-justify px-1">
          {member.bio}
        </p>

        {/* Responsibilities */}
        <div className="pt-4 text-left w-full">
          <h4 className="text-xs font-black text-cyan-300/80 uppercase tracking-widest mb-3">
            Core Focus Areas
          </h4>
          <ul className="grid grid-cols-1 gap-2">
            {member.responsibilities.map((task, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-xs text-gray-400">
                <svg className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const team = [
    {
      name: "R.M. Riza",
      role: "Director & Lead Software Engineer",
      titleBadge: "Director",
      image: "/LMU_ME_HD.jpg",
      education: "BEng(Hons) in Software Engineering",
      bio: "As the director of NexaSoft, I personally handle every stage of software development - from design and coding to testing, deployment, maintenance, and documentation. I believe in delivering solutions that are not only functional but also reliable, scalable, and aligned with our clients' goals.",
      responsibilities: [
        "Full-stack Development",
        "Testing & Quality Assurance",
        "Deployment & Maintenance",
        "System Documentation",
        "Client Support",
      ],
      priority: true,
      badgeColor: "from-indigo-500 to-purple-600",
    },
    {
      name: "Rusaid",
      role: "Senior Digital Marketing Executive",
      titleBadge: "Marketing",
      image: "/Rusaid.jpg",
      education: "Digital Marketing Specialist",
      bio: "As our Senior Digital Marketing Executive, I specialize in SEO, search engine marketing, brand positioning, and social media campaigns. I work closely with clients to increase search engine rankings, drive organic traffic, and establish a dominant online brand presence.",
      responsibilities: [
        "Search Engine Optimization (SEO)",
        "Brand Positioning & SEM",
        "Marketing Strategy",
        "Lead Generation",
        "Social Media Campaigns",
      ],
      priority: false,
      badgeColor: "from-fuchsia-500 to-pink-600",
    },
    {
      name: "Asanthi Lokuge",
      role: "Project Coordinator and Manual Tester",
      titleBadge: "Coordination",
      image: "/Asanthi.jpg",
      education: "BEng(Hons) in Software Engineering",
      bio: "Project Coordinator and Manual Tester with experience supporting software development projects by coordinating activities, tracking project progress, and ensuring software quality through detailed manual testing. Skilled in test case creation, bug reporting, requirement validation, and maintaining project documentation.",
      responsibilities: [
        "Full-Project Coordination",
        "Manual Testing & Quality Assurance",
        "UI/UX Feedback",
        "Tracking progress",
        "Bug Reporting",
      ],
      priority: false,
      badgeColor: "from-cyan-500 to-teal-600",
    },
  ];

  const values = [
    {
      title: "Customer First",
      description: "Your vision drives every line of code. We listen deeply, adapt quickly, and deliver with your goals in mind.",
      icon: "🎯",
      glow: "from-cyan-500/10 to-blue-500/10",
    },
    {
      title: "High Performance",
      description: "We build fast, secure, and scalable systems - no bloat, just clean, maintainable code.",
      icon: "⚡",
      glow: "from-amber-500/10 to-orange-500/10",
    },
    {
      title: "End-to-End Ownership",
      description: "From research to deployment and ongoing maintenance, we stay with you through every phase.",
      icon: "🔄",
      glow: "from-indigo-500/10 to-purple-500/10",
    },
    {
      title: "Transparency & Feedback",
      description: "Weekly updates, shared progress, and open communication - you're always in control.",
      icon: "💬",
      glow: "from-fuchsia-500/10 to-pink-500/10",
    },
  ];

  // Structured data for About page (includes team members as Person)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About NexaSoft",
    "description": "Learn about NexaSoft's leadership team, mission, and core values. We are a Sri Lankan software company dedicated to high-performance solutions.",
    "mainEntity": {
      "@type": "Organization",
      "name": "NexaSoft",
      "url": "https://nexasoft.site",
      "logo": "https://nexasoft.site/logo1.png",
      "founder": {
        "@type": "Person",
        "name": "Rawufdeen Mohamad Riza",
        "jobTitle": "Director & Lead Software Engineer",
        "description": "Director of NexaSoft, handling full-cycle software development.",
        "sameAs": "https://www.linkedin.com/in/mohamad-riza-rawufdeen-9a6b76254/"
      },
      "employee": team.map(member => ({
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "description": member.bio,
        "image": member.image
      }))
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Us - NexaSoft | Leadership, Mission & Values</title>
        <meta
          name="description"
          content="Meet the team behind NexaSoft: Director R.M. Riza and Senior Digital Marketing Executive Rusaid. Learn about our mission to deliver high-performance software solutions."
        />
        <meta
          name="keywords"
          content="about nexasoft, software company sri lanka, rawufdeen mohamad riza, riza, rusaid, software team, custom software development, software engineers sri lanka"
        />
        <link rel="canonical" href="https://nexasoft.site/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexasoft.site/about" />
        <meta property="og:title" content="About NexaSoft - Our Team & Values" />
        <meta
          property="og:description"
          content="Meet the leadership team at NexaSoft and discover our mission to deliver high-performance, customer-focused software solutions."
        />
        <meta property="og:image" content="https://nexasoft.site/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexasoft.site/about" />
        <meta property="twitter:title" content="About NexaSoft - Our Team & Values" />
        <meta
          property="twitter:description"
          content="Meet the leadership team at NexaSoft and discover our mission to deliver high-performance, customer-focused software solutions."
        />
        <meta property="twitter:image" content="https://nexasoft.site/about-twitter-image.png" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

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
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 relative z-10 space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(6,182,212,0.35)]">
              About NexaSoft
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Built by passionate developers. Focused on high-performance architecture. Driven by client success.
          </p>
          <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
        </div>

        {/* Leadership Section */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our <span className="text-cyan-400">Leadership Team</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              The engineering and marketing minds directing your projects from blueprint to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {team.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="relative group overflow-hidden bg-slate-900/30 backdrop-blur-md border border-slate-800/80 rounded-3xl p-10 lg:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-cyan-500/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-3xl flex-shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              🚀
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">
                Our <span className="text-cyan-400">Mission</span>
              </h2>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-4xl">
                At NexaSoft, we believe technology should <strong>solve real business challenges</strong>, not introduce unnecessary complexity. We build lightweight, secure, and highly scalable software products that streamline workflows and fuel growth - delivered with absolute integrity and transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our <span className="text-cyan-400">Core Values</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              The fundamental standards guiding our development cycles and partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 backdrop-blur-md p-8 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-1.5 group overflow-hidden relative shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]"
              >
                {/* Accent glow on card hover */}
                <div className={`absolute -right-16 -top-16 w-36 h-36 bg-gradient-to-br ${value.glow} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700`}></div>
                
                <div className="relative z-10 flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-2xl flex-shrink-0 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all duration-300">
                    {value.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Clients Choose Us */}
        <div className="bg-gradient-to-br from-cyan-900/20 via-slate-900/45 to-indigo-900/20 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-10 lg:p-12 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <h2 className="text-3xl font-bold text-white relative z-10">
            Why <span className="text-cyan-400">Clients Choose Us</span>
          </h2>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 text-gray-300">
            {/* Direct Access */}
            <div className="flex flex-col items-center p-6 bg-slate-950/30 rounded-2xl border border-slate-800/60 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="w-14 h-14 bg-cyan-600/10 rounded-full flex items-center justify-center mb-6 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Access</h3>
              <p className="text-xs text-gray-400 leading-relaxed text-center">
                Work directly with our senior software engineers and executives. No middle layers, no communication delays.
              </p>
            </div>
            {/* Fast & Flexible */}
            <div className="flex flex-col items-center p-6 bg-slate-950/30 rounded-2xl border border-slate-800/60 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="w-14 h-14 bg-cyan-600/10 rounded-full flex items-center justify-center mb-6 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast & Flexible</h3>
              <p className="text-xs text-gray-400 leading-relaxed text-center">
                We operate on agile sprints with daily updates. We adapt swiftly to requirement changes and product pivots.
              </p>
            </div>
            {/* Transparent Billing */}
            <div className="flex flex-col items-center p-6 bg-slate-950/30 rounded-2xl border border-slate-800/60 hover:border-cyan-500/30 transition-colors duration-300">
              <div className="w-14 h-14 bg-cyan-600/10 rounded-full flex items-center justify-center mb-6 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Clear Pricing</h3>
              <p className="text-xs text-gray-400 leading-relaxed text-center">
                Detailed breakdowns, milestone-based payments, and zero hidden costs. Complete budget control at all times.
              </p>
            </div>
          </div>
          
          <div className="mt-12 relative z-10">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/40 hover:scale-105 transform cursor-pointer"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;