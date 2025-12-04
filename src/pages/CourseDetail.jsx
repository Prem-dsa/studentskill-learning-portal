import React from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import courses from "../data/courses.json";
import { useAuth } from "../context/AuthContext";
import { ArrowLeft, CheckCircle2, PlayCircle } from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams();
  const courseId = Number(id);

  const course = courses.find((c) => c.id === courseId);
  const { markLessonCompleted, isLessonCompleted } = useAuth();

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p>Course not found.</p>
      </div>
    );
  }

  const completed = isLessonCompleted(courseId);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex">
          <Sidebar />

          <main className="flex-1 pt-28 pb-10 md:pl-6">

            {/* Back Button */}
            <div className="mb-4 flex items-center">
              <Link
                to="/courses"
                className="inline-flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white"
              >
                <ArrowLeft className="h-3 w-3" />
                Back to courses
              </Link>
            </div>

            <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-5">

              {/* LEFT: VIDEO + DESCRIPTION */}
              <section className="space-y-4">

                {/* Video */}
                <div className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900/80 shadow-[0_25px_80px_rgba(15,23,42,1)]">
                  <div className="aspect-video">
                    <iframe
                      src={course.video}
                      title={course.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-4">
                  <h1 className="text-base font-semibold mb-1">{course.title}</h1>
                  <p className="text-xs text-slate-300 mb-3">
                    {course.description}
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Category: <span className="text-slate-200">{course.category}</span> •
                    Level: <span className="text-slate-200">{course.level}</span> •
                    Duration: <span className="text-slate-200">{course.duration}</span>
                  </p>
                </div>

              </section>

              {/* RIGHT: SIDE PANEL */}
              <aside className="space-y-4">

                {/* Status */}
                <div className="rounded-3xl bg-gradient-to-br from-purple-600 via-indigo-600 to-sky-500 p-[1px] shadow-[0_25px_80px_rgba(59,7,100,1)]">
                  <div className="rounded-[1.4rem] bg-slate-950/95 p-4">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                      Lesson Status
                    </p>

                    <div className="flex items-center gap-2 mb-3">
                      {completed ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <PlayCircle className="h-4 w-4 text-sky-300" />
                      )}
                      <p className="text-xs text-slate-100">
                        {completed
                          ? "You completed this lesson."
                          : "Watch the video and mark as completed."}
                      </p>
                    </div>

                    <button
                      onClick={() => markLessonCompleted(courseId)}
                      className={`w-full rounded-2xl py-2.5 text-xs font-medium flex items-center justify-center gap-2 shadow-lg transition-all ${
                        completed
                          ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400"
                          : "bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-500 text-white hover:shadow-purple-500/60"
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      {completed ? "Completed" : "Mark as Completed"}
                    </button>
                  </div>
                </div>

                {/* What you’ll learn */}
                <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-4 text-xs text-slate-300">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-2">
                    What you will learn
                  </p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Core concepts behind this topic</li>
                    <li>Reusable practical examples</li>
                    <li>Industry best practices</li>
                  </ul>
                </div>

              </aside>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
