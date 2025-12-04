import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Core Pages
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Profile from "./pages/Profile";

// Auth Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Extra Pages
import Focus from "./pages/Focus";
import Work from "./pages/Work";
import About from "./pages/About";
import Careers from "./pages/Careers";
import News from "./pages/News";          // News & Insights page
import BlogDetail from "./pages/BlogDetail";  // Individual blog page
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar Always Visible */}
      <Navbar />

      <Routes>
        {/* Default Page */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* Static Pages */}
        <Route path="/focus" element={<Focus />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Footer Always Visible */}
      <Footer />
    </div>
  );
}



