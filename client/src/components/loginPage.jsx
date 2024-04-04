import React from 'react'

import { useState} from 'react'
import '../styles/loginPage.css'
import {Link} from 'react-router-dom'



function LoginPage() {

  const [loginInfo,setLoginInfo] = useState({
    loginId : "",
    password:"",
  })

  const [error,setError] =useState("");
  const [message,setMessage] =useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
    const response =await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    const data = await response.json();
        console.log(data); // Log the response from the server

        // Handle response based on success or failure
        if (response.ok) {
            console.log("login Succesfull")
            setError("");
            setMessage("Logged in")
            // Login successful, perform desired actions (e.g., redirect)
        } else {
          setError(data.message)
          setMessage("");
          console.log("login failed")
            // Login failed, display error message to the user
        }
      }
     catch (error) {
        console.error('Error:', error); // Log any fetch or parsing errors
        // Handle error (e.g., display error message to the user)
    }
    // console.log(data);
    // console.log(loginInfo);

  }
  return (

    
    <div className='login-page-container'>
        <div className="navbar-size-div">

        </div>
        <div className="login-page-header">
        <h1>
          Pind Hood Records
        </h1>
        </div>
        <form action="" onSubmit={handleSubmit} className="login-page-form">
            <div className="login-or-create">
            <div className="create-account"><Link to="/register">Create</Link></div>
            {/* <div className="login"><Link to="/login" reloadDocument>Login</Link></div> */}
            </div>
            <div className="credentials-container">

              <div className="email">
              <label htmlFor="">Username/Email</label>
              </div>
            <div className="email">
              <input type="text" name='loginId' value={loginInfo.loginId} onChange={handleChange} required/>
              </div>
              <div className="password">
              <label htmlFor="">Password</label>
              </div>
            <div className="password">
              <input type="password" name ='password' value={loginInfo.password} onChange={handleChange} required/></div>
            </div>
            {error && <div className="error-message">{error}</div>}
            {message && <div className='success-message'> {message}</div>}
            <div className="login-button"><button>Login</button></div>
                
        </form>
      
    </div>
  )
}

export default LoginPage
