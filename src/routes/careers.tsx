import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Join Our Team — Fetadify Agency" },
      { name: "description", content: "Build the future of AI, Web3, and Custom Software. Browse our open positions and apply today." },
    ],
  }),
  component: CareersPage,
});

const jobs = [
  {
    title: "Senior AI Engineer",
    type: "Full-Time",
    location: "Remote / US / UK",
    team: "Artificial Intelligence",
    description: "Lead the design and fine-tuning of large language models, agentic workflows, and customized natural language processing pipelines for our enterprise clients.",
    requirements: ["4+ years experience in Python & Machine Learning frameworks", "Familiarity with LangChain, LlamaIndex, HuggingFace, PyTorch", "Hands-on experience deploying commercial AI applications"]
  },
  {
    title: "Smart Contract Architect",
    type: "Full-Time",
    location: "Remote",
    team: "Blockchain & Web3",
    description: "Design and implement high-efficiency smart contracts in Solidity and Rust. Orchestrate dApp client integrations, token standards, and leading security checks.",
    requirements: ["3+ years writing commercial production smart contracts", "Deep understanding of ERC standards, EVM networks, and layer-2 setups", "Strong understanding of web3 security protocols and auditing frameworks"]
  },
  {
    title: "Lead UI/UX Product Designer",
    type: "Full-Time",
    location: "Remote / Hybrid (London)",
    team: "Product & Design",
    description: "Own the creation of complex digital user experiences. Formulate bespoke design systems, high-fidelity interactive mockups, and client style guides.",
    requirements: ["5+ years experience in UI/UX designing for complex SaaS or Web3 products", "Exquisite portfolio showcasing interactive user flow systems and typography systems", "Proficiency in Figma, design patterns, and conversion analysis"]
  },
  {
    title: "Senior Full-Stack Developer",
    type: "Full-Time",
    location: "Remote / US",
    team: "Software Engineering",
    description: "Build robust backend architectures, APIs, and lightning-fast frontend dashboards using React, Next.js, Node.js, and multi-region database systems.",
    requirements: ["5+ years development in TypeScript, React, Next.js, and Node.js", "Comfortable setting up Docker, Kubernetes, AWS resources, and Postgres", "Strong focus on performance, accessibility, SEO, and developer velocity"]
  }
];

function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Careers</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Build the Future of Tech</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
              We are a team of cross-functional engineers, designers, and strategic thinkers building next-generation digital transformation tools. Work from anywhere, learn from the best.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left/Middle: Job Listings */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-bold mb-6">Open Opportunities ({jobs.length})</h2>
              
              {jobs.map((job, idx) => (
                <div key={idx} className="glass glow-border rounded-xl p-6 md:p-8 space-y-4 hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-secondary/80 text-muted-foreground border border-border/40 px-2.5 py-1 rounded">
                        {job.team}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{job.title}</h3>
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {job.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Required Expertise:</h4>
                    <ul className="space-y-1.5">
                      {job.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setSelectedJob(job.title);
                        document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Apply Now <ArrowRight className="w-3 h-3 ml-1.5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Application Form */}
            <div id="apply-form" className="glass glow-border rounded-xl p-6 md:p-8 space-y-6">
              <h2 className="text-xl font-bold">Apply for a Position</h2>
              
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="text-5xl">🎉</div>
                  <h3 className="text-lg font-bold">Application Received!</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Thank you for applying. Our talent acquisition team will review your application and contact you within 5 business days.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      required 
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required 
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="jane@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Desired Position
                    </label>
                    <select 
                      value={selectedJob}
                      onChange={(e) => setSelectedJob(e.target.value)}
                      required 
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">Select a job...</option>
                      <option value="Senior AI Engineer">Senior AI Engineer</option>
                      <option value="Smart Contract Architect">Smart Contract Architect</option>
                      <option value="Lead UI/UX Product Designer">Lead UI/UX Product Designer</option>
                      <option value="Senior Full-Stack Developer">Senior Full-Stack Developer</option>
                      <option value="General Interest">Other / General Interest</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Link to Resume/LinkedIn
                    </label>
                    <input 
                      type="url" 
                      required 
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Portfolio/GitHub Link (Optional)
                    </label>
                    <input 
                      type="url" 
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="https://github.com/username"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Briefly describe why you are a good fit
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Tell us about your background..."
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full">
                    Submit Application <Briefcase className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
