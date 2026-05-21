const steps = [
  { title: "Discovery & Alignment", desc: "We conduct deep discovery sessions to align on business objectives, user personas, and technical requirements, creating a solid roadmap." },
  { title: "Technical Strategy", desc: "Architecting the technical ecosystem, outlining APIs, database schemas, cloud infrastructure, security guidelines, and sprint timelines." },
  { title: "High-Fidelity Design", desc: "Designing user journeys, custom design systems, and fully interactive prototypes so you can experience the product before coding begins." },
  { title: "Modular Build", desc: "Executing agile, test-driven development cycles with weekly demos. We construct components modularly for maximum quality and speed." },
  { title: "Launch & Scale", desc: "Deploying via automated pipelines, setting up analytics, and continuously scaling infrastructure to support growth and active monitoring." },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            How We Build Your Product
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 ring-4 ring-background" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="glass glow-border rounded-xl p-6">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}