const testimonials = [
  {
    quote:
      "AiOne cut our AI spend by 40% while improving response quality across tasks.",
    author: "Sofia M.",
    role: "CTO, Seed Startup",
  },
  {
    quote:
      "One interface for GPT, Claude and Gemini—my team ships faster than ever.",
    author: "Devon R.",
    role: "Engineering Lead",
  },
  {
    quote:
      "The dashboards and token limits make budgeting predictable.",
    author: "Priya K.",
    role: "Founder",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Reviews</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border bg-card p-6 shadow-sm">
              <blockquote className="text-sm text-foreground/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-foreground/60">{t.author} · {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
