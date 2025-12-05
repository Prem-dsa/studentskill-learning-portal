import React from "react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-4">📰 News & Insights</h1>
        <p className="text-slate-300 mb-10">
          Latest updates, learning insights, trends, and technology news.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Blog Card Example */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-white/10 hover:border-purple-500 transition">
            <h2 className="text-lg font-semibold mb-2">Why Learn React in 2025?</h2>
            <p className="text-sm text-slate-400 mb-3">
              React continues to dominate frontend development with strong job demand.
            </p>
            <button className="text-purple-400 text-sm hover:underline">Read more →</button>
          </div>

          <div className="bg-slate-900 p-5 rounded-2xl border border-white/10 hover:border-purple-500 transition">
            <h2 className="text-lg font-semibold mb-2">Top HTML & CSS Tips</h2>
            <p className="text-sm text-slate-400 mb-3">
              Improve your frontend fundamentals with these simple, effective tips.
            </p>
            <button className="text-purple-400 text-sm hover:underline">Read more →</button>
          </div>

          <div className="bg-slate-900 p-5 rounded-2xl border border-white/10 hover:border-purple-500 transition">
            <h2 className="text-lg font-semibold mb-2">Best Roadmap for Beginners</h2>
            <p className="text-sm text-slate-400 mb-3">
              A full guide from basics to advanced tools in web development.
            </p>
            <button className="text-purple-400 text-sm hover:underline">Read more →</button>
          </div>

          <div className="bg-slate-900 p-5 rounded-2xl border border-white/10 hover:border-purple-500 transition">
            <h2 className="text-lg font-semibold mb-2">How to Get First Internship?</h2>
            <p className="text-sm text-slate-400 mb-3">
              Learn how to build a strong portfolio and get noticed by recruiters.
            </p>
            <button className="text-purple-400 text-sm hover:underline">Read more →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

