import React from "react";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/CourseCard";
import courses from "../data/courses.json";

export default function Courses() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex">
          <Sidebar />

          <main className="flex-1 pt-28 pb-10 md:pl-6">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-lg font-semibold tracking-tight">All Courses</h1>
              <p className="text-[11px] text-slate-400">{courses.length} lessons</p>
            </div>

            {/* Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
