import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, MessageSquare, Phone, MapPin, Sparkles } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Fetadify Agency" },
      { name: "description", content: "Use our interactive project builder to get a free budget and timeline estimation for your AI, Web3, or custom software project." },
    ],
  }),
  component: ContactPage,
});

const serviceOptions = [
  { id: "ai", label: "AI & Emerging Tech", icon: "🤖" },
  { id: "web3", label: "Blockchain & Web3", icon: "⛓️" },
  { id: "immersive", label: "Immersive VR/AR", icon: "🥽" },
  { id: "software", label: "Custom Software & SaaS", icon: "💻" },
  { id: "devops", label: "Cloud & DevOps Support", icon: "☁️" },
  { id: "design", label: "UI/UX & Brand Design", icon: "🎨" }
];

const budgetOptions = [
  { label: "Under $10,000", value: "<10k" },
  { label: "$10,000 – $25,000", value: "10k-25k" },
  { label: "$25,000 – $50,000", value: "25k-50k" },
  { label: "$50,000 – $100,000", value: "50k-100k" },
  { label: "$100,000+", value: "100k+" }
];

const timelineOptions = [
  { label: "Urgent (Under 1 Month)", value: "<1m" },
  { label: "Standard (1 – 3 Months)", value: "1-3m" },
  { label: "Flexible (3 – 6 Months)", value: "3-6m" },
  { label: "Long-term (6+ Months)", value: "6m+" }
];

function ContactPage() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleNext = () => {
    if (step === 1 && selectedServices.length === 0) return;
    if (step === 2 && !selectedBudget) return;
    if (step === 3 && !selectedTimeline) return;
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const WHATSAPP_LINK = "https://wa.me/message/fetadify";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />

      <main className="flex-grow pt-32 pb-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Project Planner</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let&apos;s Build Something Great</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground text-sm md:text-base leading-relaxed">
              Use our interactive estimator to share your project scope. Or, connect directly with our experts via phone or WhatsApp.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left: Interactive Project Planner Wizard */}
            <div className="lg:col-span-2 glass glow-border rounded-2xl p-6 md:p-10 space-y-8 relative overflow-hidden">
              {/* Progress bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="text-6xl animate-bounce">🚀</div>
                  <h2 className="text-3xl font-bold text-foreground">Project Scope Submitted!</h2>
                  <p className="max-w-md mx-auto text-sm text-muted-foreground leading-relaxed">
                    Thank you, {name || "there"}! We have received your scope details. One of our lead digital architects will contact you at <strong>{email}</strong> within 12 hours with a preliminary proposal.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setSelectedServices([]);
                      setSelectedBudget("");
                      setSelectedTimeline("");
                      setName("");
                      setEmail("");
                      setMessage("");
                    }}
                  >
                    Plan Another Project
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <span>Step {step} of 4</span>
                    <span>{Math.round(((step - 1) / 3) * 100)}% Complete</span>
                  </div>

                  {/* Step 1: Services */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-primary" /> What services do you need?
                        </h2>
                        <p className="text-xs text-muted-foreground mt-1">Select all categories that apply to your product roadmap.</p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {serviceOptions.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggleService(opt.id)}
                            className={`p-5 rounded-xl border text-left flex items-start gap-4 transition-all duration-300 group ${
                              selectedServices.includes(opt.id)
                                ? "bg-primary/10 border-primary shadow-sm shadow-primary/15 scale-[1.01]"
                                : "bg-background/40 border-border/60 hover:border-border hover:bg-secondary/40"
                            }`}
                          >
                            <span className="text-2xl p-2 bg-secondary/50 rounded-lg group-hover:scale-105 transition-transform">
                              {opt.icon}
                            </span>
                            <div>
                              <span className="font-semibold text-sm block">{opt.label}</span>
                              <span className="text-xs text-muted-foreground mt-1 block">Click to select/deselect</span>
                            </div>
                            {selectedServices.includes(opt.id) && (
                              <span className="ml-auto bg-primary text-primary-foreground p-1 rounded-full">
                                <Check className="w-3.5 h-3.5" />
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Budget */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold">What is your estimated investment budget?</h2>
                        <p className="text-xs text-muted-foreground mt-1">Select a realistic budget bracket to align resource planning.</p>
                      </div>
                      <div className="space-y-3">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setSelectedBudget(opt.value)}
                            className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300 ${
                              selectedBudget === opt.value
                                ? "bg-primary/10 border-primary shadow-sm shadow-primary/15 pl-6"
                                : "bg-background/40 border-border/60 hover:border-border hover:bg-secondary/40"
                            }`}
                          >
                            <span className="font-semibold text-sm">{opt.label}</span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              selectedBudget === opt.value ? "border-primary bg-primary text-primary-foreground" : "border-border"
                            }`}>
                              {selectedBudget === opt.value && <Check className="w-3.5 h-3.5" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Timeline */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold">What is your target launch timeline?</h2>
                        <p className="text-xs text-muted-foreground mt-1">This helps us allocate developers to meet your delivery milestone.</p>
                      </div>
                      <div className="space-y-3">
                        {timelineOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setSelectedTimeline(opt.value)}
                            className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all duration-300 ${
                              selectedTimeline === opt.value
                                ? "bg-primary/10 border-primary shadow-sm shadow-primary/15 pl-6"
                                : "bg-background/40 border-border/60 hover:border-border hover:bg-secondary/40"
                            }`}
                          >
                            <span className="font-semibold text-sm">{opt.label}</span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              selectedTimeline === opt.value ? "border-primary bg-primary text-primary-foreground" : "border-border"
                            }`}>
                              {selectedTimeline === opt.value && <Check className="w-3.5 h-3.5" />}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Contact & Details */}
                  {step === 4 && (
                    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold">Provide contact information</h2>
                        <p className="text-xs text-muted-foreground mt-1">Let us know how to deliver your preliminary estimation details.</p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Alex Mercer"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="alex@domain.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                          Briefly describe the product vision
                        </label>
                        <textarea
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                          placeholder="Provide details about platform features, users, integrations..."
                        />
                      </div>

                      <Button type="submit" variant="hero" size="xl" className="w-full">
                        Submit Estimation Request
                      </Button>
                    </form>
                  )}

                  {/* Navigation Buttons */}
                  {!submitted && (
                    <div className="flex justify-between items-center pt-6 border-t border-border/40">
                      {step > 1 ? (
                        <Button 
                          type="button" 
                          variant="ghost" 
                          size="sm" 
                          onClick={handleBack}
                          className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                        >
                          <ArrowLeft className="w-4 h-4" /> Back
                        </Button>
                      ) : (
                        <div />
                      )}

                      {step < 4 && (
                        <Button 
                          type="button"
                          variant="hero"
                          size="sm"
                          onClick={handleNext}
                          disabled={
                            (step === 1 && selectedServices.length === 0) ||
                            (step === 2 && !selectedBudget) ||
                            (step === 3 && !selectedTimeline)
                          }
                          className="flex items-center gap-1.5 ml-auto"
                        >
                          Next Step <ArrowRight className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right: Direct Contacts Info */}
            <div className="space-y-6">
              <div className="glass glow-border rounded-2xl p-6 md:p-8 space-y-6">
                <h2 className="text-xl font-bold">Fast-Track Consultation</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Prefer directly discussing your project blueprints? Connect immediately with our technology architects.
                </p>

                <div className="space-y-4">
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all group"
                  >
                    <div className="p-2.5 bg-green-500 text-white rounded-lg">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-muted-foreground group-hover:text-foreground">Chat on WhatsApp</span>
                      <span className="block text-sm font-bold text-green-400">Response in &lt;15 mins</span>
                    </div>
                  </a>

                  <a 
                    href="tel:+18005550199"
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all group"
                  >
                    <div className="p-2.5 bg-primary text-primary-foreground rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-muted-foreground group-hover:text-foreground">Call our US Office</span>
                      <span className="block text-sm font-bold text-primary">+1 (800) 555-0199</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Offices locations */}
              <div className="glass glow-border rounded-2xl p-6 md:p-8 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Our Global Offices</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-foreground">San Francisco, CA</strong>
                      <span className="text-xs text-muted-foreground">548 Market St, Suite 98231<br />San Francisco, CA 94104</span>
                    </div>
                  </div>

                  <div className="flex gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-foreground">London, United Kingdom</strong>
                      <span className="text-xs text-muted-foreground">85 Great Portland St, First Floor<br />London, W1W 7LT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}