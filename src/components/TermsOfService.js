import React from "react";
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Service</h1>
      <p className="terms-date">Effective Date: April 5, 2025</p>

      <div className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using AutoGen Reports, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our platform.
        </p>
      </div>

      <div className="terms-section">
        <h2>2. Use of the Service</h2>
        <p>
          AutoGen Reports allows you to upload Excel or CSV files to generate visual reports. You agree not to misuse the service, reverse-engineer it, or use it for unlawful purposes.
        </p>
      </div>

      <div className="terms-section">
        <h2>3. Data Privacy</h2>
        <p>
          We do not store your uploaded files. All files are processed temporarily and discarded after report generation. Only login-related data is stored as outlined in our Privacy Policy.
        </p>
      </div>

      <div className="terms-section">
        <h2>4. Intellectual Property</h2>
        <p>
          The AutoGen Reports platform, including its code, design, and content, is the intellectual property of Intra Analytics. You may not copy, modify, or distribute it without permission.
        </p>
      </div>

      <div className="terms-section">
        <h2>5. Service Availability</h2>
        <p>
          We strive to ensure uninterrupted service but do not guarantee 100% uptime. We reserve the right to modify, suspend, or discontinue any part of the service without notice.
        </p>
      </div>

      <div className="terms-section">
        <h2>6. Limitation of Liability</h2>
        <p>
          AutoGen Reports is provided "as is" without warranties. We are not liable for any losses, damages, or data issues resulting from use of the service.
        </p>
      </div>

      <div className="terms-section">
        <h2>7. Contact</h2>
        <p>
          If you have any questions about these terms, please contact us at <strong>ceo@intranalytix.com</strong>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;