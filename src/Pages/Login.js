import React, { useState } from 'react';
import Axios from "axios";
import {useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoginSatus, setLoginStatus] = useState("");

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          if (data.token) {
            // Store the token in local storage
            localStorage.setItem('token', data.token);
  
            if (data.email_verified_at === null) {
              // Email is not verified, navigate to EmailVerification
              navigate('/EmailVerification', { state: { email: email } });
            } else {
              // Email is already verified, you can navigate to another page
              navigate('/MainPage'); // Replace 'MainPage' with the desired page
            }
          } else {
            alert("Token not received");
          }
        } else {
          alert("Bad data");
        }
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        alert(error);
      });
  };
  
  

  const EmailVerification = () => {
    // Programmatically navigate to a specific route
    navigate('/EmailVerification');
  };

  const SignUpForm = () => {
    // Programmatically navigate to a specific route
    navigate('/SignUpForm');
  };
//<</form>button type="button" onClick={SignUpForm}>Sign Up</button>
  return (
    <div className='content'>
      <form>
        <h2>Login</h2>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        <div>
            <button type="submit" onClick={login}>Login</button>
              <div>
              <h5>Don't have an account?</h5>
              <a onClick={SignUpForm}>Register</a>
              </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
