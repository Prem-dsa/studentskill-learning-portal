import React from "react";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";
import courses from "../data/courses.json";
import CourseCard from "../components/CourseCard";
import { Search, Flame, Trophy } from "lucide-react";

export default function Dashboard() {
  const { user, getCompletedCount } = useAuth();

  const totalCourses = courses.length;
  const completed = getCompletedCount();
  const progress = totalCourses ? Math.round((completed / totalCourses) * 100) : 0;

  const categories = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex">

          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 pt-28 pb-10 md:pl-6">
            
            {/* Welcome Section */}
            <section className="mb-6">
              <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-sky-500 p-[1px] shadow-[0_25px_80px_rgba(59,7,100,1)]">
                <div className="rounded-[1.4rem] bg-slate-950/90 px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  
                  <div>
                    <p className="text-xs text-slate-300 mb-1">Welcome back,</p>
                    <h2 className="text-lg font-semibold tracking-tight">
                      {user?.name || "Student"} 👋
                    </h2>
                    <p className="text-xs text-slate-300 mt-1 max-w-md">
                      Ready to continue learning? Explore and improve your skills.
                    </p>
                  </div>

                  <div className="flex gap-3">

                    {/* Progress Card */}
                    <div className="rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3 text-xs flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <Flame className="h-4 w-4 text-amber-400" />
                        <span className="text-[10px] tracking-[0.2em] text-slate-400">Progress</span>
                      </div>
                      <p className="text-sm font-semibold">{progress}%</p>
                      <p className="text-[11px] text-slate-400">
                        {completed} of {totalCourses} lessons
                      </p>
                    </div>

                    {/* Badge Card */}
                    <div className="rounded-2xl bg-slate-900/80 border border-white/10 px-4 py-3 text-xs flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <Trophy className="h-4 w-4 text-yellow-300" />
                        <span className="text-[10px] tracking-[0.2em] text-slate-400">Badge</span>
                      </div>
                      <p className="text-sm font-semibold">Rising Developer</p>
                      <p className="text-[11px] text-slate-400">
                        Complete 3 more lessons to level up.
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </section>

            {/* Search + Categories */}
            <section className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">

              {/* Search bar */}
              <div className="relative w-full md:max-w-sm">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  placeholder="Search for a course..."
                  className="w-full rounded-2xl bg-slate-900/80 border border-white/10 pl-9 pr-3 py-2 text-xs placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 text-[11px]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-slate-200 hover:bg-purple-600/40 hover:border-purple-400 transition"
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </section>

            {/* Courses Grid */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-100">
                  Continue Learning
                </h3>
                <p className="text-[11px] text-slate-400">
                  {totalCourses} curated lessons
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
