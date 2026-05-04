import portfolioApp from "@/assets/portfolio-app.jpg";
import portfolioAr from "@/assets/portfolio-ar.jpg";
import portfolioWeb from "@/assets/portfolio-web.jpg";
import portfolioEnterprise from "@/assets/portfolio-enterprise.jpg";

const projects = [
  {
    image: portfolioApp,
    title: "FinTrack Mobile App",
    category: "Mobile App Development",
    description:
      "A comprehensive fintech dashboard app for iOS and Android with real-time analytics, portfolio tracking, and AI-powered insights.",
  },
  {
    image: portfolioAr,
    title: "HomeVision AR",
    category: "AR/VR Development",
    description:
      "Augmented reality furniture placement app that lets users visualize products in their real living space before purchasing.",
  },
  {
    image: portfolioWeb,
    title: "StyleHub E-Commerce",
    category: "Website Development",
    description:
      "A high-performance e-commerce platform for a fashion brand with 50K+ products, advanced filtering, and seamless checkout.",
  },
  {
    image: portfolioEnterprise,
    title: "DataPulse Analytics",
    category: "Enterprise Software",
    description:
      "Enterprise-grade analytics dashboard processing millions of data points daily with real-time KPI monitoring and reporting.",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Our Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A selection of projects that showcase our expertise across mobile, web, AR/VR, and enterprise solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass glow-border rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={960}
                  height={640}
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-primary/90 text-primary-foreground px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}