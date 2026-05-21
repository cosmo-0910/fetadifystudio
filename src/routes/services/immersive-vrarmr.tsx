import { createFileRoute, Link } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';

export const Route = createFileRoute('/services/immersive-vrarmr')({
  head: () => ({
    meta: [
      { title: 'Immersive VR/AR/MR — Fetadify Agency' },
      { name: 'description', content: 'Virtual and augmented reality simulations, spatial computing, interactive games, digital twins, and industrial IoT solutions.' },
    ],
  }),
  component: ImmersiveVrArMrPage,
});

function ImmersiveVrArMrPage() {
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
            <div className="text-6xl mb-4">🥽</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Immersive VR/AR/MR</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50" />
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            Virtual and augmented reality simulations, spatial computing, interactive games, digital twins, and industrial IoT solutions built for engagement and training.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">AR Solutions</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Enhance user experiences with augmented reality. From mobile AR apps to enterprise AR solutions for manufacturing and maintenance, we create immersive overlays that drive engagement.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">VR Experiences</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Build immersive virtual reality applications for training, entertainment, education, and simulation. Full-body tracking, multiplayer experiences, and photorealistic environments.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Mixed Reality (MR)</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Seamlessly blend digital and physical worlds with MR solutions on HoloLens, Magic Leap, and other platforms. Perfect for enterprise applications and collaborative experiences.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Digital Twins</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Create digital replicas of physical assets, processes, and environments. Monitor, analyze, and optimize operations in real-time with digital twin technology.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Industrial IoT</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Connect and visualize IoT sensors in immersive environments. Real-time data monitoring, predictive maintenance, and industrial automation made tangible.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Technologies We Use</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li>Unity 3D & Unreal Engine</li>
            <li>Three.js & Babylon.js</li>
            <li>WebXR & Spatial Computing</li>
            <li>ARCore & ARKit</li>
            <li>HoloLens & Magic Leap SDKs</li>
            <li>Cesium for Digital Twins</li>
            <li>ROS (Robotics Operating System)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Industries We Serve</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li><strong className="text-foreground">Healthcare</strong>: Surgical training, rehabilitation therapy</li>
            <li><strong className="text-foreground">Manufacturing</strong>: Maintenance training, assembly guidance</li>
            <li><strong className="text-foreground">Real Estate</strong>: Virtual property tours, immersive showrooms</li>
            <li><strong className="text-foreground">Education</strong>: Interactive learning experiences, virtual labs</li>
            <li><strong className="text-foreground">Entertainment</strong>: Games, interactive content</li>
            <li><strong className="text-foreground">Enterprise</strong>: Safety training, collaborative workspaces</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Immersive Tech?</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
            <li><strong className="text-foreground">Higher Engagement</strong>: 90% better retention with VR training</li>
            <li><strong className="text-foreground">Lower Costs</strong>: Reduce physical training infrastructure</li>
            <li><strong className="text-foreground">Safer Learning</strong>: Practice dangerous scenarios safely</li>
            <li><strong className="text-foreground">Global Access</strong>: Immersive experiences from anywhere</li>
          </ul>

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-4">Let's Create Your Immersive Experience</h3>
            <p className="text-muted-foreground mb-6">
              From concept to deployment, we handle the entire immersive experience pipeline.
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
