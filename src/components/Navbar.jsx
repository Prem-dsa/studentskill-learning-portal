import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className={`text-2xl font-semibold tracking-tight ${menuTextClass}`}
        >
          SkillSphere
        </Link>

        {/* CENTER MENU */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium flex-1 justify-center">
          <Link to="/focus" className={`hover:opacity-70 ${menuTextClass}`}>
            Focus areas
          </Link>

          <Link to="/work" className={`hover:opacity-70 ${menuTextClass}`}>
            How we work
          </Link>

          {/* UPDATED — now goes to /blog */}
          <Link to="/blog" className={`hover:opacity-70 ${menuTextClass}`}>
            News & insights
          </Link>

          <Link to="/about" className={`hover:opacity-70 ${menuTextClass}`}>
            About
          </Link>

          <Link to="/careers" className={`hover:opacity-70 ${menuTextClass}`}>
            Careers
          </Link>

          <Link to="/contact" className={`hover:opacity-70 ${menuTextClass}`}>
            Contact
          </Link>
        </nav>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-4">
          <Search
            className={`w-5 h-5 cursor-pointer hover:opacity-70 ${menuTextClass}`}
          />

          <Link
            to="/login"
            className={`px-5 py-1.5 rounded-full border ${
              scrolled ? "border-gray-800 text-gray-900" : "border-white text-white"
            } text-sm hover:opacity-70 transition`}
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-1.5 rounded-full text-sm text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-80 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}



