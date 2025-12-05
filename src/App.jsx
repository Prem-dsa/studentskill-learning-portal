import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// PAGES
import Landing from "./pages/Landing";
import Focus from "./pages/Focus";
import Work from "./pages/Work";
import News from "./pages/News";          
import BlogDetail from "./pages/BlogDetail";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Routes>

        {/* ⚡ Main Pages */}
        <Route path="/" element={<Landing />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/work" element={<Work />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

        {/* ⚡ Learning Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/profile" element={<Profile />} />

        {/* ⚡ Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ⚡ 404 Page */}
        <Route path="*" element={<div className='pt-40 text-center text-lg'>404 – Page Not Found</div>} />

      </Routes>

      <Footer />
    </div>
  );
}




