import React from 'react'
import { useState ,useEffect} from 'react';

import '../styles/contact.css'
import emailjs from 'emailjs-com';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    emailjs.init('eKGXpX78C37XjlM4s');
  }, []);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage('Please enter your email.');
      return;
    }
    // e.preventDefault();
    // emailjs.init('eKGXpX78C37XjlM4s');
    console.log(email);
    emailjs.send("service_elklrhv","template_1lk1glc", {
      user_email: email,
      from_name:name,
      type_message:message,
      to_name:'PIND HOOD RECORDS',
    })
    .then((result) => {
      console.log(result.text);
      setSuccessMessage('Email sent successfully!');
      setEmail('');
      setName('');
      setMessage('');
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
    <div className='contact-container'>
      <div className="navbar-size-div">
        {/* /* this div is get our contact content below navbar */}
      </div> 
      <div className="contact-container-header">
        <h1>Contact </h1>
        <p>Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination, and where every moment is an opportunity to make your mark on the canvas of existence. The only limit is the extent of your imagination.</p>
      </div>
        <div className="contact-container-items">
        
          <div className="contact-container-items-form">
            <p>Questions, comments or requests?
            Feel free to reach out, we’d love to hear from you.</p>
            <form action="" id='myForm' >
            {/* <label htmlFor="">Name:</label> */}
            <div>
            <input type="text" placeholder='enter your name' value={name} onChange={handleNameChange} required/>
            <input type="email" placeholder 
            ='enter your email'
            value={email} onChange={handleEmailChange} />
            {errorMessage && <div className="error-message-box">{errorMessage}</div>}
            </div>
            <div><textarea name="message" placeholder='Enter your Feedback'
            value={message} onChange={handleMessageChange}></textarea>  </div>
            <div>
                <button onClick={sendEmail}> submit </button>
            </div>
            {successMessage && <div className="success-message-box">{successMessage}</div>}
            </form>
          </div>
          <div className="contact-container-items-image">
            <img src="./contact-img.jpg" 
            alt="" />
          </div>
        </div>
    </div>
  )
}

export default Contact
