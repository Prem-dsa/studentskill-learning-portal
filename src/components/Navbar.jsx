import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          <span className={scrolled ? "text-gray-900" : "text-white"}>
            SkillSphere
          </span>
        </Link>

        {/* Desktop Menu */}
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

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Search className={`h-5 w-5 ${menuTextClass} cursor-pointer`} />

          <Link
            to="/login"
            className={`px-4 py-1.5 rounded-full border ${
              scrolled ? "border-gray-900 text-gray-900" : "border-white text-white"
            } hover:opacity-70 transition`}
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900 text-white px-6 py-4 space-y-4">
          <Link to="/focus" onClick={() => setMobileOpen(false)}>
            Focus areas
          </Link>

          <Link to="/work" onClick={() => setMobileOpen(false)}>
            How we work
          </Link>

          <Link to="/blog" onClick={() => setMobileOpen(false)}>
            News & insights
          </Link>

          <Link to="/about" onClick={() => setMobileOpen(false)}>
            About
          </Link>

          <Link to="/careers" onClick={() => setMobileOpen(false)}>
            Careers
          </Link>

          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

          <hr className="border-white/20" />

          <Link to="/login" className="block" onClick={() => setMobileOpen(false)}>
            Login
          </Link>

          <Link to="/signup" className="block" onClick={() => setMobileOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}



