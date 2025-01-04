import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, message } = formData;

    // Create the mailto link
    const mailtoLink = `mailto:rm5901960@gmail.com?subject=Saw your portfolio&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`
    )}`;

    // Open the mailto link in the user's email client
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={inputGroupStyle}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputGroupStyle}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputGroupStyle}>
        <label htmlFor="mobile">Mobile:</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputGroupStyle}>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
          required
        ></textarea>
      </div>
      <button type="submit" style={buttonStyle}>Send</button>
    </form>
  );
};

// Styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '300px',
  margin: '20px auto'
};

const inputGroupStyle = {
  marginBottom: '15px'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box'
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box',
  minHeight: '100px'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

export default ContactForm;
