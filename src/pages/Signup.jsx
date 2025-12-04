import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Sparkles } from "lucide-react";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(form);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background glows */}
      <div className="absolute -top-40 -right-32 h-72 w-72 rounded-full bg-purple-500/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-indigo-500/40 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-md w-full bg-slate-900/70 border border-white/10 rounded-3xl shadow-[0_25px_80px_rgba(15,23,42,1)] p-7 backdrop-blur-xl">
          
          {/* Header */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg shadow-purple-500/60">
              <Sparkles className="h-5 w-5" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">
              Create Your Account
            </h1>
            <p className="text-xs text-slate-300 text-center">
              Join the SkillSphere learning platform and start your journey!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="space-y-1">
              <label className="text-xs text-slate-300">Full Name</label>
              <input
                type="text"
                required
                className="w-full rounded-2xl bg-slate-900/80 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
                value={form.name}
                onChange={(e) =>
                  setForm(prev => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-2xl bg-slate-900/80 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
                value={form.email}
                onChange={(e) =>
                  setForm(prev => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300">Password</label>
              <input
                type="password"
                required
                className="w-full rounded-2xl bg-slate-900/80 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
                value={form.password}
                onChange={(e) =>
                  setForm(prev => ({ ...prev, password: e.target.value }))
                }
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full mt-2 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 py-2.5 text-sm font-medium shadow-lg shadow-purple-500/60 hover:shadow-purple-500/80 hover:-translate-y-[1px] active:scale-[0.99] transition-all"
            >
              Sign Up
            </button>

          </form>

          {/* Footer */}
          <p className="mt-4 text-[11px] text-center text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-300 hover:text-purple-200 underline underline-offset-4"
            >
              Login here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
