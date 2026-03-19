import React, { useState } from "react";
import { motion } from "framer-motion";

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // later backend / email integration pannalam
    alert("Application Submitted 🚀");
  };

  return (
    <div className="bg-[#0b1628] text-white">

      {/* HERO SECTION */}
      <section className="relative py-24 bg-[#1a2e4c] overflow-hidden text-center px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(212,163,77,0.05)_0%,_transparent_70%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Start Your Journey at{" "}
            <span className="text-[#d4a34d]">Idea Academy</span>
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto">
            Fill out the application form below and take your first step towards a successful future.
          </p>
        </motion.div>
      </section>

      {/* FORM SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            {/* glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-[#d4a34d]/40 to-transparent rounded-2xl blur opacity-40"></div>

            <form
              onSubmit={handleSubmit}
              className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-10 rounded-2xl space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-4">
                Admission Form
              </h2>

              {/* NAME */}
              <div>
                <label className="text-sm text-white/60">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-[#d4a34d] focus:ring-2 focus:ring-[#d4a34d]/30"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-white/60">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-[#d4a34d] focus:ring-2 focus:ring-[#d4a34d]/30"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="text-sm text-white/60">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-[#d4a34d]"
                />
              </div>

              {/* COURSE */}
              <div>
                <label className="text-sm text-white/60">Select Course</label>
                <select
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-[#d4a34d]"
                >
                  <option value="">Choose a program</option>
                  <option value="web">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="marketing">Digital Marketing</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-white/60">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-[#d4a34d]"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#d4a34d] text-[#0b1628] py-3 rounded-lg font-bold tracking-wide
                hover:scale-[1.02] transition-all duration-300
                hover:shadow-[0_0_25px_rgba(212,163,77,0.6)]"
              >
                SUBMIT APPLICATION →
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;