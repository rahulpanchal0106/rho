import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    try {
      const response = await fetch('https://sheet.best/api/sheets/35fcf16d-1642-4346-b722-d77e96811920', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setFormData({ name: '', email: '', mobile: '', message: '' });
        setError(null);
        setSuccess(true);
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        setError(`Failed to submit form: ${response.status} ${errorData.message}`);
        setSuccess(false);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to submit form. Please try again.');
      setSuccess(false);
    }
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
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
