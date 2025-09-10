import { Button } from "@/components/ui/button";


import HeroOrbs from "@/components/three/HeroOrbs";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent text-white">
      <HeroOrbs />
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] blur-3xl" />
      </div>
      <div className="container mx-auto py-16 md:py-24 text-center">
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
          AiOne — All-in-One AI. For
          <span className="block">Everyone</span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
          Access GPT‑4, Claude, Gemini, and more — all from one powerful, affordable, and legal platform.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <Button className="h-12 px-8 text-base bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] text-white shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all">Get Started</Button>
          <Button variant="outline" className="h-11 px-6 border-white/20 text-white hover:bg-white/10">Request a demo</Button>
        </div>
      </div>
    </section>
  );
}
