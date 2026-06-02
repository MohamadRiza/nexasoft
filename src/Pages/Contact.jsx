// components/Contact.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

/* ─── your Web3Forms access key ─── */
const WEB3FORMS_KEY = "9c7c4eb4-3c5c-4968-b702-f37e6518c900";

/* ─── tiny SVG icons ─── */
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);
const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
  </svg>
);
const WhatsappIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.12 1.523 5.849L.052 23.446c-.126.528.411.962.925.78l5.845-1.999A11.97 11.97 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.729 0-3.36-.458-4.764-1.258l-.34-.2-4.173 1.427 1.354-4.121-.209-.35A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);
const SpinnerIcon = () => (
  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
  </svg>
);

/* ══════════════════════════════════════════════
   CONTACT COMPONENT
══════════════════════════════════════════════ */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  /* ── input handler ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  /* ── validation ── */
  const validate = () => {
    const errs = {};
    if (!formData.name.trim())    errs.name    = "Name is required";
    if (!formData.email.trim())   errs.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Enter a valid email";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  /* ── submit via Web3Forms ── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("sending");

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New Enquiry from ${formData.name} — ${formData.service}`,
        from_name: formData.name,
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        botcheck: "",          // honeypot — leave empty
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "Web Development", message: "" });
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  /* ── structured data ── */
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact NexaSoft",
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
        "availableLanguage": ["English", "Sinhala", "Tamil"],
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kurunegala",
        "addressRegion": "Kurunegala",
        "addressCountry": "LK",
      },
      "sameAs": ["https://www.linkedin.com/company/nexasoft-site/"],
    },
  };

  /* ══ RENDER ══ */
  return (
    <section className="min-h-screen bg-gray-950 text-white pt-24 pb-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      <Helmet>
        <title>Contact Us — NexaSoft | Get in Touch for Software Solutions</title>
        <meta name="description"
          content="Contact NexaSoft for custom software development, web development, mobile apps, and IT support in Sri Lanka. Call +94 77 660 6914 or email nexasoft.it@gmail.com." />
        <meta name="keywords"
          content="contact nexasoft, software company sri lanka, web development contact, mobile app development, it support, whatsapp +94776606914" />
        <link rel="canonical" href="https://nexasoft.site/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexasoft.site/contact" />
        <meta property="og:title" content="Contact NexaSoft — Let's Build Together" />
        <meta property="og:description"
          content="Reach out to NexaSoft for your next software project. Based in Sri Lanka, serving clients worldwide." />
        <meta property="og:image" content="https://nexasoft.site/og-image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nexasoft.site/contact" />
        <meta property="twitter:title" content="Contact NexaSoft — Let's Build Together" />
        <meta property="twitter:description"
          content="Reach out to NexaSoft for your next software project. Based in Sri Lanka, serving clients worldwide." />
        <meta property="twitter:image" content="https://nexasoft.site/og-image.png" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black pointer-events-none"/>
      <div className="absolute top-20 left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"/>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"/>
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(6,182,212,1) 1px, transparent 0)", backgroundSize: "44px 44px" }}/>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── header ── */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30
            rounded-full text-cyan-400 text-sm font-medium mb-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
            We respond within 24 hours
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Build Together
            </span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Send us a message and let's turn your idea into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ════ FORM ════ */}
          <div className="bg-gray-900/70 rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-xl">

            {/* SUCCESS STATE */}
            {status === "success" ? (
              <div className="text-center py-10 px-4">
                <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full
                  flex items-center justify-center mx-auto mb-5">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                <p className="text-gray-400 mb-6 max-w-xs mx-auto">
                  Thanks for reaching out. We'll get back to you within <span className="text-cyan-400 font-semibold">24 hours</span>.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 rounded-full text-white
                    text-sm font-semibold transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>

            ) : (
              /* FORM FIELDS */
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                {/* honeypot — hidden, must stay empty */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} readOnly/>

                {/* name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Your Name <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Kamal Perera"
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white placeholder-gray-600
                      focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200
                      ${errors.name ? "border-red-500" : "border-gray-700 hover:border-gray-600"}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Email Address <span className="text-cyan-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white placeholder-gray-600
                      focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-200
                      ${errors.email ? "border-red-500" : "border-gray-700 hover:border-gray-600"}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* service */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 hover:border-gray-600
                      rounded-xl text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-200 cursor-pointer"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Employment Agency Web App">Employment Agency Web App</option>
                    <option value="POS System">POS System</option>
                    <option value="Hosting & Maintenance">Hosting &amp; Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">
                    Your Message <span className="text-cyan-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project, timeline, and budget..."
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-xl text-white placeholder-gray-600
                      focus:ring-2 focus:ring-cyan-500 outline-none transition-all duration-200 resize-none
                      ${errors.message ? "border-red-500" : "border-gray-700 hover:border-gray-600"}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                {/* submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600
                    hover:from-cyan-400 hover:to-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed
                    rounded-xl font-semibold text-white transition-all duration-200
                    flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/20"
                >
                  {status === "sending" ? (
                    <><SpinnerIcon />Sending…</>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </>
                  )}
                </button>

                {/* error feedback */}
                {status === "error" && (
                  <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                    <div>
                      <p className="text-red-400 text-sm font-semibold">Submission failed</p>
                      <p className="text-red-400/80 text-xs mt-0.5">
                        Please try again, or reach us directly at{" "}
                        <a href="mailto:nexasoft.it@gmail.com" className="underline hover:text-red-300">
                          nexasoft.it@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                )}

              </form>
            )}
          </div>

          {/* ════ CONTACT INFO ════ */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">
                Get in <span className="text-cyan-400">Touch</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                We respond to all enquiries within 24 hours. Whether you're ready to start or just exploring ideas, we're here to help.
              </p>
            </div>

            {/* info cards */}
            <div className="space-y-4">
              {/* email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800/80
                hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20
                  flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <EmailIcon/>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Email</h3>
                  <a href="mailto:nexasoft.it@gmail.com"
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                    nexasoft.it@gmail.com
                  </a>
                </div>
              </div>

              {/* phone + whatsapp */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800/80
                hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20
                  flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <PhoneIcon/>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Phone / WhatsApp</h3>
                  <a href="tel:+94776606914"
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors block">
                    +94 77 660 6914
                  </a>
                  <a
                    href="https://wa.me/94776606914?text=Hello%20NexaSoft%2C%20I'm%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-1.5 text-xs text-green-400 hover:text-green-300 font-medium transition-colors"
                  >
                    <WhatsappIcon/> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800/80
                hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20
                  flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <LocationIcon/>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Location</h3>
                  <p className="text-gray-400 text-sm">
                    Kurunegala (NWP), Sri Lanka<br/>
                    <span className="text-gray-500 text-xs">Available for remote projects worldwide</span>
                  </p>
                </div>
              </div>

              {/* support */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/50 border border-gray-800/80
                hover:border-cyan-500/30 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20
                  flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <SupportIcon/>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Support</h3>
                  <p className="text-gray-400 text-sm">24/7 email support for all active clients.</p>
                </div>
              </div>
            </div>

            {/* social links */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-3">Follow Us</h3>
              <div className="flex gap-3">
                {/* Facebook */}
                <a href="https://www.facebook.com/nexasoft" target="_blank" rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center
                    text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/nexasoft-site/" target="_blank" rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center
                    text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/nexasoft_com" target="_blank" rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center
                    text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1 1 0 110 2 1 1 0 010-2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* back link */}
        <div className="text-center mt-14">
          <Link to="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Contact;