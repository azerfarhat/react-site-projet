import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="logo-container">
        <div className="logo-icon" aria-hidden="true">
          <span className="flag-italy" />
        </div>
        <span className="logo-text">ItalyVisa</span>
        <span className="visually-hidden">Logo ItalyVisa</span>
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#apropos">À Propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button className="cta-button">
        Consultation Gratuite
      </button>
    </header>
  );
}

export default Header;