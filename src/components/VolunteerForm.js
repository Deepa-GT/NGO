import React, { useState } from 'react';
import './VolunteerForm.css';

export default function VolunteerForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend
  };

  return (
    <section id="volunteer" className="volunteer-section container my-5">
      <div className="volunteer-card shadow-lg p-4 rounded">
        <div className="volunteer-icon mb-3">🤝</div>
        <h2 className="volunteer-title mb-3">Volunteer With Us</h2>
        {submitted ? (
          <div className="alert alert-success">Thank you for volunteering!</div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Name</label>
              <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group mb-4">
              <label>Why do you want to volunteer?</label>
              <textarea name="message" className="form-control" value={form.message} onChange={handleChange} required />
            </div>
            <button className="btn btn-success btn-lg w-100" type="submit">Submit</button>
          </form>
        )}
      </div>
    </section>
  );
}