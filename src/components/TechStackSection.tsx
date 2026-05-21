import { useState } from "react";

const techCategories = [
  {
    label: "AI & Emerging Tech",
    description: "Intelligent automation, machine learning networks, LLM custom integration, and NLP agents.",
    techs: [
      { name: "OpenAI API", icon: "🤖" },
      { name: "TensorFlow", icon: "🍊" },
      { name: "PyTorch", icon: "🔥" },
      { name: "LangChain", icon: "🦜" },
      { name: "Hugging Face", icon: "🤗" },
      { name: "Python", icon: "🐍" },
    ],
  },
  {
    label: "Blockchain & Web3",
    description: "Decentralized architecture, smart contracts, Web3 portals, and cryptographic systems.",
    techs: [
      { name: "Solidity", icon: "💎" },
      { name: "Rust", icon: "🦀" },
      { name: "Web3.js", icon: "⛓️" },
      { name: "Ethers.js", icon: "⚡" },
      { name: "Hardhat", icon: "👷" },
      { name: "IPFS", icon: "📦" },
    ],
  },
  {
    label: "Frontend",
    description: "Highly interactive, conversion-optimized, and ultra-fast user interfaces.",
    techs: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "🟦" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Vue.js", icon: "🟢" },
      { name: "WebAssembly", icon: "⚙️" },
    ],
  },
  {
    label: "Backend",
    description: "Secure databases, APIs, server architectures, and integration middleware.",
    techs: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Go", icon: "🐹" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "GraphQL", icon: "🕸️" },
      { name: ".NET Core", icon: "🟣" },
    ],
  },
  {
    label: "Mobile",
    description: "Sleek and responsive native iOS/Android apps and cross-platform designs.",
    techs: [
      { name: "React Native", icon: "⚛️" },
      { name: "Flutter", icon: "🦋" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🤖" },
      { name: "Dart", icon: "🎯" },
    ],
  },
  {
    label: "Cloud & DevOps",
    description: "Automated deployment pipelines, scalable cloud compute, and container hosting.",
    techs: [
      { name: "AWS", icon: "☁️" },
      { name: "GCP", icon: "🌐" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "☸️" },
      { name: "Terraform", icon: "🛠️" },
      { name: "GitHub Actions", icon: "🚀" },
    ],
  },
];

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Technology
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Our Interactive Tech Stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            We use best-in-class technologies to build reliable, high-performance, and future-proof digital applications.
          </p>
        </div>

        {/* Tab triggers */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techCategories.map((cat, idx) => (
            <button
              key={cat.label}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.03]"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="glass glow-border rounded-2xl p-8 md:p-12 animate-fade-up">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {techCategories[activeTab].label}
            </h3>
            <p className="text-muted-foreground text-sm">
              {techCategories[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techCategories[activeTab].techs.map((tech) => (
              <div
                key={tech.name}
                className="bg-background/50 hover:bg-background rounded-xl p-4 flex flex-col items-center justify-center border border-border/50 transition-all duration-300 hover:scale-[1.05] group"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </span>
                <span className="text-xs font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}