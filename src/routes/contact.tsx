import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Fetadify Agency" },
      { name: "description", content: "Get in touch with Fetadify for custom software development, mobile apps, AR/VR, and product design services." },
      { property: "og:title", content: "Contact Us — Fetadify Agency" },
      { property: "og:description", content: "Get in touch with Fetadify for custom software, mobile apps, AR/VR, and product design." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Contact</p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">Let&apos;s Talk About Your Project</h1>
            <p className="mt-4 text-muted-foreground">
              Reach out via email at{" "}
              <a href="mailto:hello@fetadify.com" className="text-primary hover:underline">hello@fetadify.com</a>{" "}
              or send us a message below.
            </p>
          </div>

          {submitted ? (
            <div className="glass glow-border rounded-2xl p-12 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-foreground">Message Received!</h2>
              <p className="mt-2 text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="glass glow-border rounded-2xl p-8 md:p-12 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                <select className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Mobile App Development</option>
                  <option>Custom Software</option>
                  <option>Website Development</option>
                  <option>Product Design (UI/UX)</option>
                  <option>AR/VR Development</option>
                  <option>AI & Emerging Tech</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button type="submit" variant="hero" size="xl" className="w-full">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}