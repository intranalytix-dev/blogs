import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      {/* <div className="hero-logo-container">
        <img src="/intra-logo.png" alt="Intra Analytics Logo" className="hero-logo" />
      </div> */}

      <div className="hero-content">
        <h1 className="hero-title">
          Turn Your Raw Data into Actionable Insights Instantly
        </h1>

        <p className="hero-subtitle">
          AutoGen Reports leverages AI to automate your reporting—no technical expertise needed.
        </p>

        <button
         className="hero-button"
         onClick={() => window.open("https://autogen.intranalytix.com", "_blank")}>
          Get Started for Free
        </button>
      </div>
    </section>
  );
};

export default HeroSection;