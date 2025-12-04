import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero section */}
      <section className="pt-32 pb-20 px-6 md:px-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-purple-300 mb-3">
            Future-ready learning platform
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Connecting <span className="text-purple-400">students</span> with
            real-world <span className="text-indigo-400">skills</span>.
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mb-6">
            Learn HTML, CSS, JavaScript and React through curated video lessons,
            interactive projects, and a beautiful progress dashboard.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/dashboard"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-sm font-medium shadow-lg hover:opacity-90 transition"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/signup"
              className="px-5 py-2.5 rounded-full border border-white/40 text-sm font-medium text-white hover:bg-white/10 transition"
            >
              Get started for free
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: Animated card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -top-10 -right-6 h-32 w-32 bg-purple-500/40 blur-3xl rounded-full" />
          <div className="absolute bottom-0 -left-6 h-40 w-40 bg-indigo-500/30 blur-3xl rounded-full" />

          <div className="relative rounded-3xl bg-slate-900/80 border border-white/10 p-6 shadow-[0_25px_80px_rgba(15,23,42,1)]">
            <p className="text-xs text-slate-400 mb-2">Today’s snapshot</p>
            <p className="text-lg font-semibold mb-4">Your learning overview</p>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Courses available</span>
                <span className="font-semibold text-slate-100">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Tracks covered</span>
                <span className="font-semibold text-slate-100">
                  HTML • CSS • JS • React
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Avg. completion time</span>
                <span className="font-semibold text-slate-100">
                  4–6 weeks
                </span>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-[11px] text-slate-400 mb-1">
                Example progress
              </p>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "55%" }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-purple-400 to-sky-400 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
