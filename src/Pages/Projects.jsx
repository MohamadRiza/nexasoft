// components/Projects.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

<Helmet>
  <title>Our Projects - NexaSoft</title>
  <meta name="description" content="Explore the projects we've delivered at NexaSoft, showcasing our expertise and innovation." />
</Helmet>

const Projects = () => {
  // Sample projects (replace with your real ones)
  const projects = [
    {
      id: 1,
      title: "Foreign Employment Agency Web APP",
      client: "Diamond Star Manpower Services (DSMS)",
      description:
        "A comprehensive web application for managing foreign employment processes, including candidate tracking, document management, and client communication.",
      image: "/projects/hr-system.jpg",
      tags: ["Home", "Vacancies", "FAQ", "Contact", "ChatBot AI", "Application", "Vacancies Details", "Admin Panel"],
      liveUrl: "#", // Replace with live link or demo
    },
  ];

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
            Our <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            We build real-world solutions for businesses — from startups to enterprises. 
            Here are some systems we've delivered.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/70 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to={project.liveUrl}
                    className="px-5 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium hover:bg-cyan-500 transition"
                  >
                    View Demo
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-cyan-400 font-medium">Client: {project.client}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg mb-6">
            Need a custom solution like these?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full hover:from-cyan-300 hover:to-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
          >
            Build Your System
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;