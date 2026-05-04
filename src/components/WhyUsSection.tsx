const reasons = [
  {
    title: "End-to-End Execution",
    description:
      "From strategy and design to development and deployment — we handle the entire lifecycle so you can focus on your business.",
  },
  {
    title: "Transparent Process",
    description:
      "Agile sprints, clear milestones, and regular updates keep you in control with full visibility into progress and budget.",
  },
  {
    title: "Quality-First Approach",
    description:
      "Rigorous QA testing, code reviews, and performance optimization ensure your product is reliable from day one.",
  },
  {
    title: "Scalable Architecture",
    description:
      "We build with growth in mind — modern tech stacks, clean code, and infrastructure designed to handle your next million users.",
  },
];

export function WhyUsSection() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Why Fetadify
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            The Right Partner for Your Next Project
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((r, i) => (
            <div key={r.title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary font-bold text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}