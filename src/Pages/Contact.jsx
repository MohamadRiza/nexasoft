// components/Contact.jsx
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

<Helmet>
  <title>Contact Us - NexaSoft</title>
  <meta name="description" content="Get in touch with NexaSoft for inquiries, collaborations, or support." />
</Helmet>

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
    // Clear error when user starts typing
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

    // EmailJS Integration
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
            Let’s <span className="text-cyan-400">Build Together</span>
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? We’d love to hear from you. Send us a message and let’s turn your idea into reality.
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
                  Thank you, <strong>{formData.name}</strong>. We’ll get back to you within 24 hours.
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
                <h1 className="text-xl font-bold text-white mb-3">❌ Temporary Error Please Contact us through Email or Phone</h1>
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
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 disabled:opacity-70 rounded-lg font-medium transition flex items-center justify-center cursor-not-allowed" //not allowed cursor
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
              <div className="flex items-start space-x-4">
                <div className="text-cyan-400 text-xl">📧</div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400"><a href="mailto:nexasoft.it@gmail.com" className="hover:text-blue-500">nexasoft.it@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-cyan-400 text-xl">📍</div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400">Narammala, Kurunegala (NWP) Sri Lanka,<br />Available for remote projects worldwide.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-cyan-400 text-xl">💬</div>
                <div>
                  <h3 className="text-white font-semibold">Support</h3>
                  <p className="text-gray-400">We offer 24/7 email support for clients.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/nexasoft-site/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a
              href="https://www.instagram.com/nexasoft_com?igsh=MXh3cnRwdTRyaTE1dQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@nexasoft_2025?_t=ZS-8zUuC5khCjK&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2h2.4c.1 1 .5 2.1 1.2 3a6 6 0 003.6 2v2.5a8 8 0 01-4.8-1.6v7.6a5.9 5.9 0 01-6 6c-3.3 0-6-2.7-6-6s2.7-6 6-6c.4 0 .7 0 1 .1V12c-.3-.1-.6-.1-1-.1a3.5 3.5 0 103.5 3.5V2z"/>
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