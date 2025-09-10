import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import SolarSystem from "@/components/three/SolarSystem";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] blur-3xl" />
      </div>
      <div className="container mx-auto py-12 md:py-20 text-center">
        <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
          AiOne — All-in-One AI. For
          <span className="block">Everyone</span>
        </h1>
        <SolarSystem />
        <p className="mt-3 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
          Access GPT‑4, Claude, Gemini, and more — all from one powerful, affordable, and legal platform.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3">
          <a href="/login" className="inline-flex"><Button className="h-12 px-8 text-base bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] text-white shadow-lg hover:shadow-xl hover:translate-y-[-1px] transition-all">Get Started</Button></a>
          <Button variant="outline" className="h-11 px-6 border-white/20 text-white hover:bg-white/10">Request a demo</Button>
        </div>
        <motion.div
          className="mt-10 md:mt-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-balance"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.55 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            One Space. Endless Possibilities.
          </motion.h2>
          <motion.h3
            className="mt-3 text-base md:text-lg text-white/70 max-w-2xl mx-auto font-normal"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
            viewport={{ once: false, amount: 0.6 }}
          >
            Simplify Your Creation
          </motion.h3>
        </motion.div>
      </div>
    </section>
  );
}
