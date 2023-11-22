import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useLocation } from 'react-router-dom';
import {useNavigate, navigate } from "react-router-dom";
import  '../css/index.css';


function Register(props) {
  const location = useLocation(); // Get the location object from React Router
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [RegistrationSatus, setRegistrationStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (password !== ConfirmPassword) {
      console.log('Passwords do not match.');
      return;
    }
  };

  const register = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/register", {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    }).then((response) => {
      // setRegisterStatus(response);
      if(response.data.message){
        setRegistrationStatus(response.data.message);
      }else{
        setRegistrationStatus("ACCOUNT CREATED SUCCESSFULLY");
      }
    })
  }

  const LoginForm = () => {
    // Programmatically navigate to a specific route
    navigate('/LoginForm');
  };


  return (
    <div className="content">
      <form onSubmit={handleSubmit}>

    <p class="title">Реєстрація</p>

      <div className='registration_container_left'>
      <div>
        <p className='registration_text'>Name</p>
        <input className='registration_input'
          type="text"
          name="name"
          onChange={(e) => {setName(e.target.value)}}
          required/>
      </div>

      <div>
        <p className='registration_text'>Phone number</p>
        <input className='registration_input'
          type="text"
          name="phoneNumber"
          onChange={(e) => {setPhonenumber(e.target.value)}}
          required/>
      </div>

      <div>
        <p className='registration_text'>Email</p>
        <input className='registration_input'
          type="email"
          name="email"
          onChange={(e) => {setEmail(e.target.value)}}
          required/>
      </div>

      <div>
        <p className='registration_text'>Password</p>
        <input className='registration_input'
          type="password"
          name="password"
          onChange={(e) => {setPassword(e.target.value)}}
          required/>
      </div>

      <div>
        <p className='registration_text'>Confirm password</p>
        <input className='registration_input'
          type="password"
          name="confirmPassword"
          onChange={(e) => {setConfirmPassword(e.target.value)}}
          required/>
      </div>

      <div>
        <button className='registration_button' type="submit" onClick={register}>Sign Up</button>
          <div>
          <p className='registration_text'>Already have an account?</p>
          <a onClick={LoginForm} className='login_link'>Login</a>
          </div>
      </div>
      </div>

      <div className='registration_container_right'>
        <div className='registration_container_right_burger'></div>
      </div>


    </form>
    </div>
  );
}

export default Register;
