import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowRight, Clock } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    location: "Remote",
    type: "Internship",
    desc: "Work with React, Tailwind and modern UI trends to help build beautiful interfaces.",
  },
  {
    id: 2,
    title: "Content & Curriculum Writer",
    location: "Coimbatore / Remote",
    type: "Part-time",
    desc: "Create structured learning materials for HTML, CSS, JavaScript and React.",
  },
  {
    id: 3,
    title: "Video Editor (Education)",
    location: "Chennai",
    type: "Full-time",
    desc: "Edit high-quality learning videos and motion content for our learning platform.",
  },
];

export default function Careers() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Careers at <span className="text-purple-400">SkillSphere</span>
          </h1>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Join our mission to empower students with real-world skills.
            Build modern learning tools, and shape the future of education.
          </p>
        </motion.div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/20 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="h-6 w-6 text-purple-400" />
                <h2 className="text-xl font-semibold">{job.title}</h2>
              </div>

              <p className="text-slate-300 text-sm mb-4">{job.desc}</p>

              <div className="text-sm text-slate-400 space-y-1 mb-5">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {job.location}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {job.type}
                </p>
              </div>

              <a
                href={`mailto:careers@skillsphere.com?subject=Application: ${job.title}`}
                className="flex items-center justify-between text-sm text-purple-400 hover:text-purple-300 transition"
              >
                Apply now
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-2xl font-semibold mb-3">No suitable role?</h2>
          <p className="text-slate-400 mb-5">
            We're always open to talented people who want to contribute.
          </p>

          <a
            href="mailto:careers@skillsphere.com"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:opacity-90 transition"
          >
            Send us your resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}

