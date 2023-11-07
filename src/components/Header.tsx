import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss'; // Make sure your path to the SCSS file is correct

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">My Website</Link>
      </div>
      <nav className="navigation">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
