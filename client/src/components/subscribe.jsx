import React, { useState,useEffect } from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../styles/subscribe.css';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    emailjs.init('eKGXpX78C37XjlM4s');
  }, []);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendEmail = () => {
    if (!email) {
      setErrorMessage('Please enter your email.');
      return;
    }
    // e.preventDefault();
    // emailjs.init('eKGXpX78C37XjlM4s');
    console.log(email);
    emailjs.send('service_elklrhv', 'template_ytvs81s', {
      to_email: email,
    })
    .then((result) => {
      console.log(result.text);
      setSuccessMessage('Email sent successfully!');
      setEmail('');
      setErrorMessage('');
// to make success messgae disappear after some time
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      
    })
    .catch((error) => {
      console.error('Email error:', error);
      setErrorMessage('An error occurred while sending the email. Please try again later.');

      // Handle the error, show an error message, etc.
    });
    
  };

  return (
    <div className='subscribe-container'>
      <div className='subscribe-styling'>
        <div className="subscribe-header">
          <h1>Subscribe</h1>
        </div>
        <div className="subscribe-content">
          <p>Enter your email below to receive updates.</p>
        </div>
        <div className="subscribe-button">
          <input type="email" 
                 placeholder='Enter your email' 
                 value={email} 
                 onChange={handleEmailChange} 
                 required
                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Email format pattern
                 title="Please enter a valid email address."
                 onInvalid={(e) => e.target.setCustomValidity('Please enter a valid email address.')}
                 onInput={(e) => e.target.setCustomValidity('')} // Reset custom validity on input
          />
          <button className='subscribe-get-started' onClick={sendEmail}>Get started</button>
          {successMessage && (
            <div className="success-message-box">
              
              <p>{successMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
