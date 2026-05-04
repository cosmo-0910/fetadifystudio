const techCategories = [
  {
    label: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin", "Dart"],
  },
  {
    label: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Python", "Go", "PostgreSQL", ".NET"],
  },
  {
    label: "Immersive",
    techs: ["Unity", "Unreal Engine", "ARKit", "ARCore", "WebXR"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["AWS", "GCP", "Docker", "CI/CD", "Terraform"],
  },
];

export function TechStackSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Technology
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Tech Stack
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {techCategories.map((cat) => (
            <div key={cat.label} className="glass glow-border rounded-xl p-6">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <ul className="space-y-2">
                {cat.techs.map((t) => (
                  <li key={t} className="text-sm text-muted-foreground">{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}