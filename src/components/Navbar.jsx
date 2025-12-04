import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to apply background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900">
          SkillSphere
        </Link>

        {/* Menu Items */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          <Link
            to="/focus"
            className={`hover:opacity-70 transition ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Focus areas
          </Link>

          <Link
            to="/work"
            className={`hover:opacity-70 transition ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            How we work
          </Link>

          <Link
            to="/news"
            className={`hover:opacity-70 transition ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            News & insights
          </Link>

          <Link
            to="/about"
            className={`hover:opacity-70 transition ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">

          {/* Search Icon */}
          <button
            className={`${
              scrolled ? "text-gray-700" : "text-white"
            } hover:opacity-80`}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Button */}
          <Link
            to="/opportunity"
            className="px-5 py-2 rounded-md bg-white/10 backdrop-blur-lg text-white border border-white/30 
            hover:bg-white hover:text-gray-900 transition shadow-sm"
          >
            State Opportunity Index
          </Link>
        </div>
      </div>
    </header>
  );
}


