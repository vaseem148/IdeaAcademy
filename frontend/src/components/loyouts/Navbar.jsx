import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", id: "about" },
    { name: "PROGRAMS", id: "programs" },
    { name: "TESTIMONIALS", id: "testimonial" },
    { name: "ADMISSIONS", id: "admission1" },
     { name: "CONTACT", id: "contact" },
  ];

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 px-6 backdrop-blur-xl border-b border-white/10
      ${
        isScrolled
          ? "py-3 bg-[#1a2e4c]/90 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center group"
        >
          <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white transition duration-300 group-hover:scale-105">
            Idea{" "}
            <span className="text-[#d4a34d] group-hover:drop-shadow-[0_0_6px_rgba(212,163,77,0.9)]">
              Academy
            </span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 text-[11px] font-bold tracking-[0.2em]">

          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="relative text-white/90 uppercase hover:text-[#d4a34d] transition-colors duration-300 group"
            >
              {link.name}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#d4a34d] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* APPLY BUTTON */}
          <button
            onClick={() => handleNavClick("admission1")}
            className="bg-[#d4a34d] text-[#1a2e4c] px-6 py-2 rounded-full font-bold
            transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(212,163,77,0.7)]"
          >
            APPLY NOW
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#1a2e4c]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4 text-[12px] font-bold tracking-widest text-white uppercase">

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left py-2 border-b border-white/5 hover:text-[#d4a34d] transition"
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("admission1")}
                className="bg-[#d4a34d] text-[#1a2e4c] py-3 rounded-lg text-center font-bold
                hover:scale-105 transition"
              >
                APPLY NOW
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;