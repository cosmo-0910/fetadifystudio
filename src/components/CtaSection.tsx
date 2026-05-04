import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/message/fetadify";

export function CtaSection() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-4xl text-center glass glow-border rounded-3xl p-12 md:p-16">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Ready to Build Something{" "}
          <span className="text-gradient">Amazing</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Let&apos;s discuss your project. Whether it&apos;s a mobile app, web platform, or immersive AR/VR experience — we&apos;re here to make it happen.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="xl">Chat on WhatsApp</Button>
          </a>
          <a href="mailto:hello@fetadify.com">
            <Button variant="outline_glow" size="xl">Email Us</Button>
          </a>
        </div>
      </div>
    </section>
  );
}