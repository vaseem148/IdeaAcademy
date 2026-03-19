import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const AdmissionsList = () => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Basic protection check
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/admin/login");
      return;
    }

    const fetchAdmissions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admissions");
        setAdmissions(res.data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Failed to load admissions. Make sure the backend is running.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdmissions();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b1628] flex items-center justify-center">
        <div className="text-[#d4a34d] text-2xl animate-pulse">Loading Applications...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1628] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                Admissions <span className="text-[#d4a34d]">Dashboard</span>
              </h2>
              <div className="text-sm text-gray-400 mt-2">
                Total Applications: <span className="text-[#d4a34d] font-bold">{admissions.length}</span>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="bg-red-500/10 text-red-400 border border-red-500/20 px-6 py-2 rounded-full font-bold hover:bg-red-500/20 transition"
            >
              LOGOUT
            </button>
          </div>

          {error ? (
            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl text-red-400 text-center">
              {error}
            </div>
          ) : admissions.length === 0 ? (
            <div className="text-center text-gray-400 py-20 bg-white/5 rounded-2xl border border-dashed border-white/10">
              No applications found in the database.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-[11px] font-bold tracking-[0.2em] text-[#d4a34d] uppercase font-serif">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Phone</th>
                    <th className="px-6 py-4">Course</th>
                    <th className="px-6 py-4 max-md:hidden">Message</th>
                    <th className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {admissions.map((item, index) => (
                    <motion.tr
                      key={item._id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-white/5 transition group"
                    >
                      <td className="px-6 py-5">
                        <div className="text-white font-medium group-hover:text-[#d4a34d] transition">{item.name}</div>
                      </td>
                      <td className="px-6 py-5 text-gray-400 ">{item.email}</td>
                      <td className="px-6 py-5 text-gray-400">{item.phone}</td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1 bg-[#d4a34d]/10 text-[#d4a34d] rounded-full text-xs font-bold ring-1 ring-[#d4a34d]/30">
                          {item.course}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-gray-400 max-w-xs truncate max-md:hidden">
                        {item.message || "---"}
                      </td>
                      <td className="px-6 py-5 text-gray-500 text-xs">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdmissionsList;
