import React, { useState } from 'react';
import './FaqSection.css';

const faqs = [
  {
    question: 'What happens after I subscribe?',
    answer:
      'You’ll immediately get access to the features included in your chosen plan. You can start uploading files, generating reports, and viewing insights right away.',
  },
  {
    question: 'Can I upgrade or downgrade later?',
    answer:
      'Right now, upgrades and downgrades between plans aren’t prorated. You can switch plans manually, and the new billing cycle will begin from your next payment.',
  },
  {
    question: 'Do I need to install anything?',
    answer:
      'No installation required. AutoGen Reports is completely web-based — just log in and start using.',
  },
  {
    question: 'Is support included in all plans?',
    answer:
      'Email support is included in all plans. Pro and Business users get priority or dedicated support depending on the plan.',
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">{faq.question}</div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;