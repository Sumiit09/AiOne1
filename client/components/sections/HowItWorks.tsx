import { Sparkles, MessageSquare, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Sparkles, title: "Choose AI", desc: "Pick from GPT, Claude, Gemini, Mistral and more." },
  { icon: MessageSquare, title: "Ask Anything", desc: "Chat, generate, analyze, automate—your way." },
  { icon: CheckCircle2, title: "Get Results", desc: "Fast, accurate answers with unified billing." },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center">How it works</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <s.icon className="h-6 w-6 text-[hsl(var(--brand-end))]" />
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
