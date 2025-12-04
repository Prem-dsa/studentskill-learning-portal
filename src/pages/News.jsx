import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Newspaper, Lightbulb, TrendingUp } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Why Real-World Skills Matter in 2025",
    excerpt:
      "Discover why companies now prioritize hands-on web development skills over traditional degrees.",
    date: "Nov 12, 2025",
    category: "Trends",
    icon: <TrendingUp className="h-5 w-5 text-purple-400" />,
  },
  {
    id: 2,
    title: "How Students Learn Faster With Micro-Learning",
    excerpt:
      "Small, focused lessons help students absorb skills faster and retain more information.",
    date: "Oct 29, 2025",
    category: "Learning",
    icon: <Lightbulb className="h-5 w-5 text-yellow-400" />,
  },
  {
    id: 3,
    title: "The Rise of Practical Tech Education in India",
    excerpt:
      "Why millions of students are switching to practical, skills-based learning platforms.",
    date: "Sep 15, 2025",
    category: "Education",
    icon: <Newspaper className="h-5 w-5 text-blue-400" />,
  },
];

export default function News() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          News & <span className="text-purple-400">Insights</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-slate-300 mt-3 mb-14"
        >
          Stay updated with the latest trends, insights, and innovations in student learning.
        </motion.p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-purple-500/20 transition"
            >
              <div className="flex items-center gap-2 mb-3">
                {post.icon}
                <span className="text-xs text-slate-400">{post.category}</span>
              </div>

              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-slate-300 text-sm mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{post.date}</span>

                <a
                  href={`/news/${post.id}`}
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition"
                >
                  Read more
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
