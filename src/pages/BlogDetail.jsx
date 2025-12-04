import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p>Article not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6 md:px-16 max-w-3xl mx-auto">
      <Link
        to="/blog"
        className="text-[11px] text-slate-400 hover:text-white mb-4 inline-block"
      >
        ← Back to all insights
      </Link>

      <p className="text-[11px] text-slate-400">
        {post.date} • {post.readTime}
      </p>
      <h1 className="text-3xl md:text-4xl font-bold mt-1 mb-4">{post.title}</h1>

      <p className="text-sm text-slate-300 whitespace-pre-line">
        {post.content}
      </p>
    </div>
  );
}
