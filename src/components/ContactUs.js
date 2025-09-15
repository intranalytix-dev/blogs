import React from "react";
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">We're here to help and answer any questions you might have.</p>

      <div className="contact-section">
        <h2>📧 Email</h2>
        <p>For general inquiries: <strong>ceo@intranalytix.com</strong></p>
      </div>

      <div className="contact-section">
        <h2>💬 Support</h2>
        <p>If you're facing an issue while using AutoGen Reports, feel free to reach out to our support team. We'll get back to you within 1–2 business days.</p>
      </div>

      <div className="contact-section">
        <h2>🌐 Social</h2>
        <p>LinkedIn: <a href="https://www.linkedin.com/company/intra-analytics-ai" target="_blank" rel="noopener noreferrer">Intra Analytics</a></p>
        <p>Twitter (X): <a href="https://twitter.com/IntraAnalytics" target="_blank" rel="noopener noreferrer">@intranalytix</a></p>
      </div>
    </div>
  );
};

export default ContactUs;