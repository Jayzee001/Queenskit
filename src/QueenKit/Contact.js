import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const ContactUs = () => {
  const form = useRef();
  const [validationErrors, setValidationErrors] = useState({});
  const [response, setResponse] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [validInputs, setValidInputs] = useState({});

  const validateForm = () => {
    const errors = {};

    // Validate Name
    if (!form.current.user_name.value.trim()) {
      errors.name = 'Name is required';
    } else {
      setValidInputs((prev) => ({ ...prev, name: true }));
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.current.user_email.value.trim() || !emailRegex.test(form.current.user_email.value)) {
      errors.email = 'Valid email is required';
    } else {
      setValidInputs((prev) => ({ ...prev, email: true }));
    }

    // Validate Message
    if (!form.current.message.value.trim()) {
      errors.message = 'Message is required';
    } else {
      setValidInputs((prev) => ({ ...prev, message: true }));
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm('service_loxzkk5', 'template_matnyjk', form.current, 'VkZNQeLqx3pcskL6C')
        .then(
          (result) => {
            setResponse('');
            setSuccessMessage('Message sent successfully!');
            setTimeout(() => {
              setSuccessMessage('');
            }, 5000);
          },
          (error) => {
            setResponse(error.text);
          }
        );
    }
  };

  return (
    <div className="cotainery">
      <div className="form_1">
        <h1 style={{color:'#ffdb58'}}>
          Contact Us
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            required
            placeholder='Name'
            className={validationErrors.name ? 'error' : validInputs.name ? 'valid' : ''}
          />
          {validationErrors.name && <p className="error">{validationErrors.name}</p>}
          {validInputs.name && <span className="tick">&#10004;</span>}

          <label>Email</label>
          <input
            type="email"
            name="user_email"
             placeholder='valid email'
            required
            className={validationErrors.email ? 'error' : validInputs.email ? 'valid' : ''}
          />
          {validationErrors.email && <p className="error">{validationErrors.email}</p>}
          {validInputs.email && <span className="tick">&#10004;</span>}

          <label>Message</label>
          <textarea
            name="message"
            required
             placeholder='Please describ how you want ur meal'
            className={validationErrors.message ? 'error' : validInputs.message ? 'valid' : ''}
          />
          {validationErrors.message && <p className="error">{validationErrors.message}</p>}
          {validInputs.message && <span className="tick">&#10004;</span>}
<span className="validation">
          <input className="submit" type="submit" value="Send" />
          {response && <p style={{ color: 'red' }}>{response}</p>}
            {successMessage && <p style={{ color: 'white', backgroundColor: 'green', padding: '10px' }}>{successMessage}</p>}
        </span>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
