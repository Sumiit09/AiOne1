import { motion } from "framer-motion";
import SolarSystem from "@/components/three/SolarSystem";

export default function SecondaryIntro() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="container mx-auto pt-4 md:pt-6 pb-16 md:pb-20 text-center">
        <motion.div
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
        <div className="mt-4 md:mt-6">
          <SolarSystem />
        </div>
      </div>
    </section>
  );
}
