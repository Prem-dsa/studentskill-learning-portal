import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, UserCircle } from "lucide-react";

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/courses", label: "Courses", icon: BookOpen },
  { to: "/profile", label: "Profile", icon: UserCircle },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-60 shrink-0 pt-28 pl-5">
      <div className="h-[calc(100vh-7rem)] rounded-3xl bg-slate-900/70 border border-white/10 shadow-[0_20px_60px_rgba(15,23,42,0.95)] px-4 py-6 flex flex-col overflow-hidden">
        
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-4 px-2">
          Menu
        </p>

        <nav className="space-y-1.5 flex-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                [
                  "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition-all",
                  "border border-transparent hover:border-white/10 hover:bg-white/5",
                  isActive
                    ? "bg-gradient-to-r from-purple-600/80 to-indigo-500/80 text-white shadow-lg shadow-purple-500/40"
                    : "text-slate-300",
                ].join(" ")
              }
            >
              <div className="h-8 w-8 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Icon className="h-4 w-4" />
              </div>
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Streak card */}
        <div className="mt-auto rounded-2xl bg-gradient-to-br from-purple-600/90 via-indigo-500/80 to-sky-500/80 p-4 text-xs text-white shadow-inner shadow-black/40">
          <p className="font-semibold text-[11px] uppercase tracking-widest text-white/80">
            Learning Streak
          </p>
          <p className="text-xs mt-1 mb-3 text-white/90">
            Keep your daily learning streak and unlock badges.
          </p>

          <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full w-2/3 bg-white rounded-full" />
          </div>

          <p className="mt-1.5 text-[11px] text-white/90">5-day streak 🔥</p>
        </div>

      </div>
    </aside>
  );
}
