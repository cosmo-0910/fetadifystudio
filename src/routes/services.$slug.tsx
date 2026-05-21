import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/$slug")({
  component: () => (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">
            This service page is not available. Please select a service from the list.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Back to Services
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
});
