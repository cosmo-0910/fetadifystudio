import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/services/blockchain-web3')({
  head: () => ({
    meta: [
      { title: 'Blockchain & Web3 — Fetadify Agency' },
      { name: 'description', content: 'Details about Blockchain & Web3 services.' },
    ],
  }),
  component: BlockchainWeb3Page,
});

function BlockchainWeb3Page() {
  const article = {
    icon: '⛓️',
    title: 'Blockchain & Web3',
    content: `# Blockchain & Web3

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
Whether you're launching a token, building a DeFi protocol, or exploring blockchain for enterprise use, we're here to guide you.`
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      <main className="flex-grow pt-24 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <div className="mb-12">
            <div className="text-6xl mb-4">{article.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50" />
          </div>
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
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>
              );
            })}
          </article>
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
