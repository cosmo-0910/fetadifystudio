import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import portfolioApp from "@/assets/portfolio-app.jpg";
import portfolioAr from "@/assets/portfolio-ar.jpg";
import portfolioWeb from "@/assets/portfolio-web.jpg";
import portfolioEnterprise from "@/assets/portfolio-enterprise.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Our Portfolio — Fetadify Agency" },
      { name: "description", content: "Explore our featured case studies in AI, Web3, Immersive Technology, SaaS, and custom software development." },
    ],
  }),
  component: PortfolioPage,
});

const categories = ["All", "AI & Emerging Tech", "Blockchain & Web3", "Immersive VR/AR", "SaaS & Enterprise"];

const projects = [
  {
    image: portfolioApp,
    title: "FinTrack Mobile App",
    category: "SaaS & Enterprise",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    description: "A comprehensive fintech platform for wealth managers with real-time portfolio analytics and AI insights."
  },
  {
    image: portfolioAr,
    title: "HomeVision AR",
    category: "Immersive VR/AR",
    tech: ["Unity", "ARKit", "ARCore"],
    description: "Augmented reality application allowing users to overlay furniture models into their living spaces with realistic light mapping."
  },
  {
    image: portfolioWeb,
    title: "StyleHub E-Commerce",
    category: "SaaS & Enterprise",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    description: "High-performance online fashion storefront housing over 50,000 active products, custom checkout flow, and analytics."
  },
  {
    image: portfolioEnterprise,
    title: "DataPulse Analytics",
    category: "SaaS & Enterprise",
    tech: ["Go", "Python", "Kubernetes", "AWS"],
    description: "High-throughput data processing engine handling real-time IoT events and generating reporting aggregates."
  },
  {
    image: portfolioEnterprise,
    title: "CryptoVault DeFi Portal",
    category: "Blockchain & Web3",
    tech: ["Solidity", "Next.js", "Hardhat", "Ethers.js"],
    description: "A trustless lending and borrowing smart contract suite with automated liquidation pools and governance vaults."
  },
  {
    image: portfolioApp,
    title: "AgentNexus AI Platform",
    category: "AI & Emerging Tech",
    tech: ["Python", "LangChain", "OpenAI", "PyTorch"],
    description: "Autonomous multi-agent network optimizing customer support queues and predicting user churn patterns."
  }
];

function PortfolioPage() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filteredProjects = selectedCat === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCat);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Work</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Case Studies</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
              We design and engineer bespoke software solutions that move industries forward. Explore our work across emerging and established paradigms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 ${
                  selectedCat === cat
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.03]"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="group glass glow-border rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden h-48 bg-secondary/25">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/95 text-primary-foreground px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="border-t border-border/40 pt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-secondary/50 text-[10px] text-muted-foreground rounded font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
