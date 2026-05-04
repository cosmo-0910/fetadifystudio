const steps = [
  { title: "Discovery & Strategy", desc: "We dive deep into your goals, audience, and requirements to define a clear roadmap." },
  { title: "Wireframing & Design", desc: "Interactive prototypes and polished UI/UX designs before a single line of code." },
  { title: "Development", desc: "Agile sprints with regular demos — you see progress every week, not just at the end." },
  { title: "QA & Testing", desc: "Comprehensive testing across devices, browsers, and edge cases for a bulletproof launch." },
  { title: "Deployment", desc: "Smooth release to production with CI/CD pipelines, monitoring, and rollback plans." },
  { title: "Support & Growth", desc: "Post-launch maintenance, analytics, and iterative improvements to keep you ahead." },
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