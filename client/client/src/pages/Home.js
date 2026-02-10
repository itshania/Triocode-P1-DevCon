import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css'; // CSS file for home page styling

const Home = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="home-container">
        <h1 className="home-title">Welcome to Smart Event Platform</h1>
        <p className="home-subtitle">Manage events, tickets, networking, and more!</p>
        <div className="home-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn btn-register">Register</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;