import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, PlayCircle } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function CourseCard({ course }) {
  const { isLessonCompleted } = useAuth();
  const completed = isLessonCompleted(course.id);

  return (
    <div className="group relative rounded-3xl bg-slate-900/80 border border-white/10 overflow-hidden 
    shadow-[0_20px_60px_rgba(15,23,42,1)] hover:shadow-[0_25px_70px_rgba(88,28,135,0.9)] 
    transition-all duration-300 hover:-translate-y-1">

      {/* Gradient hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-teal-400/10 to-transparent 
      opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Content */}
      <div className="p-4 pb-5 flex flex-col gap-3 relative z-10">

        {/* Level + Completed label */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 
          px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {course.level}
          </span>

          {completed && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400">
              <CheckCircle2 className="h-3 w-3" /> Completed
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-white line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-slate-300/90 line-clamp-3">
          {course.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-[11px] text-slate-400">
            {course.duration} • {course.category}
          </p>

          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-1.5 text-[11px] font-medium rounded-full 
            bg-white/10 px-3 py-1.5 text-slate-100 hover:bg-white/20 active:scale-95 transition-all"
          >
            <PlayCircle className="h-3.5 w-3.5" />
            View Lesson
          </Link>
        </div>
      </div>
    </div>
  );
}

