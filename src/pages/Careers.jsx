import React from "react";

const roles = [
  {
    title: "Campus Ambassador",
    type: "Part-time • Remote",
    desc: "Help students discover SkillSphere in your college and organize learning events.",
  },
  {
    title: "Frontend Mentor (React)",
    type: "Internship • Remote",
    desc: "Guide learners through React projects, review code, and share best practices.",
  },
  {
    title: "Content Creator - Web Dev",
    type: "Freelance • Remote",
    desc: "Create short explainers, cheatsheets, and beginner-friendly coding resources.",
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6 md:px-16 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Careers</h1>
      <p className="text-slate-300 text-sm md:text-base mb-8 max-w-3xl">
        Join the SkillSphere mission. We’re building a learning platform that
        makes development accessible for students everywhere.
      </p>

      <div className="space-y-4">
        {roles.map((role) => (
          <div
            key={role.title}
            className="rounded-2xl bg-slate-900/80 border border-white/10 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h3 className="text-lg font-semibold">{role.title}</h3>
              <p className="text-xs text-slate-400 mb-2">{role.type}</p>
              <p className="text-sm text-slate-300 max-w-xl">{role.desc}</p>
            </div>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-sm font-medium hover:opacity-90 transition">
              Apply now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
