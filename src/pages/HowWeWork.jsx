import React from "react";
import { CheckCircle, Users, PlayCircle, Rocket, Timer } from "lucide-react";

export default function Work() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-purple-400">We Work</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Our learning model is designed to help students build real-world skills 
            through structured content, guided practice, and hands-on experience.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Step 1 */}
          <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 
            shadow-[0_20px_60px_rgba(90,0,200,0.2)] hover:scale-[1.03] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-7 w-7 text-purple-400" />
              <h3 className="text-xl font-semibold">Expert-Led Lessons</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Learn directly from curated instructors with high-quality videos, 
              clear explanations, and real-time examples.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 
            shadow-[0_20px_60px_rgba(0,150,255,0.25)] hover:scale-[1.03] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <PlayCircle className="h-7 w-7 text-sky-400" />
              <h3 className="text-xl font-semibold">Interactive Learning</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Watch, practice, and explore concepts with interactive exercises, 
              hands-on demos, and guided coding challenges.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 
            shadow-[0_20px_60px_rgba(0,255,131,0.25)] hover:scale-[1.03] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-7 w-7 text-emerald-400" />
              <h3 className="text-xl font-semibold">Track Your Progress</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your dashboard shows completed lessons, skill progress, and 
              recommended next steps to keep improving.
            </p>
          </div>

          {/* Step 4 */}
          <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 
            shadow-[0_20px_60px_rgba(209,0,255,0.25)] hover:scale-[1.03] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Timer className="h-7 w-7 text-pink-400" />
              <h3 className="text-xl font-semibold">Learn at Your Own Pace</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              No strict schedules. You choose when to learn and how much time to
              dedicate, based on your routine.
            </p>
          </div>

          {/* Step 5 */}
          <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 
            shadow-[0_20px_60px_rgba(255,128,0,0.25)] hover:scale-[1.03] transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="h-7 w-7 text-orange-300" />
              <h3 className="text-xl font-semibold">Apply Real Skills</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Build portfolio projects and gain real-world experience that
              helps you stand out in interviews.
            </p>
          </div>

        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-semibold mb-3">
            Ready to start your journey?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Join thousands of learners upgrading their skills with SkillSphere.
          </p>

          <a
            href="/signup"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-sky-500 
              text-white font-medium shadow-lg hover:opacity-90 transition"
          >
            Get Started for Free
          </a>
        </div>

      </div>
    </div>
  );
}
