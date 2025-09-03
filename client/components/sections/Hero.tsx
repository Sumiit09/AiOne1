import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] blur-3xl"/>
      </div>
      <div className="container mx-auto py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance">All Your AI Agents in One Place</h1>
        <p className="mt-5 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">Affordable access to the world’s best AI models in one unified platform.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button className="h-12 px-8 text-base bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] text-white shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all">Get Started</Button>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-foreground/60">
          <span className="rounded-full border px-3 py-1 bg-white/60 backdrop-blur">OpenAI GPT</span>
          <span className="rounded-full border px-3 py-1 bg-white/60 backdrop-blur">Claude</span>
          <span className="rounded-full border px-3 py-1 bg-white/60 backdrop-blur">Gemini</span>
          <span className="rounded-full border px-3 py-1 bg-white/60 backdrop-blur">Mistral</span>
        </div>
      </div>
    </section>
  );
}
