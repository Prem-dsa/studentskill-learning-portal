export default function HowWeWork() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6 md:px-16 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h1>

      <p className="text-slate-300 text-lg max-w-3xl">
        We believe learning should be intuitive, enjoyable, and practical.
        Our workflow is designed to help students grow steadily and confidently.
      </p>

      <div className="mt-12 space-y-8">
        <div>
          <h3 className="text-xl font-bold">📘 1. Structured Lesson Plans</h3>
          <p className="text-slate-300 text-sm">
            All courses follow a level-based structure—beginner to advanced.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">🛠 2. Project-Based Learning</h3>
          <p className="text-slate-300 text-sm">
            Build real-world projects and build portfolios to showcase your skills.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">📊 3. Progress Tracking</h3>
          <p className="text-slate-300 text-sm">
            Every lesson you complete updates your personal dashboard instantly.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">🎯 4. Career Guidance</h3>
          <p className="text-slate-300 text-sm">
            Personalized learning path, resume tips, mock interviews, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
