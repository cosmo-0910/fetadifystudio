import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Link } from "@tanstack/react-router";

// Service articles mapping
const serviceArticles: Record<string, { title: string; icon: string; content: string }> = {
  "emerging-tech-ai": {
    title: "Emerging Tech & AI",
    icon: "🤖",
    content: `
# Emerging Tech & AI

Smart automation, machine learning models, neural networks, natural language processing, and AI integrations that drive operational intelligence and product innovation.

## What We Offer

### Machine Learning Models
We design and deploy custom machine learning models tailored to your business needs. From predictive analytics to classification systems, our ML solutions help you extract actionable insights from your data.

### AI Integration
Seamlessly integrate cutting-edge AI capabilities into your existing applications. Whether it's ChatGPT, Claude, or custom models, we connect AI to your workflows for enhanced automation and intelligence.

### Natural Language Processing
Process and understand human language with advanced NLP techniques. We build systems for sentiment analysis, text classification, document extraction, and conversational AI.

### Intelligent Automation
Automate complex business processes with intelligent systems. RPA, workflow automation, and intelligent document processing help you reduce costs and improve efficiency.

## Technologies We Use
- TensorFlow & PyTorch
- OpenAI & Anthropic APIs
- Hugging Face Models
- LangChain & LlamaIndex
- FastAPI & Python
- Cloud ML platforms (AWS SageMaker, Google Vertex AI)

## Success Stories

Our AI and emerging tech solutions have helped clients:
- **Reduce manual processing** by 70% through intelligent automation
- **Improve predictions** with 95%+ accuracy in forecasting models
- **Scale customer support** with AI-powered chatbots handling 10,000+ queries daily
- **Accelerate innovation** through rapid prototyping and deployment

## Ready to Transform with AI?

Let's discuss how emerging technologies can revolutionize your business operations and create new revenue streams.
    `.trim(),
  },
  "blockchain-web3": {
    title: "Blockchain & Web3",
    icon: "⛓️",
    content: `
# Blockchain & Web3

Decentralized applications (dApps), smart contracts, custom tokens, DeFi platforms, and Web3 solutions built to establish digital trust and scale cryptographically.

## What We Offer

### Smart Contract Development
We design and deploy secure, audited smart contracts on Ethereum, Polygon, Arbitrum, and other blockchains. From simple token contracts to complex DeFi protocols, we handle every detail.

### DeFi Platform Development
Build decentralized finance applications including DEXs, lending protocols, yield farming platforms, and derivatives. We ensure security, efficiency, and regulatory compliance.

### NFT & Token Solutions
Create custom tokens (ERC-20, ERC-721, ERC-1155) and NFT collections. From marketplace development to community tokens, we bring your Web3 vision to life.

### Web3 Integration
Add blockchain capabilities to your existing applications. Wallet integration, Web3 authentication, and blockchain data management made simple.

## Technologies We Use
- Solidity & Vyper
- Hardhat & Foundry
- Ethers.js & Web3.js
- The Graph (Subgraphs)
- OpenZeppelin
- Wagmi & RainbowKit
- IPFS & Arweave

## Use Cases

- Decentralized Exchanges (DEX)
- Lending & Borrowing Protocols
- Staking & Rewards Systems
- NFT Marketplaces
- DAO Governance
- Supply Chain Tracking

## Why Choose Us?

- **Security First**: All contracts audited and tested
- **Performance Optimized**: Gas-efficient code saves users money
- **Regulatory Aware**: GDPR, AML/KYC compliance built-in
- **Cross-Chain**: Multi-chain deployment expertise

## Ready to Build in Web3?

Whether you're launching a token, building a DeFi protocol, or exploring blockchain for enterprise use, we're here to guide you.
    `.trim(),
  },
  "immersive-vrarmr": {
    title: "Immersive VR/AR/MR",
    icon: "🥽",
    content: `
# Immersive VR/AR/MR

Virtual and augmented reality simulations, spatial computing, interactive games, digital twins, and industrial IoT solutions built for engagement and training.

## What We Offer

### AR Solutions
Enhance user experiences with augmented reality. From mobile AR apps to enterprise AR solutions for manufacturing and maintenance, we create immersive overlays that drive engagement.

### VR Experiences
Build immersive virtual reality applications for training, entertainment, education, and simulation. Full-body tracking, multiplayer experiences, and photorealistic environments.

### Mixed Reality (MR)
Seamlessly blend digital and physical worlds with MR solutions on HoloLens, Magic Leap, and other platforms. Perfect for enterprise applications and collaborative experiences.

### Digital Twins
Create digital replicas of physical assets, processes, and environments. Monitor, analyze, and optimize operations in real-time with digital twin technology.

### Industrial IoT
Connect and visualize IoT sensors in immersive environments. Real-time data monitoring, predictive maintenance, and industrial automation made tangible.

## Technologies We Use
- Unity 3D & Unreal Engine
- Three.js & Babylon.js
- WebXR & Spatial Computing
- ARCore & ARKit
- HoloLens & Magic Leap SDKs
- Cesium for Digital Twins
- ROS (Robotics Operating System)

## Industries We Serve
- **Healthcare**: Surgical training, rehabilitation therapy
- **Manufacturing**: Maintenance training, assembly guidance
- **Real Estate**: Virtual property tours, immersive showrooms
- **Education**: Interactive learning experiences, virtual labs
- **Entertainment**: Games, interactive content
- **Enterprise**: Safety training, collaborative workspaces

## Why Immersive Tech?

- **Higher Engagement**: 90% better retention with VR training
- **Lower Costs**: Reduce physical training infrastructure
- **Safer Learning**: Practice dangerous scenarios safely
- **Global Access**: Immersive experiences from anywhere

## Let's Create Your Immersive Experience

From concept to deployment, we handle the entire immersive experience pipeline.
    `.trim(),
  },
  "custom-software-saas": {
    title: "Custom Software & SaaS",
    icon: "💻",
    content: `
# Custom Software & SaaS

High-performance custom software, enterprise platforms, scalable SaaS architectures, SAP integrations, and mobile apps designed to run business operations seamlessly.

## What We Offer

### Enterprise Software Development
Build robust, scalable enterprise applications tailored to your business processes. From CRM systems to ERP implementations, we create software that grows with you.

### SaaS Platform Development
Launch your own Software-as-a-Service platform. We handle architecture, multi-tenancy, billing systems, and everything needed for a successful SaaS business.

### Mobile App Development
Native iOS and Android apps, or cross-platform solutions using React Native or Flutter. Mobile-first design with offline capabilities and seamless synchronization.

### Legacy System Modernization
Transform outdated systems into modern, cloud-native applications. API modernization, microservices migration, and database optimization.

### API-First Architecture
Build flexible, scalable systems with well-designed APIs. Perfect for integrating with third-party services and enabling third-party integrations.

## Technologies We Use
- React, Next.js, Vue.js for Frontend
- Node.js, Python, Go for Backend
- PostgreSQL, MongoDB, Redis for Data
- Docker, Kubernetes for Deployment
- AWS, GCP, Azure for Cloud
- React Native, Flutter for Mobile

## What Sets Us Apart

- **Scalability**: Systems that handle millions of users
- **Performance**: Sub-100ms response times
- **Security**: Enterprise-grade encryption and compliance
- **Maintainability**: Clean code, comprehensive testing
- **User Experience**: Intuitive, beautiful interfaces

## Success Metrics

Our SaaS clients achieve:
- **5-10x faster** time-to-market
- **99.99%** uptime reliability
- **40%** reduction in operational costs
- **3-5x** revenue growth in first year

## Let's Build Your Software Solution

Whether you need a custom application or a scalable SaaS platform, we have the expertise and experience to bring it to life.
    `.trim(),
  },
  "cloud-devops": {
    title: "Cloud & DevOps",
    icon: "☁️",
    content: `
# Cloud & DevOps

Resilient cloud architecture (AWS, GCP, Azure), automated CI/CD pipelines, Kubernetes container orchestration, DevOps engineering, and data engineering.

## What We Offer

### Cloud Architecture Design
Design scalable, resilient cloud infrastructure for your applications. We optimize for performance, cost, and reliability across AWS, GCP, and Azure.

### CI/CD Pipeline Implementation
Automate your development workflow. From code commit to production deployment, our CI/CD pipelines ensure fast, reliable releases.

### Kubernetes Orchestration
Deploy and manage containerized applications at scale. We handle everything from cluster setup to advanced orchestration patterns.

### DevOps Engineering
Build a robust DevOps culture. Infrastructure-as-Code, monitoring, logging, and incident response fully automated.

### Data Engineering
Build data pipelines that collect, process, and analyze data at scale. Data warehousing, ETL/ELT, real-time streaming, and analytics.

## Technologies We Use
- **Cloud**: AWS, Google Cloud, Azure
- **Containers**: Docker, Kubernetes, ECS
- **CI/CD**: GitHub Actions, GitLab CI, Jenkins
- **Infrastructure-as-Code**: Terraform, CloudFormation
- **Monitoring**: Prometheus, DataDog, New Relic
- **Data Tools**: Kafka, Spark, dbt, Airflow

## DevOps Benefits

- **Speed**: Deploy changes in minutes, not weeks
- **Reliability**: 99.99%+ uptime with automated failover
- **Cost Efficiency**: Optimize cloud spending by 30-50%
- **Security**: Automated compliance and vulnerability scanning
- **Developer Experience**: Self-service infrastructure

## Infrastructure Patterns

- **Microservices**: Distributed, scalable services
- **Serverless**: AWS Lambda, Google Cloud Functions
- **Multi-Cloud**: Avoid vendor lock-in
- **Disaster Recovery**: Automated backups and failover
- **Zero-Downtime Deployment**: Blue-green and canary deployments

## Let's Transform Your Operations

Move faster, more reliably, and at lower cost with modern DevOps practices.
    `.trim(),
  },
  "ui-ux-web3-marketing": {
    title: "UI/UX & Web3 Marketing",
    icon: "🎨",
    content: `
# UI/UX & Web3 Marketing

User‑centric product designs, interactive prototypes, customer experience (CX) frameworks, and conversion‑optimized digital marketing campaigns.

## What We Offer

### User Experience (UX) Design
Design experiences that delight users. From research and wireframing to prototyping, we create intuitive, accessible interfaces that solve real problems.

### User Interface (UI) Design
Beautiful, consistent visual design systems. We create design systems and component libraries that scale with your product.

### Product Design
End-to-end product design from concept to launch. User research, competitive analysis, usability testing, and iterative refinement.

### Web3 UI/UX
Specialized design for blockchain applications. Wallet integration, transaction flows, and Web3-specific UX patterns that educate and empower users.

### Digital Marketing
Conversion-optimized marketing campaigns. SEO, content marketing, paid advertising, and marketing automation that drive results.

### Web3 Marketing
Market your blockchain project effectively. Community building, tokenomics communication, and Web3-native marketing strategies.

## Technologies We Use
- **Design Tools**: Figma, Adobe XD, Sketch
- **Prototyping**: Framer, Webflow, Principle
- **Development**: React, Vue, Next.js
- **Analytics**: Google Analytics, Mixpanel, Amplitude
- **Marketing**: HubSpot, Segment, Intercom

## Our Approach

1. **Research**: Understand your users deeply
2. **Strategy**: Define clear design and marketing objectives
3. **Design**: Create beautiful, functional experiences
4. **Testing**: Validate with real users
5. **Iteration**: Continuously improve based on feedback

## Impact & Results

- **35%+ improvement** in conversion rates
- **2-3x increase** in user engagement
- **90%+ user satisfaction** scores
- **50% reduction** in support tickets through better UX

## Design Principles

- **User-Centered**: Every decision based on user needs
- **Accessible**: WCAG 2.1 AA compliance
- **Responsive**: Works beautifully on all devices
- **Performance**: Fast, efficient, and delightful
- **Inclusive**: Design for diverse user backgrounds

## Let's Design Your Future

Transform your product's user experience and marketing impact with our comprehensive design and marketing expertise.
    `.trim(),
  },
};

export const Route = createFileRoute("/services/$slug")({
  head: () => ({
    meta: [
      { title: "Service Details — Fetadify Agency" },
      { name: "description", content: "Learn more about our specialized development services." },
    ],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const article = serviceArticles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <SiteHeader />
        <main className="flex-grow flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
            <Link to="/services" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Back to Services
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-grow pt-24 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          {/* Back Button */}
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="text-6xl mb-4">{article.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50"></div>
          </div>

          {/* Content */}
          <article className="prose prose-invert max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s*/, '');
                const headingClass = {
                  1: 'text-3xl font-bold mt-8 mb-4',
                  2: 'text-2xl font-bold mt-6 mb-3',
                  3: 'text-xl font-semibold mt-4 mb-2',
                }[level] || 'text-lg font-semibold mt-3 mb-2';
                return <h2 key={index} className={headingClass}>{text}</h2>;
              }
              
              if (paragraph.startsWith('-')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^-\s*/, '')}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </article>

          {/* CTA */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help you leverage {article.title.toLowerCase()} to achieve your business goals.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
