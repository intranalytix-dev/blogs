import React from "react";
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container" id = "privacy-policy">
      <h1 className="privacy-policy-title">Privacy & Security Policy</h1>
      <p className="privacy-policy-date">Effective Date: April 5, 2025</p>

      <div className="privacy-policy-section">
        <h2>What Data Do We Collect?</h2>
        <p>We only collect your email address and subscription type when you register or log in. We do not collect or store any other personal data.</p>
      </div>

      <div className="privacy-policy-section">
        <h2>How We Handle Uploaded Files</h2>
        <p>All uploaded files are processed in-memory and are not stored on our servers. We do not retain your data, and all files are discarded after processing.</p>
      </div>

      <div className="privacy-policy-section">
        <h2>Security Measures</h2>
        <p>All data transmission is secured via HTTPS. Your login data is stored securely using industry-standard practices.</p>
      </div>

      <div className="privacy-policy-section">
        <h2>No Sharing of Personal Data</h2>
        <p>We do not sell, rent, or share your personal data with third parties.</p>
      </div>

      <div className="privacy-policy-section">
        <h2>Cookies and Analytics</h2>
        <p>We may use cookies for basic session handling. We do not use any third-party tracking or analytics cookies.</p>
      </div>

      <div className="privacy-policy-section">
        <h2>Third-Party Services</h2>
        <p>We use Google Firebase for hosting and may use Razorpay or PayPal for payments. These services comply with international security standards.</p>
      </div>

      <div className="privacy-policy-section">
        <h2>Contact Us</h2>
        <p>If you have any questions, please contact us at: <strong>ceo@intranalytix.com</strong></p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;