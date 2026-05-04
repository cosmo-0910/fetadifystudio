const services = [
  {
    icon: "💻",
    title: "Custom Software Development",
    description:
      "We build tailor-made software solutions that streamline your operations, integrate with your existing systems, and scale with your business growth.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description:
      "Native iOS, Android, and cross-platform apps designed for performance, usability, and real-world impact — from concept to App Store launch.",
  },
  {
    icon: "🌐",
    title: "Website Development",
    description:
      "High-performance websites and web applications built with modern frameworks, optimized for speed, SEO, and conversion.",
  },
  {
    icon: "🎨",
    title: "Product Design (UI/UX)",
    description:
      "User-centric design that turns complex workflows into intuitive, beautiful interfaces. From wireframes to pixel-perfect prototypes.",
  },
  {
    icon: "🥽",
    title: "AR/VR Development",
    description:
      "Immersive augmented and virtual reality experiences for training, product visualization, gaming, and interactive storytelling.",
  },
  {
    icon: "🤖",
    title: "AI & Emerging Tech",
    description:
      "Smart automation, machine learning models, and AI-powered features that give your product a competitive edge in the market.",
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