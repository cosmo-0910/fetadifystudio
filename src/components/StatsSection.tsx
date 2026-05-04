const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Excellence" },
  { value: "30+", label: "Expert Engineers" },
  { value: "15+", label: "Industries Served" },
];

export function StatsSection() {
  return (
    <section className="relative z-10 -mt-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="glass glow-border rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}