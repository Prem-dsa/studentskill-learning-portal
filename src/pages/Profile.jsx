import React from "react";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";
import { CalendarClock, Mail, User2 } from "lucide-react";
import courses from "../data/courses.json";

export default function Profile() {
  const { user, getCompletedCount, completedLessons, isLessonCompleted } =
    useAuth();

  const joined = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : "Not available";

  const completedCourseDetails = courses.filter((course) =>
    isLessonCompleted(course.id)
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex">
          <Sidebar />

          <main className="flex-1 pt-28 pb-10 md:pl-6">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-purple-500 via-indigo-500 to-sky-500 flex items-center justify-center text-2xl font-semibold text-white shadow-[0_20px_60px_rgba(88,28,135,1)]">
                    {user?.name?.[0]?.toUpperCase() || "S"}
                  </div>
                  <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-emerald-400 border-2 border-slate-950 text-[10px] flex items-center justify-center">
                    ●
                  </span>
                </div>

                <div>
                  <h1 className="text-lg font-semibold tracking-tight">
                    {user?.name || "Student"}
                  </h1>
                  <p className="text-xs text-slate-300">
                    Frontend Learner • SkillSphere Portal
                  </p>
                </div>
              </div>
            </div>

            {/* Layout */}
            <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
              {/* LEFT COLUMN */}
              <section className="space-y-4">
                {/* Profile details */}
                <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                    Profile Details
                  </p>

                  <div className="space-y-3 text-xs text-slate-200">
                    <div className="flex items-center gap-2">
                      <User2 className="h-4 w-4 text-slate-400" />
                      <span>{user?.name || "PREM KRISHNAN"}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <span>{user?.email || "premk@gmail.com.com"}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarClock className="h-4 w-4 text-slate-400" />
                      <span>Joined: {joined}</span>
                    </div>
                  </div>
                </div>

                {/* Completed lessons list */}
                <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                    Completed Lessons
                  </p>

                  {completedCourseDetails.length === 0 ? (
                    <p className="text-xs text-slate-400">
                      You haven’t completed any lessons yet. Start from the
                      dashboard to see your progress here.
                    </p>
                  ) : (
                    <ul className="text-xs text-slate-200 space-y-1">
                      {completedCourseDetails.map((course) => (
                        <li key={course.id}>✔ {course.title}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>

              {/* RIGHT COLUMN – STATS CARD */}
              <section className="space-y-4">
                <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-sky-500 p-[1px] shadow-[0_25px_80px_rgba(59,7,100,1)]">
                  <div className="rounded-[1.4rem] bg-slate-950/95 p-4 text-xs text-slate-200">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                      Learning Stats
                    </p>

                    <p className="text-sm font-semibold mb-1">
                      {getCompletedCount()} Lessons Completed
                    </p>
                    <p className="text-[11px] text-slate-300 mb-3">
                      Keep learning! Each completed lesson moves you closer to
                      your next badge.
                    </p>

                    {/* simple progress bar (just visual for now) */}
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-1">
                      <div className="h-full w-1/2 bg-gradient-to-r from-purple-400 to-sky-400 rounded-full" />
                    </div>

                    <p className="text-[11px] text-slate-400">
                      50% towards your next milestone streak.
                    </p>
                  </div>
                </div>

                {/* Small info card */}
                <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-4 text-xs text-slate-300">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                    Tip
                  </p>
                  <p>
                    Try to complete at least one lesson every day to build a
                    strong learning streak and improve your skills steadily.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

