import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section id="home" className="home-hero d-flex align-items-center justify-content-center">
      <div className="home-overlay">
        <div className="home-content text-center text-white">
          <h1 className="display-3 font-weight-bold mb-4">Welcome to Our NGO</h1>
          <p className="lead mb-4">We are dedicated to making the world a better place. Join us in our mission!</p>
          <a href="#volunteer" className="btn btn-lg btn-success shadow">Become a Volunteer</a>
        </div>
      </div>
    </section>
  );
}