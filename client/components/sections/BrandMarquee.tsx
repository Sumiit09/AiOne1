import { Hexagon, Orbit, Infinity, Sun, Sparkles, BrainCircuit, Bot, Atom } from "lucide-react";

const brands = [
  { name: "Meta", icon: Hexagon },
  { name: "Perplexity", icon: Sparkles },
  { name: "ChatGPT", icon: Infinity },
  { name: "Claude", icon: Sun },
  { name: "Gemini", icon: Orbit },
  { name: "Mistral", icon: BrainCircuit },
  { name: "Cohere", icon: Bot },
  { name: "Llama", icon: Atom },
];

export default function BrandMarquee() {
  const items = [...brands, ...brands];
  return (
    <section className="relative border-y bg-[#0B0F1A] text-slate-300">
      <div className="container mx-auto py-6">
        <div className="relative overflow-hidden">
          <div className="flex w-max items-center gap-10 animate-marquee motion-reduce:animate-none [animation-duration:26s] hover:[animation-play-state:paused]">
            {items.map((b, i) => (
              <div key={i} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <b.icon className="h-5 w-5 text-slate-400" />
                <span className="text-sm font-medium">{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
