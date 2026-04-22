// components/Projects.jsx
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Projects = () => {
  // Placeholder projects – replace with your real projects later
  const projects = [
    {
      id: 1,
      title: "Foreign Employement Agency Web APP",
      client: "Diamond Star Manpower Services (DSMS)",
      description: "A comprehensive web application for managing foreign employment processes, including candidate tracking, document management, and client communication. (CUSTOMER NOT RENEWED THE DOMAIN NAME, SO THIS PROJECT IS NOT LIVE ANYMORE)",
      image: "/DSMSK.png", // Replace with actual image path
      tags: ["Home", "Vacancies", "FAQ", "Contact Us", "Chatbot GEMINI", "Application Form", "Vacancy Details", "Admin Panel", "and more..."],
      liveUrl: "#", // Replace with live demo URL
    },
    {
      id: 2,
      title: "POS System Web Based/Cloud Based",
      client: "Robinas (Clothing Retailer)",
      description: "A comprehensive web-based Point of Sale (POS) system for managing sales, inventory, and customer data.",
      image: "/SL-POS.png",
      tags: ["POS", "Inventory Management", "Sales Tracking", "Customer Data", "Barcode Scanning", "Reporting", "and more..."],
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Watch Retailer and Wholesaler E-Commerce Web APP",
      client: "Happy Time (PVT) LTD (Watch Retailer and Wholesaler) Sri Lanka And UAE",
      description: "A comprehensive e-commerce web application for watch retailers and wholesalers, featuring product listings, shopping cart functionality, and secure checkout.",
      image: "/HT-PROJ.png",
      tags: ["Home", "About", "Shop/Product Catelog", "Careers", "Contact", "Customer and Admin Dashboards", "Tawk.to Chat Integration", "Cart and Checkout", "My Orders", "and more...", "UNDER THE DEVELOPMENT"],
      liveUrl: "https://happytimeonline.com/",
    },
    {
      id: 4,
      title: "Winsor Watches E-Commerce Web APP (UNDER THE DEVELOPMENT STAGE)",
      client: "Winsor Watches (UAE Registered Wrist Watch Brand)",
      description:
        "A modern e-commerce web application for Winsor Watches, a Sri Lankan-origin watch brand exporting worldwide. The platform showcases premium wrist watches manufactured in the UAE, featuring detailed product catalogs, seamless shopping experience, and secure online purchasing for global customers.",
      image: "/WINSOR-PROJ.png",
      tags: [
        "Home",
        "DEV.......",
      ],
      liveUrl: "https://winsorwatches.com/",
    },
  ];

  // Structured data for Projects page (optional but helpful for SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "NexaSoft Projects",
    "description": "Explore the software solutions we've delivered for clients across various industries.",
    "url": "https://nexasoft.site/projects",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.description,
          "url": project.liveUrl !== "#" ? project.liveUrl : undefined,
        }
      }))
    }
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
      <Helmet>
        <title>Our Projects - NexaSoft | Software Development Portfolio</title>
        <meta
          name="description"
          content="Browse our portfolio of custom software, web, and mobile applications. See how we've helped businesses in Sri Lanka and beyond."
        />
        <meta
          name="keywords"
          content="software projects sri lanka, web development portfolio, mobile app examples, custom software showcase, nexasoft projects, software solutions"
        />
        <link rel="canonical" href="https://nexasoft.site/projects" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexasoft.site/projects" />
        <meta property="og:title" content="NexaSoft Projects - Portfolio" />
        <meta
          property="og:description"
          content="Explore our portfolio of custom software, web, and mobile applications."
        />
        <meta property="og:image" content="https://nexasoft.site/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexasoft.site/projects" />
        <meta property="twitter:title" content="NexaSoft Projects - Portfolio" />
        <meta
          property="twitter:description"
          content="Explore our portfolio of custom software, web, and mobile applications."
        />
        <meta property="twitter:image" content="https://nexasoft.site/og-image.png" />

        {/* Structured Data */}
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
            Our <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            We build real-world solutions for businesses — from startups to enterprises. 
            Here are some systems we've delivered. <span className="text-cyan-400">(Placeholder data – replace with your actual projects)</span>
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