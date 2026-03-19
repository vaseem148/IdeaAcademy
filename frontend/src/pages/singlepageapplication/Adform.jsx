import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Adform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admissions",
        formData
      );

      console.log(res.data);
      alert("Application Submitted & Saved to DB ✅");

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error submitting application. Please try again. ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1628] pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Student <span className="text-[#d4a34d]">Application</span>
            </h2>
            <p className="text-gray-400">
              Please fill out the form below to start your journey with Idea Academy.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4a34d] focus:ring-1 focus:ring-[#d4a34d] transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4a34d] focus:ring-1 focus:ring-[#d4a34d] transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 12345 67890"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4a34d] focus:ring-1 focus:ring-[#d4a34d] transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Interested Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4a34d] focus:ring-1 focus:ring-[#d4a34d] transition appearance-none"
                >
                  <option value="" disabled className="bg-[#1a2e4c]">Select a course</option>
                  <option value="Arts" className="bg-[#1a2e4c]">Arts & Humanities</option>
                  <option value="Science" className="bg-[#1a2e4c]">Science & Tech</option>
                  <option value="Business" className="bg-[#1a2e4c]">Business Studies</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message / Statement of Purpose</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about yourself..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4a34d] focus:ring-1 focus:ring-[#d4a34d] transition"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#d4a34d] text-[#1a2e4c] font-bold py-4 rounded-xl hover:bg-[#c3923d] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_0_rgb(163,123,56)] active:shadow-none active:translate-y-1"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Adform;