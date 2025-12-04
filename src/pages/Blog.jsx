import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6 md:px-16 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">News & insights</h1>
      <p className="text-slate-300 text-sm md:text-base mb-8 max-w-3xl">
        Articles, updates, and learning tips for students building a career in tech.
      </p>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block rounded-2xl bg-slate-900/80 border border-white/10 p-5 hover:border-purple-400/70 hover:-translate-y-[2px] transition"
          >
            <p className="text-[11px] text-slate-400 mb-1">
              {post.date} • {post.readTime}
            </p>
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-slate-300 line-clamp-2">
              {post.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
