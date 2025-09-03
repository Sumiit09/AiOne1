import { Button } from "@/components/ui/button";
import { Sparkles, Orbit, Bug, Hexagon } from "lucide-react";

const chips = [
  { icon: Sparkles, label: "DeepSeek" },
  { icon: Orbit, label: "Gemini" },
  { icon: Bug, label: "Grok" },
  { icon: Hexagon, label: "Meta" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] blur-3xl" />
      </div>
      <div className="container mx-auto py-16 md:py-24 text-center">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-3 opacity-80">
          {chips.map((c) => (
            <div key={c.label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              <c.icon className="h-3.5 w-3.5 text-white/70" />
              <span className="text-white/80">{c.label}</span>
            </div>
          ))}
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
          AiOne — All-in-One AI. For
          <span className="block">Everyone</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
          Access GPT‑4, Claude, Gemini, and more — all from one powerful, affordable, and legal platform.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button className="h-12 px-8 text-base bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] text-white shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
