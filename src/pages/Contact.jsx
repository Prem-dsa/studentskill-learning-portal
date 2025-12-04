import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6 md:px-16 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact us</h1>
      <p className="text-slate-300 text-sm md:text-base mb-8 max-w-xl">
        Have questions, feedback, or collaboration ideas? We’d love to hear
        from you. Fill out the form and our team will get back to you.
      </p>

      <div className="grid md:grid-cols-[1.5fr,1fr] gap-8">
        {/* Form */}
        <form className="space-y-4 rounded-2xl bg-slate-900/80 border border-white/10 p-6">
          <div>
            <label className="text-xs text-slate-300 block mb-1">Name</label>
            <input
              type="text"
              className="w-full rounded-xl bg-slate-950/80 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="text-xs text-slate-300 block mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-xl bg-slate-950/80 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-xs text-slate-300 block mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full rounded-xl bg-slate-950/80 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 py-2.5 text-sm font-medium shadow-lg hover:opacity-90 transition"
          >
            Send message
          </button>
        </form>

        {/* Info */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-5 text-sm text-slate-300">
            <p className="font-semibold text-white mb-1">
              Support & queries
            </p>
            <p>support@skillsphere.dev</p>
            <p className="mt-3 text-xs text-slate-400">
              We typically reply within 24 hours on weekdays.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-5 text-sm text-slate-300">
            <p className="font-semibold text-white mb-1">
              Collaboration & campus programs
            </p>
            <p>partners@skillsphere.dev</p>
            <p className="mt-3 text-xs text-slate-400">
              Reach out if you’d like to run this portal in your institution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
