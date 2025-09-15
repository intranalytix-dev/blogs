import React from 'react';
import './ValuePropSection.css';

const ValuePropSection = () => {
  return (
    <section className="value-section" id="value">
      <div className="value-content">
        <h2 className="value-title">Unlock Powerful Insights in Minutes — Not Hours</h2>
        <p className="value-description">
          AutoGen Reports removes the complexity from reporting. Whether you're analyzing sales trends,
          financial records, or personal data, our AI transforms it into crystal-clear insights you can
          act on—without writing a single formula.
        </p>

        <div className="value-benefits">
          <div className="benefit-item">✅ Fully Automated Reports</div>
          <div className="benefit-item">🔍 AI-Powered Accuracy</div>
          <div className="benefit-item">📊 Visual Insights at a Glance</div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;