import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/">
        <img src="/favicon.png" alt="Intra Analytics" />
        </Link>
      </div>
      {/* <div className="navbar-center">
  <span className="tagline">AI-Powered Reports in Seconds</span>
</div> */}
      <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/#features">Features</Link></li>
      <li><Link to="/#users">Who It's For</Link></li>
      <li><Link to="/pricing">Pricing</Link></li>
</ul>
    </nav>
  );
};

export default Navbar;