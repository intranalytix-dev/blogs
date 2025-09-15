import React from 'react';
import './TargetUsersSection.css';

const TargetUsersSection = () => {
  return (
    <section className="target-section" id="users">
      <div className="target-content">
        <h2 className="target-title">
          Built for Professionals, Entrepreneurs, and Everyone In Between
        </h2>
        <p className="target-subtitle">
          Whether you're running a business, handling finance, or just curious about your own data—
          AutoGen Reports makes analytics easy for all.
        </p>

        <div className="user-types">
          <div className="user-card">
            <div className="user-icon">👩‍💼</div>
            <h3 className="user-title">Business Professionals</h3>
            <p className="user-text">
              Streamline your reporting workflow and make fast, data-backed decisions without technical complexity.
            </p>
          </div>

          <div className="user-card">
            <div className="user-icon">🧮</div>
            <h3 className="user-title">Finance & Ops Teams</h3>
            <p className="user-text">
              Replace complex spreadsheets and manual reporting with automated insights and clean summaries.
            </p>
          </div>

          <div className="user-card">
            <div className="user-icon">👤</div>
            <h3 className="user-title">Everyday Users</h3>
            <p className="user-text">
              Analyze your personal data—from bills to documents—without needing formulas, macros, or scripts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsersSection;