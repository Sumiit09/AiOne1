import { Brain, Orbit, Sparkles, BookOpen, Stars } from "lucide-react";

export default function MultiModels() {
  const items = [
    { icon: Stars, title: "GPT‑4o", desc: "Ideal for outlining and idea generation." },
    { icon: Sparkles, title: "Claude Sonnet 4", desc: "Great for simplifying complex topics." },
    { icon: Orbit, title: "Gemini 2.5 Pro", desc: "Perfect for debugging code." },
    { icon: BookOpen, title: "DeepSeek", desc: "Works well for storytelling." },
    { icon: Brain, title: "Perplexity", desc: "Excels at research summaries." },
  ];

  return (
    <section className="mt-12 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="aspect-video w-full rounded-xl border border-white/10 bg-white/5" />
        <div>
          <p className="text-sm text-[hsl(var(--brand-end))] font-semibold">Multiple AI Models in a Single Chat</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight text-balance">
            Start With GPT‑4o, Clarify With Claude, Optimize With DeepSeek
          </h2>
          <p className="mt-2 text-white/70">Without losing any context.</p>
          <ul className="mt-6 space-y-3">
            {items.map((it, i) => (
              <li key={i} className="flex items-start gap-3">
                <it.icon className="mt-1 h-5 w-5 text-white/80" />
                <div>
                  <p className="font-semibold">{it.title}</p>
                  <p className="text-sm text-white/70">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
