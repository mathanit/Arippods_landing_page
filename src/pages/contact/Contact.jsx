import React, { useState } from "react";
import "./Contact.css";
import { div } from "framer-motion/client";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log("Form Data:", formData);
    setResponseMessage("✅ Thank you! Your message has been sent successfully.");

    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">

    <section id="contact"  className="details">
      <div  className="inner">
        <div className="content">
          <h1 className="title">Contact Apple Support</h1>
        </div>
        <div className="contact-form">
          <h1>Contact Apple Support</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>

          {responseMessage && (
            <div id="response-message">{responseMessage}</div>
          )}
        </div>
      </div>
    </section>
            </div>
  );
}

export default Contact;
