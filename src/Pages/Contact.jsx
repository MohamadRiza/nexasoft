// components/Contact.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });

  const [status, setStatus] = useState(""); // 'idle', 'sending', 'success', 'error'
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("sending");

    // EmailJS Integration – Replace with your credentials
    window.emailjs
      .send(
        "YOUR_SERVICE_ID",     // ← Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",    // ← Replace with your EmailJS Template ID
        {
          to_name: "NexaSoft Team",
          from_name: formData.name,
          reply_to: formData.email,
          service: formData.service,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"      // ← Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", service: "Web Development", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  // Structured data for ContactPage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact NexaSoft",
    "description": "Get in touch with NexaSoft for software development inquiries, collaborations, or support.",
    "url": "https://nexasoft.site/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "NexaSoft",
      "email": "nexasoft.it@gmail.com",
      "telephone": "+94776606914",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+94776606914",
        "contactType": "customer support",
        "email": "nexasoft.it@gmail.com",
        "availableLanguage": ["English", "Sinhala", "Tamil"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kurunegala",
        "addressRegion": "Kurunegala",
        "addressCountry": "LK"
      },
      "sameAs": [
        "https://www.linkedin.com/company/nexasoft-site/",
        // "https://www.instagram.com/nexasoft_com"
      ]
    }
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
      <Helmet>
        <title>Contact Us - NexaSoft | Get in Touch for Software Solutions</title>
        <meta
          name="description"
          content="Contact NexaSoft for custom software development, web development, mobile apps, and IT support in Sri Lanka. Call +94 77 660 6914 or email nexasoft.it@gmail.com."
        />
        <meta
          name="keywords"
          content="contact nexasoft, software company sri lanka, web development contact, mobile app development, it support, whatsapp +94776606914"
        />
        <link rel="canonical" href="https://nexasoft.site/contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexasoft.site/contact" />
        <meta property="og:title" content="Contact NexaSoft - Let's Build Together" />
        <meta
          property="og:description"
          content="Reach out to NexaSoft for your next software project. We're based in Sri Lanka and serve clients worldwide."
        />
        <meta property="og:image" content="https://nexasoft.site/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexasoft.site/contact" />
        <meta property="twitter:title" content="Contact NexaSoft - Let's Build Together" />
        <meta
          property="twitter:description"
          content="Reach out to NexaSoft for your next software project. We're based in Sri Lanka and serve clients worldwide."
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
            Let's <span className="text-cyan-400">Build Together</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and let's turn your idea into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-800 shadow-xl">
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-white mb-3">Message Sent!</h2>
                <p className="text-gray-400 mb-6">
                  Thank you, <strong>{formData.name}</strong>. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-full text-white font-medium transition"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h1 className="text-red-500 text-center font-bold text-lg">❌ Temporary Error Please Contact us through Email or Phone</h1>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      errors.name ? "border-red-500" : "border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Employment Agency App">Employment Agency Web App</option>
                    <option value="Hosting & Maintenance">Hosting & Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 bg-gray-800 border ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    } rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none transition`}
                    placeholder="Tell us about your project, timeline, and budget..."
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 disabled:opacity-70 rounded-lg font-medium transition flex items-center justify-center"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {status === "error" && (
                  <p className="text-center text-red-400 text-sm">
                    ❌ Temporary Error. Please contact us directly via email or phone.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in <span className="text-cyan-400">Touch</span></h2>
              <p className="text-gray-400 leading-relaxed">
                We respond to all inquiries within 24 hours. Whether you're ready to start or just exploring ideas, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email - Cyan SVG Icon */}
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400">
                    <a href="mailto:nexasoft.it@gmail.com" className="hover:text-cyan-400 transition">nexasoft.it@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Phone / WhatsApp - Phone icon cyan, WhatsApp green (brand) */}
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone / WhatsApp</h3>
                  <p className="text-gray-400">
                    <a href="tel:+94776606914" className="hover:text-cyan-400 transition">+94 77 660 6914</a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    <a
                      href="https://wa.me/94776606914?text=Hello%20NexaSoft%2C%20I'm%20interested%20in%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 flex items-center gap-1 mt-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.12 1.523 5.849L.052 23.446c-.126.528.411.962.925.78l5.845-1.999A11.97 11.97 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.729 0-3.36-.458-4.764-1.258l-.34-.2-4.173 1.427 1.354-4.121-.209-.35A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </p>
                </div>
              </div>

              {/* Location - Cyan SVG Icon */}
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">
                    Kurunegala (NWP) Sri Lanka,<br />
                    Available for remote projects worldwide.
                  </p>
                </div>
              </div>

              {/* Support - Cyan SVG Icon */}
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Support</h3>
                  <p className="text-gray-400">We offer 24/7 email support for clients.</p>
                </div>
              </div>
            </div>

            {/* Social Links - Only Facebook, LinkedIn, Instagram */}
            <div>
              <h3 className="text-white font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/nexasoft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/nexasoft-site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/nexasoft_com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1 1 0 110 2 1 1 0 010-2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;