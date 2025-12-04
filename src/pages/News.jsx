export default function News() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 px-6 md:px-16 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">News & Insights</h1>

      <div className="space-y-8">
        <div className="p-6 rounded-xl bg-white/10 border border-white/10">
          <h3 className="text-xl font-semibold mb-2">🔮 Future of Web Development</h3>
          <p className="text-slate-300 text-sm">
            The latest trends shaping the world of software development in 2025.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-white/10 border border-white/10">
          <h3 className="text-xl font-semibold mb-2">📈 Why React still leads UI Development?</h3>
          <p className="text-slate-300 text-sm">
            React continues to dominate due to its flexibility and ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}
