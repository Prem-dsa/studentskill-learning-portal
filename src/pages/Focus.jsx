import React from "react";
import { Link } from "react-router-dom";

export default function Focus() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          {/* Tagline */}
          <p className="text-sm text-purple-300 mb-3 tracking-wide">
            Future-ready learning platform
          </p>

          {/* Big Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Connecting{" "}
            <span className="text-purple-400">students</span>
            {" "}with
            <br />
            real-world{" "}
            <span className="text-sky-400">skills.</span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 mt-6 text-lg max-w-xl leading-relaxed">
            Learn HTML, CSS, JavaScript and React through curated video lessons,
            interactive projects, and a beautiful progress dashboard.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-10">
            <Link
              to="/dashboard"
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 shadow-lg font-medium transition"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/signup"
              className="px-6 py-3 rounded-full border border-slate-700 hover:bg-slate-800 transition font-medium text-slate-300"
            >
              Get started for free
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE STATS CARD */}
        <div className="relative">
          <div className="rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 shadow-[0_30px_80px_rgba(60,8,120,0.4)]">

            <p className="text-sm text-slate-400 mb-3">Today's snapshot</p>

            <h2 className="text-xl font-semibold mb-6">
              Your learning overview
            </h2>

            <div className="text-sm space-y-3">
              <div className="flex justify-between">
                <span>Courses available</span>
                <span className="text-slate-200">12</span>
              </div>

              <div className="flex justify-between">
                <span>Tracks covered</span>
                <span className="text-slate-200">HTML • CSS • JS • React</span>
              </div>

              <div className="flex justify-between">
                <span>Avg. completion time</span>
                <span className="text-slate-200">4–6 weeks</span>
              </div>

              {/* Progress Bar */}
              <div className="mt-5">
                <p className="text-xs text-slate-400 mb-2">Example progress</p>
                <div className="h-2 w-full bg-slate-800 rounded-full">
                  <div className="h-2 w-[45%] rounded-full bg-gradient-to-r from-purple-500 to-sky-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-10 rounded-full bg-purple-600/20 blur-3xl"></div>
        </div>

      </div>
    </div>
  );
}

