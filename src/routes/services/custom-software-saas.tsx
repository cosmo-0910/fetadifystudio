import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const Route = createFileRoute('/services/custom-software-saas')({
  head: () => ({
    meta: [
      { title: 'Custom Software & SaaS — Fetadify Agency' },
      { name: 'description', content: 'High‑performance custom software, enterprise platforms, scalable SaaS architectures, and mobile apps.' },
    ],
  }),
  component: CustomSoftwareSaaSPage,
});

function CustomSoftwareSaaSPage() {
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
            <div className="text-6xl mb-4">💻</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Software & SaaS</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50" />
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            High‑performance custom software, enterprise platforms, scalable SaaS architectures, SAP integrations, and mobile apps designed to run business operations seamlessly.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li><strong className="text-foreground">Enterprise Software Development</strong>: Robust, scalable applications tailored to business processes.</li>
            <li><strong className="text-foreground">SaaS Platform Development</strong>: Multi‑tenant architecture, billing systems, and rapid go‑to‑market.</li>
            <li><strong className="text-foreground">Mobile App Development</strong>: Native iOS/Android or cross‑platform React Native/Flutter.</li>
            <li><strong className="text-foreground">Legacy Modernization</strong>: API‑first, microservices migration, database optimization.</li>
            <li><strong className="text-foreground">API‑First Architecture</strong>: Secure, versioned APIs for integration and extensibility.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technologies We Use</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li>React, Next.js, Vue.js (Frontend)</li>
            <li>Node.js, Python, Go (Backend)</li>
            <li>PostgreSQL, MongoDB, Redis (Data)</li>
            <li>Docker, Kubernetes (Deployment)</li>
            <li>AWS, GCP, Azure (Cloud)</li>
            <li>React Native, Flutter (Mobile)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li><strong className="text-foreground">Scalability</strong>: Systems that handle millions of users.</li>
            <li><strong className="text-foreground">Performance</strong>: Sub‑100ms response times.</li>
            <li><strong className="text-foreground">Security</strong>: Enterprise‑grade encryption and compliance.</li>
            <li><strong className="text-foreground">Maintainability</strong>: Clean code, comprehensive testing.</li>
            <li><strong className="text-foreground">UX Excellence</strong>: Intuitive, beautiful interfaces.</li>
          </ul>

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-4">Ready to Build Your Software Solution?</h3>
            <p className="text-muted-foreground mb-6">
              Let’s discuss how we can turn your vision into a high‑performing product.
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
