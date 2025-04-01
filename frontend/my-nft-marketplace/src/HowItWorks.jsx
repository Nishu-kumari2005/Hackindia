import React from "react";
import "./HowItWorks.css";
import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";
import step3 from "./assets/step3.png";
import step4 from "./assets/step4.png";

const steps = [
  { id: 1, image: step1, title: "Connect Wallet", description: "Use MetaMask or other wallets to connect." },
  { id: 2, image: step2, title: "Explore NFTs", description: "Browse through unique digital assets." },
  { id: 3, image: step3, title: "Buy & Sell", description: "Trade NFTs securely with blockchain technology." },
  { id: 4, image: step4, title: "Earn Rewards", description: "Participate in staking and earn exclusive perks." },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <img src={step.image} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
