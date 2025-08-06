import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section container my-5">
      <div className="about-card shadow-lg p-4 rounded">
        <div className="about-icon mb-3">🌍</div>
        <h2 className="about-title mb-3">About Us</h2>
        <p className="about-text">
          Our NGO focuses on <b>community development</b>, <b>education</b>, and <b>healthcare</b>.<br/>
          We believe in empowering individuals and creating sustainable change.
        </p>
      </div>
    </section>
  );
}