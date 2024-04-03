import React from 'react'
import '../styles/register.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';

function Register() {
  const initialLoginInfo = ({
    username: "",
    email: "",
    password: "",
  })

  // I have used useState hook for 3 major purposes 
  // 1) setting loginInfo
  // 2) for getting error message if already created user exists
  // 3) for getting success meassage if user gets created successfully
  const [loginInfo, setLoginInfo] = useState(initialLoginInfo);
  const [error,setError]= useState("");
  const [successMessage,setSuccessMessage] = useState("");
  // const [register, setRegister] = useState(true);


  // for handling the change of value while entering the input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  


// handle submit for handling registeration process and fetch api from backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      let data = await response.json();
      if (response.ok) {
        setSuccessMessage("user created successfully");
        setError("");
        console.log(data); // Handle successful registration response
      } else {
        setError(data.error);
        setSuccessMessage("");
        console.error("Registration failed"); // Handle registration failure
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
   
  return (
    <div className='register-container'>
      <div className="navbar-size-div">

      </div>
      <form action="" onSubmit={handleSubmit} className="register-form">
        <div className="register-form-header">
            <h1>Join Pind Hood</h1>
        </div>
        <div className="register-form-username">

        <div className="register-form-label">
            <label htmlFor="" >username</label>
        </div>
        <div className="user">
            <input type="text"  name='username' value={loginInfo.username} onChange={handleChange} required />
        </div>
        </div>
        <div className="register-form-email">

        <div className="register-form-label">
            <label htmlFor="" >email</label>
        </div>
        <div className="user">
            <input type="email" name='email' value={loginInfo.email} onChange={handleChange} required />
        </div>
        </div>
        <div className="register-form-password">

        <div className="register-form-label">
            <label htmlFor="" >password</label>
        </div>
        <div className="user">
            <input type="password" name='password' value={loginInfo.password} onChange={handleChange} required />
        </div>
        </div>


        {/* <div className="register-form-confirm-password">

        <div className="register-form-label">
            <label htmlFor="" >confirm password</label>
        </div>
        <div className="user">
            <input type="text" required />
        </div>
        </div> */}
      {/* for adding the error and successmessage in the frontend */}
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="error-message">{successMessage}</div>}
        <div className="register-form-button"><button type='submit'>Register</button></div>
      </form>

      <div className="already-have-an-account">
        <h4>Already have an account? <Link to="/loginpage" reloadDocument>LogIn</Link></h4>
      </div>
    </div>
  )
}

export default Register
