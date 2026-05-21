import { createFileRoute } from '@tanstack/react-router'
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServicesSection } from "@/components/ServicesSection";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Fetadify Agency" },
      { name: "description", content: "Explore our comprehensive service offerings across AI, Web3, Immersive Tech, Custom Software, Cloud, and Design." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <ServicesSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

