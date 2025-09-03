const useCases = [
  { title: "Student Productivity", desc: "Summaries, study guides, and research helpers.", emoji: "🎓" },
  { title: "Coding & Debugging", desc: "Generate code, fix bugs, and review PRs.", emoji: "💻" },
  { title: "Trading & Automation", desc: "Signals, scripts, and workflow bots.", emoji: "📈" },
  { title: "Content Creation", desc: "Blogs, ads, video scripts, and more.", emoji: "✍️" },
];

export default function UseCases() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Use cases</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u) => (
            <div key={u.title} className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-all">
              <div className="text-3xl" aria-hidden>{u.emoji}</div>
              <h3 className="mt-4 text-lg font-semibold">{u.title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
