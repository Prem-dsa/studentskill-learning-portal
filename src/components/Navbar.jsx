import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuTextClass = scrolled ? "text-gray-900" : "text-white";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between gap-6">
        
        {/* --------------------- LOGO --------------------- */}
        <Link
          to="/"
          className={`text-2xl font-bold tracking-tight ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
        >
          SkillSphere
        </Link>

        {/* --------------------- CENTER MENU --------------------- */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium flex-1 justify-center">
          <Link to="/focus" className={`hover:opacity-70 transition ${menuTextClass}`}>
            Focus areas
          </Link>

          <Link to="/work" className={`hover:opacity-70 transition ${menuTextClass}`}>
            How we work
          </Link>

          <Link to="/blog" className={`hover:opacity-70 transition ${menuTextClass}`}>
            News & insights
          </Link>

          <Link to="/about" className={`hover:opacity-70 transition ${menuTextClass}`}>
            About
          </Link>

          <Link to="/careers" className={`hover:opacity-70 transition ${menuTextClass}`}>
            Careers
          </Link>

          <Link to="/contact" className={`hover:opacity-70 transition ${menuTextClass}`}>
            Contact
          </Link>
        </nav>

        {/* --------------------- RIGHT SIDE: SEARCH, LOGIN, SIGNUP --------------------- */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search icon */}
          <button
            className={`${menuTextClass} hover:opacity-80 transition`}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Login */}
          <Link
            to="/login"
            className={`px-4 py-1.5 rounded-full border text-sm font-medium transition ${
              scrolled
                ? "border-gray-300 text-gray-800 hover:bg-gray-100"
                : "border-white/70 text-white hover:bg-white/10"
            }`}
          >
            Login
          </Link>

          {/* Sign Up */}
          <Link
            to="/signup"
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}



