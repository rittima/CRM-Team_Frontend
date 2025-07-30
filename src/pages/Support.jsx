import React, { useState } from "react";
import "../Styles/Support.scss";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Your message has been submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="support-page">
      <h2>Support</h2>
      <p>If you have any questions or issues, feel free to reach out!</p>

      <div className="support-info">
        <p><strong>Email:</strong> support@example.com</p>
        <p><strong>Phone:</strong> +91-9876543210</p>
        <p><strong>Working Hours:</strong> Mon–Fri, 9:00 AM to 6:00 PM</p>
      </div>

      <form onSubmit={handleSubmit} className="support-form">
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Support;
