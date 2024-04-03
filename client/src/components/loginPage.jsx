import React from 'react'

import { useState,useEffect } from 'react'
import '../styles/loginPage.css'
import {Link} from 'react-router-dom'



function LoginPage() {

  // const [loginInfo,setLoginInfo] = useState({
  //   email : "",
  //   password:"",
  // })

  // const handleSubmit = async(e)=>{
  //   e.preventDefault();
  //   let data =await fetch(`${process.env.REACT_APP_BACKEND_URL}/signin`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(loginInfo),
  //   });
  //   console.log(process.env.REACT_APP_BACKEND_URL);
  //   console.log(loginInfo);

  // }
  return (

    
    <div className='login-page-container'>
        <div className="navbar-size-div">

        </div>
        <div className="login-page-header">
        <h1>
          Pind Hood Records
        </h1>
        </div>
        <form action=""  className="login-page-form">
            <div className="login-or-create">
            <div className="create-account"><Link to="/register">Create</Link></div>
            <div className="login"><Link to="/loginpage" reloadDocument>Login</Link></div>
            </div>
            <div className="credentials-container">

              <div className="email">
              <label htmlFor="">Email</label>
              </div>
            <div className="email">
              <input type="email" required/>
              </div>
              <div className="password">
              <label htmlFor="">Password</label>
              </div>
            <div className="password"><input type="password" required/></div>
            </div>

            <div className="login-button"><button>Login</button></div>
                
        </form>
      
    </div>
  )
}

export default LoginPage
