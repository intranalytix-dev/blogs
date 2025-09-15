import React, { useEffect,useState } from 'react';
import './PricingPage.css';
import Navbar from './Navbar';
import FaqSection from './FaqSection';

// const getCurrencyByLocale = () => {
//   const language = navigator.language || 'en-US';
//   if (language.startsWith('en-IN')) return 'INR';
//   if (language.startsWith('en-GB') || language.startsWith('de-DE') || language.startsWith('es-ES') || language.startsWith('fr-FR')) return 'EUR';
//   return 'USD';
// };

// const formatPrice = (amount, currency) => {
//   return new Intl.NumberFormat(navigator.language || 'en-US', {
//     style: 'currency',
//     currency,
//     minimumFractionDigits: 0,
//   }).format(amount);
// };

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro'); // default selection

  const [currency, setCurrency] = useState('USD'); // default

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        const country = data.country;
  
        if (country === 'IN') {
          setCurrency('INR');
        } else if (['ES', 'FR', 'DE', 'IT', 'NL'].includes(country)) {
          setCurrency('EUR');
        } else {
          setCurrency('USD');
        }
      } catch (err) {
        console.error('Geolocation failed, defaulting to USD:', err);
        setCurrency('USD');
      }
    };
  
    fetchCountry();
  }, []);

  const pricingTiers = {
    USD: { basic: 125, pro: 300, business: 800 },
    INR: { basic: 2500, pro: 5999, business: 16000 },
    EUR: { basic: 84, pro: 200, business: 540 }
  };
  
  const prices = pricingTiers[currency] || pricingTiers['USD'];

  const formatPrice = (amount, currency) => {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleSelect = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <Navbar />
    <div className="pricing-page" id ="pricing">
      <h1 className="pricing-title">Choose Your Plan</h1>
      <p className="pricing-subtitle">Simple pricing. Powerful value.</p>

      <div className="pricing-cards">
        <div
          className={`pricing-card ${selectedPlan === 'basic' ? 'highlight' : ''}`}
          onClick={() => handleSelect('basic')}
        >
          <h2>Basic</h2>
          <ul>
            <li>✔ Static AI-generated reports</li>
            <li>✔ Email support</li>
          </ul>
          <h3>{formatPrice(prices.basic, currency)}<span>/month</span></h3>
        </div>

        <div
          className={`pricing-card ${selectedPlan === 'pro' ? 'highlight' : ''}`}
          onClick={() => handleSelect('pro')}
        >
             <div className="label">Best Value</div>
          <h2>Pro</h2>
          <ul>
            <li>✔ Customize KPIs</li>
            <li>✔ Download Reports</li>
            <li>✔ Priority Support</li>
          </ul>
          <h3>{formatPrice(prices.pro, currency)}<span>/month</span></h3>
        </div>

        <div
          className={`pricing-card ${selectedPlan === 'business' ? 'highlight' : ''}`}
          onClick={() => handleSelect('business')}
        >
          <h2>Business</h2>
          <ul>
            <li>✔ Full Customization</li>
            <li>✔ Forecasting & Trends</li>
            <li>✔ Dedicated Support</li>
          </ul>
          <h3>{formatPrice(prices.business, currency)}<span>/month</span></h3>
        </div>
      </div>
      <div className="comparison-table">
  <h2 className="table-heading">Compare All Plans</h2>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        <th>Basic</th>
        <th>Pro</th>
        <th>Business</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>AI-Generated Reports</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>KPI Customization</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Report Downloads</td>
        <td>❌</td>
        <td>✅</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Forecasting & Trends</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
      </tr>
      <tr>
        <td>Dedicated Support</td>
        <td>❌</td>
        <td>❌</td>
        <td>✅</td>
      </tr>
    </tbody>
  </table>
</div>
<FaqSection />
<div className="pricing-cta">
  <h2>Start Analyzing Smarter — Not Harder</h2>
  <p>No setup. No spreadsheet chaos. Just instant, AI-powered clarity.</p>
  <a href="/" className="cta-button" onClick={() => window.open("https://autogen.intranalytix.com", "_blank")} >Get Started — It’s Free</a>
</div>
    </div>
    </>
  );
};

export default PricingPage;