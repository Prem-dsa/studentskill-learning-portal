import React from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/blog" className="text-slate-400 text-sm hover:text-white">
          ← Back to News
        </Link>

        <h1 className="text-3xl font-bold mt-4 mb-4">Blog Article #{id}</h1>

        <p className="text-slate-300 text-lg leading-relaxed">
          This is the detailed article content. You can replace this with actual blog text,
          images, insights, and more. Each article is dynamically loaded using the ID.
        </p>
      </div>
    </div>
  );
}

