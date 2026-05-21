const services = [
  {
    icon: "🤖",
    title: "Emerging Tech & AI",
    description:
      "Smart automation, machine learning models, neural networks, natural language processing, and AI integrations that drive operational intelligence and product innovation.",
  },
  {
    icon: "⛓️",
    title: "Blockchain & Web3",
    description:
      "Decentralized applications (dApps), smart contracts, custom tokens, DeFi platforms, and Web3 solutions built to establish digital trust and scale cryptographically.",
  },
  {
    icon: "🥽",
    title: "Immersive VR/AR/MR",
    description:
      "Virtual and augmented reality simulations, spatial computing, interactive games, digital twins, and industrial IoT solutions built for engagement and training.",
  },
  {
    icon: "💻",
    title: "Custom Software & SaaS",
    description:
      "High-performance custom software, enterprise platforms, scalable SaaS architectures, SAP integrations, and mobile apps designed to run business operations seamlessly.",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description:
      "Resilient cloud architecture (AWS, GCP, Azure), automated CI/CD pipelines, Kubernetes container orchestration, DevOps engineering, and data engineering.",
  },
  {
    icon: "🎨",
    title: "UI/UX & Web3 Marketing",
    description:
      "User-centric product designs, interactive prototypes, customer experience (CX) frameworks, and conversion-optimized digital marketing campaigns.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Development Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Comprehensive digital solutions designed to elevate your business capabilities and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass glow-border rounded-xl p-8 hover:scale-[1.02] transition-transform duration-300 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}