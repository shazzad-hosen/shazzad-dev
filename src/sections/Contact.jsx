import {
  Mail,
  Github,
  Linkedin,
  Send,
  MessageSquare,
  Loader2,
  CheckCircle,
} from "lucide-react";

import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-5 sm:px-6 relative overflow-hidden bg-darkBg"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">
              04. Contact
            </h2>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let’s build something <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                meaningful together
              </span>
            </h3>

            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md">
              I’m currently looking for new opportunities. Whether you have a
              question or just want to say hi, I’ll try my best to get back to
              you!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:mdshazzadhosenzisan@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors">
                  <Mail
                    className="text-primary group-hover:text-white"
                    size={24}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-white/40 uppercase font-bold">
                    Email Me
                  </p>
                  <p className="text-white font-medium break-all">
                    mdshazzadhosenzisan@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/shazzad-hosen"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <Github size={20} className="text-white/70" />
                  <span className="text-white font-medium">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/shazzadhosen"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <Linkedin size={20} className="text-[#0077b5]" />
                  <span className="text-white font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="p-5 sm:p-6 md:p-10 rounded-3xl bg-white/2 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-primary" size={24} />
              <h4 className="text-xl font-bold">Send a Message</h4>
            </div>

            <form onSubmit={sendEmail} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-white/60 ml-1">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="Ahmed Jisan"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-white/60 ml-1">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                    placeholder="ahmed@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/60 ml-1">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/60 ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${
                  status === "success"
                    ? "bg-green-500"
                    : "bg-linear-to-r from-primary to-accent"
                }`}
              >
                {status === "idle" && (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
                {status === "sending" && (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                )}
                {status === "success" && (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                )}
                {status === "error" && "Try Again"}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-center text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
