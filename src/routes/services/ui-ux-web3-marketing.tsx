import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const Route = createFileRoute('/services/ui-ux-web3-marketing')({
  head: () => ({
    meta: [
      { title: 'UI/UX & Web3 Marketing — Fetadify Agency' },
      { name: 'description', content: 'User‑centric product designs, interactive prototypes, CX frameworks, and conversion‑optimized digital marketing for Web3 projects.' },
    ],
  }),
  component: UiUxWeb3MarketingPage,
});

function UiUxWeb3MarketingPage() {
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
            <div className="text-6xl mb-4">🎨</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">UI/UX & Web3 Marketing</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50" />
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            User‑centric product designs, interactive prototypes, customer experience (CX) frameworks, and conversion‑optimized digital marketing campaigns for Web3 projects.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li><strong className="text-foreground">User Experience (UX) Design</strong>: Research, wireframing, prototyping, and usability testing.</li>
            <li><strong className="text-foreground">User Interface (UI) Design</strong>: High‑fidelity visual systems, component libraries, and design systems.</li>
            <li><strong className="text-foreground">Product Design</strong>: End‑to‑end design from concept to launch, including market research.</li>
            <li><strong className="text-foreground">Web3 UI/UX</strong>: Wallet integration, transaction flows, and blockchain‑aware patterns.</li>
            <li><strong className="text-foreground">Digital Marketing</strong>: SEO, content, paid ads, and automation for lead generation.</li>
            <li><strong className="text-foreground">Web3 Marketing</strong>: Community building, tokenomics communication, and growth hacking.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technologies We Use</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li>Figma, Adobe XD, Sketch (Design)</li>
            <li>Framer, Webflow, Principle (Prototyping)</li>
            <li>React, Vue, Next.js (Frontend)</li>
            <li>Tailwind CSS, CSS‑in‑JS, Styled‑Components</li>
            <li>Google Analytics, Mixpanel, Amplitude (Analytics)</li>
            <li>HubSpot, Segment, Intercom (Marketing Automation)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li><strong className="text-foreground">User‑Centric</strong>: Decisions driven by research and data.</li>
            <li><strong className="text-foreground">Accessible</strong>: WCAG 2.1 AA compliance.</li>
            <li><strong className="text-foreground">Responsive</strong>: Beautiful on all devices.</li>
            <li><strong className="text-foreground">Performance‑Focused</strong>: Fast, efficient interactions.</li>
            <li><strong className="text-foreground">Inclusive</strong>: Designs for diverse audiences.</li>
          </ul>

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-4">Ready to Elevate Your Brand?</h3>
            <p className="text-muted-foreground mb-6">
              Let’s discuss how we can craft beautiful experiences and drive growth for your Web3 product.
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
