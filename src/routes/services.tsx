import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Cpu, Database, Layout, Link2, Sparkles, Smartphone } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Fetadify Agency" },
      { name: "description", content: "Explore our premium technology development services including AI, Blockchain, VR/AR, Custom Software, Cloud, and Product Design." },
    ],
  }),
  component: ServicesPage,
});

const serviceDetails = [
  {
    id: "ai",
    icon: <Cpu className="w-12 h-12 text-primary" />,
    title: "Emerging Tech & Artificial Intelligence",
    tagline: "Drive business efficiency with custom AI agents and machine learning networks.",
    bullets: [
      "Custom LLM fine-tuning & integration (OpenAI, Claude, Llama)",
      "Agentic workflows & autonomous business reasoning bots",
      "Predictive analytics & intelligent data pipeline builds",
      "Natural Language Processing (NLP) & Sentiment Analysis",
      "Computer Vision & real-time visual recognition algorithms"
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "LangChain", "HuggingFace"]
  },
  {
    id: "web3",
    icon: <Link2 className="w-12 h-12 text-purple-400" />,
    title: "Blockchain, Cryptography & Web3",
    tagline: "Build decentralized trust protocols and tokenize physical & digital assets.",
    bullets: [
      "Secure Smart Contract development & full audits (Solidity, Rust)",
      "Decentralized Applications (dApps) & Web3 integration layers",
      "Custom tokenomics design & ERC-20 / ERC-721 / ERC-1155 smart contracts",
      "DeFi portals, liquidity pools, and Decentralized Exchange (DEX) interfaces",
      "Decentralized identity systems & cryptographic storage solutions"
    ],
    tech: ["Solidity", "Rust", "Web3.js", "Ethers.js", "Hardhat", "IPFS"]
  },
  {
    id: "immersive",
    icon: <Sparkles className="w-12 h-12 text-cyan-400" />,
    title: "Immersive Tech, VR/AR/MR & IoT",
    tagline: "Create spatial compute experiences and connect smart physical devices.",
    bullets: [
      "High-fidelity Virtual Reality (VR) simulations for enterprise training",
      "Augmented Reality (AR) product visualizers & overlay apps",
      "Mixed Reality (MR) spatial computing applications (Apple Vision Pro, Quest)",
      "Interactive 3D configurators & web-based WebXR graphics",
      "Internet of Things (IoT) hardware firmware and data collection hubs"
    ],
    tech: ["Unity 3D", "Unreal Engine", "ARKit", "ARCore", "WebXR", "C++"]
  },
  {
    id: "software",
    icon: <Smartphone className="w-12 h-12 text-emerald-400" />,
    title: "Custom Software & SaaS Development",
    tagline: "Design and code scalable software to manage and grow your enterprise.",
    bullets: [
      "Custom SaaS architectures designed for high concurrency and scale",
      "Enterprise Application Development & ERP/CRM system integrations",
      "Native iOS & Android mobile applications and responsive Web Portals",
      "Custom SAP systems orchestration and third-party API configurations",
      "Modern relational and non-relational database design"
    ],
    tech: ["Next.js", "React Native", "TypeScript", "Node.js", "Go", "PostgreSQL"]
  },
  {
    id: "devops",
    icon: <Database className="w-12 h-12 text-blue-400" />,
    title: "Cloud Infrastructure & DevOps",
    tagline: "Optimize cloud deployments and secure continuous integration pipelines.",
    bullets: [
      "Automated CI/CD deployment pipelines (GitHub Actions, GitLab CI)",
      "Containerization & orchestration (Docker, Kubernetes/EKS/GKE)",
      "Infrastructure as Code (IaC) configuration (Terraform, CloudFormation)",
      "Highly available multi-region cloud setups on AWS, GCP, and Azure",
      "Real-time cluster monitoring, logs auditing, and automatic alerts"
    ],
    tech: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Nginx"]
  },
  {
    id: "design",
    icon: <Layout className="w-12 h-12 text-rose-400" />,
    title: "UI/UX Design & Product Strategy",
    tagline: "Formulate beautiful user journeys and conversion-focused design systems.",
    bullets: [
      "User-centric interaction architecture & complete client journeys",
      "Interactive wireframes, high-fidelity prototypes, and design specs",
      "Custom reusable typography, grid, and layout design systems",
      "Comprehensive usability testing & analytics optimization audits",
      "Digital marketing strategy, landing page conversions, and SEO engineering"
    ],
    tech: ["Figma", "Adobe CC", "Tailwind CSS", "Framer Motion", "Google Analytics"]
  }
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Core Expertise</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Premium Services</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
              We engineer cutting-edge digital transformation platforms. From advanced AI workflows to complex Web3 systems, we build what your enterprise needs to scale.
            </p>
          </div>

          {/* Grid list of services */}
          <div className="space-y-16">
            {serviceDetails.map((service, idx) => (
              <div 
                key={service.id}
                className={`glass glow-border rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start transition-all duration-300 hover:scale-[1.01] ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left block */}
                <div className="lg:w-1/2 space-y-6">
                  <div className="p-3 bg-secondary/30 rounded-xl inline-block">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                  <p className="text-primary/90 font-medium text-sm md:text-base leading-relaxed">{service.tagline}</p>
                  
                  {/* Bullets */}
                  <ul className="space-y-3 pt-2">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right block */}
                <div className="lg:w-1/2 w-full space-y-8 flex flex-col justify-between self-stretch">
                  <div className="bg-background/40 border border-border/50 rounded-xl p-6 md:p-8 space-y-4">
                    <h3 className="text-sm font-bold tracking-wider uppercase text-foreground">Technology Stack Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((t) => (
                        <span 
                          key={t}
                          className="px-3 py-1.5 bg-secondary text-muted-foreground rounded-lg text-xs font-semibold hover:text-foreground border border-border/30 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 lg:pt-0">
                    <Link to="/contact">
                      <Button variant="hero" size="lg" className="w-full sm:w-auto">
                        Inquire About This Service <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
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
