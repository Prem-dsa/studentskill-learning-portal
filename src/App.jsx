import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// Core Pages
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Profile from "./pages/Profile";

// Navbar Pages
import FocusAreas from "./pages/FocusAreas";
import HowWeWork from "./pages/HowWeWork";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import About from "./pages/About";

// Auth Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar ALWAYS visible */}
      <Navbar />

      <Routes>
        {/* Landing/Home */}
        <Route path="/" element={<Landing />} />

        {/* Navbar Static Pages */}
        <Route path="/focus" element={<FocusAreas />} />
        <Route path="/work" element={<HowWeWork />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard System */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}


