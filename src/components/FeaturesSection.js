import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <div className="features-content">
        <h2 className="features-title">Powerful Features to Simplify Your Workflow</h2>
        <p className="features-subtitle">
          From parsing raw files to delivering predictive insights, AutoGen Reports handles it all—so you don't have to.
        </p>

        <div className="features-grid">
          <div className="feature-item">
            <h3 className="feature-heading">🔍 AI-Powered Anomaly Detection</h3>
            <p className="feature-text">
              Automatically detect errors, outliers, or unusual data points in your reports—before they become problems.
            </p>
          </div>

          <div className="feature-item">
            <h3 className="feature-heading">📄 Intelligent File Parsing</h3>
            <p className="feature-text">
              Convert unstructured files like PDFs, invoices, and statements into clean, usable data using OCR + NLP.
            </p>
          </div>

          <div className="feature-item">
            <h3 className="feature-heading">🧠 Smart Summarization</h3>
            <p className="feature-text">
              No more sifting through data. Get auto-generated summaries that highlight trends, correlations, and key insights.
            </p>
          </div>

          <div className="feature-item">
            <h3 className="feature-heading">📈 Predictive Forecasting</h3>
            <p className="feature-text">
              Use historical data to forecast future trends and outcomes with customizable time horizons and confidence levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;