import {React,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,useLocation  } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ValuePropSection from './components/ValuePropSection';
import FeaturesSection from './components/FeaturesSection';
import TargetUsersSection from './components/TargetUsersSection';
import PricingPage from './components/PricingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function HomePage() {
  const location = useLocation();
  useEffect(() => {
    // Scroll after render (delay ensures the section exists in the DOM)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // You can increase this to 200ms if needed
    }
  }, [location]);
  return (
    <>
      <Navbar />
      <HeroSection />
      <ValuePropSection />
      <FeaturesSection />
      <TargetUsersSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/contact" element={<ContactUs />} />

      </Routes>
    </Router>
  );
}

export default App;