import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // CSS file for header styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h2 className="logo">SmartEvent</h2>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;