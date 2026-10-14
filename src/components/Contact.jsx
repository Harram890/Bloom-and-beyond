
import React, { useState } from "react";
import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for reaching out! 💗");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">
        <span className="contact-tag">LET'S CONNECT</span>
        <h2>We'd love to <span>hear from you.</span></h2>
        <p>
          Have a thought, a story, or just want to say hello?
          Send us a little message!
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="contact-submit">
          Send Message →
        </button>
      </form>
    </section>
  );
}

export default Contact;
