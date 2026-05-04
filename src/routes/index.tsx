import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TechStackSection } from "@/components/TechStackSection";
import { CtaSection } from "@/components/CtaSection";
import { SiteFooter } from "@/components/SiteFooter";
import { PortfolioSection } from "@/components/PortfolioSection";
import { BlogSection } from "@/components/BlogSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fetadify Agency — Custom Software & App Development" },
      { name: "description", content: "Fetadify builds custom software, mobile apps, websites, AR/VR experiences, and product designs that drive real business results." },
      { property: "og:title", content: "Fetadify Agency — Custom Software & App Development" },
      { property: "og:description", content: "Custom software, mobile apps, AR/VR, product design, and website development agency." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyUsSection />
      <ProcessSection />
      <TechStackSection />
      <BlogSection />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
