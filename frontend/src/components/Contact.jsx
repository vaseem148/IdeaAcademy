import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0b1628] text-white py-24 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4a34d]/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-[#d4a34d] uppercase tracking-[0.3em] text-xs mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
            Let’s Build Your <br />
            <span className="text-[#d4a34d] drop-shadow-[0_0_10px_rgba(212,163,77,0.6)]">
              Future Together
            </span>
          </h2>

          <p className="text-white/60 mb-10 max-w-md leading-relaxed">
            Have questions about admissions or programs? Our team is here to guide you every step of the way.
          </p>

          {/* info cards */}
          <div className="space-y-4">
            {[
              { icon: "📍", text: "Tamil Nadu, India" },
              { icon: "📞", text: "+91 98765 43210" },
              { icon: "📧", text: "info@ideaacademy.com" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#d4a34d]/50 transition"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm text-white/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative group">
          {/* glow border */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#d4a34d]/40 via-transparent to-[#d4a34d]/40 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl p-8 md:p-10 shadow-2xl">

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form className="space-y-5">

              {/* input group */}
              <div className="space-y-2">
                <label className="text-xs text-white/60">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-[#d4a34d] focus:ring-2 focus:ring-[#d4a34d]/30 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-white/60">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-[#d4a34d] focus:ring-2 focus:ring-[#d4a34d]/30 transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-white/60">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-[#d4a34d] focus:ring-2 focus:ring-[#d4a34d]/30 transition"
                ></textarea>
              </div>

              {/* button */}
              <button
                type="submit"
                className="w-full bg-[#d4a34d] text-[#0b1628] py-3 rounded-lg font-bold tracking-wide
                transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(212,163,77,0.6)]"
              >
                SEND MESSAGE →
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;