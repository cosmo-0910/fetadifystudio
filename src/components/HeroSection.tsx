import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/message/fetadify";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-primary mb-4">
          Custom Software Development Agency
        </p>
        <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight"
          style={{ animationDelay: "0.1s" }}>
          We Build Digital{" "}
          <span className="text-gradient">Products</span>{" "}
          That Matter
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          style={{ animationDelay: "0.2s" }}>
          From mobile apps and enterprise software to AR/VR experiences and product design — we turn your vision into scalable, high-performance digital solutions.
        </p>
        <div className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "0.3s" }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">Get Expert Guidance</Button>
          </a>
          <a href="#services">
            <Button variant="outline_glow" size="xl">Explore Services</Button>
          </a>
        </div>
      </div>
    </section>
  );
}