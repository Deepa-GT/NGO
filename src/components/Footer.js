import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section bg-primary text-white mt-5 py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="footer-brand mb-3 mb-md-0 d-flex align-items-center">
          <span className="footer-logo mr-2">🌱</span>
          <span className="font-weight-bold">NGO</span>
        </div>
        <div className="footer-social mb-3 mb-md-0">
          <a href="#" className="footer-social-link mx-2" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="footer-social-link mx-2" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" className="footer-social-link mx-2" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="footer-copy text-center text-md-right">
          &copy; {new Date().getFullYear()} NGO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}