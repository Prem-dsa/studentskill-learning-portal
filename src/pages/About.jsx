export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6 md:px-16 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About SkillSphere</h1>

      <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
        SkillSphere is a modern learning platform designed to help students become
        industry-ready developers. We combine interactive lessons, hands-on
        projects, and guided learning paths to help you grow from beginner to
        professional—at your own pace.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl">
          <h3 className="text-xl font-semibold mb-2">🚀 Our Mission</h3>
          <p className="text-slate-300 text-sm">
            To bridge the gap between education and real-world skills by providing
            high-quality, accessible, and practical learning experiences.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl">
          <h3 className="text-xl font-semibold mb-2">📚 Our Approach</h3>
          <p className="text-slate-300 text-sm">
            We focus on project-based learning, curated video lessons, and
            milestone tracking so students can stay consistent and motivated.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl">
          <h3 className="text-xl font-semibold mb-2">🌍 Our Vision</h3>
          <p className="text-slate-300 text-sm">
            To empower millions of learners to build strong tech careers with
            confidence, creativity, and expertise.
          </p>
        </div>
      </div>
    </div>
  );
}
