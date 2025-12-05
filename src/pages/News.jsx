import React from "react";
import { Link } from "react-router-dom";

export default function News() {
  const articles = [
    {
      id: 1,
      title: "The Future of Web Development in 2025",
      desc: "Explore the latest trends shaping frontend and backend development.",
      date: "Dec 5, 2025",
    },
    {
      id: 2,
      title: "Why Students Should Learn React Early",
      desc: "React is becoming the default skill for frontend engineers worldwide.",
      date: "Nov 28, 2025",
    },
    {
      id: 3,
      title: "Top 10 Skills Companies Want in Freshers",
      desc: "A detailed breakdown of essential tech skills needed for your first job.",
      date: "Nov 10, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">News & Insights</h1>
        <p className="text-slate-400 mb-8">Latest updates, articles, and industry insights.</p>

        <div className="grid gap-6">
          {articles.map((a) => (
            <Link
              key={a.id}
              to={`/blog/${a.id}`}
              className="block p-5 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-purple-400 transition shadow-md"
            >
              <h2 className="text-xl font-semibold mb-1">{a.title}</h2>
              <p className="text-slate-300 text-sm mb-2">{a.desc}</p>
              <p className="text-slate-500 text-xs">{a.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


