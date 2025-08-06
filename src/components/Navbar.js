import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <span className="navbar-logo mr-2">🌱</span> NGO
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav d-flex flex-row align-items-center mb-0">
            <li className="nav-item mx-2"><a className="nav-link custom-nav-link" href="#home">Home</a></li>
            <li className="nav-item mx-2"><a className="nav-link custom-nav-link" href="#about">About Us</a></li>
            <li className="nav-item mx-2"><a className="nav-link custom-nav-link" href="#volunteer">Volunteer</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}