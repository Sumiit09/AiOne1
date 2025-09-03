import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$9/mo",
    blurb: "For individuals exploring AI.",
    features: ["Unified chat", "Basic models", "1k tokens/day"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    blurb: "For power users and devs.",
    features: ["All models", "Usage dashboard", "Priority routing", "50k tokens/day"],
    highlight: true,
  },
  {
    name: "Team",
    price: "$99/mo",
    blurb: "For startups and teams.",
    features: ["Seats & roles", "API access", "Analytics", "SLA"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Simple, transparent pricing</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border bg-card p-6 shadow-sm transition-all ${t.highlight?"ring-2 ring-[hsl(var(--brand-end))] scale-[1.02]":"hover:shadow-md"}`}>
              <div className="text-sm text-foreground/60">{t.name}</div>
              <div className="mt-2 text-3xl font-extrabold">{t.price}</div>
              <p className="mt-1 text-sm text-foreground/70">{t.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-[hsl(var(--brand-end))]"/>{f}</li>
                ))}
              </ul>
              <button className="mt-6 w-full h-11 rounded-md bg-gradient-to-r from-[hsl(var(--brand-start))] to-[hsl(var(--brand-end))] text-white font-medium shadow hover:shadow-lg transition-shadow">Choose {t.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
