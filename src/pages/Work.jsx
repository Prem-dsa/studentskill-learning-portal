import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Video, GraduationCap, Rocket } from "lucide-react";

export default function Work() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          How We <span className="text-purple-400">Work</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-slate-300 max-w-2xl mx-auto mb-16"
        >
          A simple, powerful system designed to help students learn real-world skills
          quickly and effectively.
        </motion.p>

        {/* Steps Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition"
          >
            <ClipboardCheck className="h-10 w-10 text-purple-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Choose Your Path</h2>
            <p className="text-slate-300 text-sm">
              Start by selecting a learning track — HTML, CSS, JavaScript, React or all.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition"
          >
            <Video className="h-10 w-10 text-indigo-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Watch Curated Lessons</h2>
            <p className="text-slate-300 text-sm">
              Learn through high-quality, beginner-friendly video lessons.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition"
          >
            <GraduationCap className="h-10 w-10 text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Track Your Progress</h2>
            <p className="text-slate-300 text-sm">
              Mark lessons as completed and watch your learning streak grow daily.
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="p-6 bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition"
          >
            <Rocket className="h-10 w-10 text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Become Job-Ready</h2>
            <p className="text-slate-300 text-sm">
              Gain practical skills and boost your confidence through structured learning.
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Ready to start your journey?
          </h3>

          <a
            href="/dashboard"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg hover:opacity-90"
          >
            Go to Dashboard
          </a>
        </motion.div>

      </div>
    </div>
  );
}
