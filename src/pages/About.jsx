import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Target, Rocket, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-purple-400">SkillSphere</span>
          </h1>
          <p className="text-slate-300 mt-3 max-w-3xl mx-auto">
            Empowering students to grow, learn, and unlock new opportunities through 
            real-world skills, curated lessons, and industry-ready knowledge.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid md:grid-cols-2 gap-10"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              At SkillSphere, we believe that anyone can build a strong future with 
              real-world skills. Our mission is to close the gap between education 
              and practical industry knowledge by providing structured, bite-sized, 
              high-quality lessons.
            </p>
            <p className="text-slate-300 mt-4 text-sm leading-relaxed">
              We focus on HTML, CSS, JavaScript, and React—skills that are the 
              backbone of modern web development. Students get interactive learning, 
              hands-on practice, and progress tracking inside a beautiful dashboard.
            </p>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 shadow-xl"
          >
            <Rocket className="w-10 h-10 text-purple-400 mb-3" />
            <h3 className="text-xl font-semibold mb-2">A Future-Ready Platform</h3>
            <p className="text-slate-300 text-sm">
              Designed to help students become job-ready through a modern 
              user experience and structured roadmap.
            </p>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <h2 className="text-2xl font-semibold mt-20 mb-6 text-center">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Value 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 text-center"
          >
            <Users className="mx-auto h-8 w-8 text-blue-400 mb-3" />
            <h4 className="font-semibold mb-1">Student First</h4>
            <p className="text-slate-300 text-sm">
              Everything we build focuses on student growth and confidence.
            </p>
          </motion.div>

          {/* Value 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 text-center"
          >
            <Target className="mx-auto h-8 w-8 text-pink-400 mb-3" />
            <h4 className="font-semibold mb-1">Quality Learning</h4>
            <p className="text-slate-300 text-sm">
              Curated lessons designed to match industry standards.
            </p>
          </motion.div>

          {/* Value 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 text-center"
          >
            <Award className="mx-auto h-8 w-8 text-green-400 mb-3" />
            <h4 className="font-semibold mb-1">Future Ready</h4>
            <p className="text-slate-300 text-sm">
              Preparing students for real-world tech careers with modern tools.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm leading-relaxed">
            We aim to create a vibrant learning community where every student, no matter 
            their background, can access high-quality education, track progress, 
            and build skills that open new career opportunities.  
          </p>
        </div>
      </div>
    </div>
  );
}
