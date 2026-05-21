const blogPosts = [
  {
    date: "Apr 28, 2026",
    category: "Mobile Development",
    title: "React Native vs Flutter in 2026: Which Should You Choose?",
    excerpt:
      "A detailed comparison of the two leading cross-platform frameworks, covering performance, developer experience, and ecosystem maturity.",
    readTime: "8 min read",
  },
  {
    date: "Apr 16, 2026",
    category: "AR/VR",
    title: "How AR Is Transforming Retail: 5 Real-World Use Cases",
    excerpt:
      "From virtual try-ons to in-store navigation, augmented reality is reshaping the way consumers shop and interact with products.",
    readTime: "6 min read",
  },
  {
    date: "Mar 30, 2026",
    category: "Product Design",
    title: "The Design System Approach: Building Consistent Digital Products",
    excerpt:
      "Why every product team needs a design system and how to build one that scales across platforms and teams.",
    readTime: "7 min read",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 px-6 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Insights
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            From Our Blog
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Insights, tutorials, and thought leadership from our team of engineers and designers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="glass glow-border rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 group flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                <span className="bg-primary/15 text-primary px-2 py-0.5 rounded-full font-semibold">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                <span className="text-sm font-semibold text-primary group-hover:underline">
                  Read More →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}