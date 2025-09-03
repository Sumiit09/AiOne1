import { Puzzle, Coins, Gauge, BarChart3, Shuffle } from "lucide-react";

const features = [
  { icon: Puzzle, title: "API-level integration", desc: "One API for all major models and providers." },
  { icon: Coins, title: "Cost‑effective usage", desc: "Smart routing and pricing for affordable access." },
  { icon: Gauge, title: "Token-based limits", desc: "Fair usage with transparent quotas per plan." },
  { icon: BarChart3, title: "Productivity dashboard", desc: "Track usage, savings, and performance." },
  { icon: Shuffle, title: "Cross‑model comparison", desc: "Benchmark outputs to pick the best model." },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-transparent to-muted/40">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Features</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-all">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] text-white shadow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
