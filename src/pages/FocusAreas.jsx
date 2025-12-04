export default function FocusAreas() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6 md:px-16 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Focus Areas</h1>

      <p className="text-slate-300 text-lg max-w-3xl">
        We offer guided learning paths that cover the most essential skills in tech today.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-white/10 border border-white/10">
          <h3 className="text-xl font-bold mb-3">💡 Frontend Development</h3>
          <p className="text-sm text-slate-300">
            Learn HTML, CSS, JavaScript, and React to build modern web apps.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/10 border border-white/10">
          <h3 className="text-xl font-bold mb-3">⚙ Backend Development</h3>
          <p className="text-sm text-slate-300">
            Learn APIs, Node.js, databases, authentication, and more.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/10 border border-white/10">
          <h3 className="text-xl font-bold mb-3">📱 Responsive UI</h3>
          <p className="text-sm text-slate-300">
            Create mobile-friendly, scalable UI with Tailwind and modern UX patterns.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/10 border border-white/10">
          <h3 className="text-xl font-bold mb-3">🎯 Career Track</h3>
          <p className="text-sm text-slate-300">
            Learn resumes, GitHub workflow, interview questions, and career tips.
          </p>
        </div>
      </div>
    </div>
  );
}
