import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const Route = createFileRoute('/services/cloud-devops')({
  head: () => ({
    meta: [
      { title: 'Cloud & DevOps — Fetadify Agency' },
      { name: 'description', content: 'Resilient cloud architecture, CI/CD pipelines, Kubernetes orchestration, and data engineering services.' },
    ],
  }),
  component: CloudDevOpsPage,
});

function CloudDevOpsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-grow pt-24 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>

          <div className="mb-12">
            <div className="text-6xl mb-4">☁️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud & DevOps</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50" />
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            Resilient cloud architecture (AWS, GCP, Azure), automated CI/CD pipelines, Kubernetes orchestration, DevOps engineering, and data engineering.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li><strong className="text-foreground">Cloud Architecture Design</strong>: Scalable, cost‑optimized infrastructure.</li>
            <li><strong className="text-foreground">CI/CD Pipeline Implementation</strong>: Fast, reliable automated releases.</li>
            <li><strong className="text-foreground">Kubernetes Orchestration</strong>: Deploy and manage containers at scale.</li>
            <li><strong className="text-foreground">DevOps Engineering</strong>: IaC, monitoring, logging, incident response.</li>
            <li><strong className="text-foreground">Data Engineering</strong>: ETL/ELT pipelines, warehousing, real‑time streaming.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technologies We Use</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li><strong className="text-foreground">Cloud</strong>: AWS, Google Cloud, Azure</li>
            <li><strong className="text-foreground">Containers</strong>: Docker, Kubernetes, ECS</li>
            <li><strong className="text-foreground">CI/CD</strong>: GitHub Actions, GitLab CI, Jenkins</li>
            <li><strong className="text-foreground">IaC</strong>: Terraform, CloudFormation</li>
            <li><strong className="text-foreground">Monitoring</strong>: Prometheus, DataDog, New Relic</li>
            <li><strong className="text-foreground">Data Tools</strong>: Kafka, Spark, dbt, Airflow</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li><strong className="text-foreground">Speed</strong>: Deploy changes in minutes.</li>
            <li><strong className="text-foreground">Reliability</strong>: 99.99%+ uptime with automated failover.</li>
            <li><strong className="text-foreground">Cost Efficiency</strong>: Optimize cloud spend by 30‑50%.</li>
            <li><strong className="text-foreground">Security</strong>: Automated compliance, vulnerability scanning.</li>
            <li><strong className="text-foreground">Developer Experience</strong>: Self‑service infrastructure.</li>
          </ul>

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Operations?</h3>
            <p className="text-muted-foreground mb-6">
              Let’s discuss how we can accelerate your cloud journey and DevOps practices.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
