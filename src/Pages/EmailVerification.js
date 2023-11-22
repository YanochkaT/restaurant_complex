import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useLocation } from 'react-router-dom';
import {useNavigate, navigate } from "react-router-dom";

function EmailVerification() {
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");
  const location = useLocation(); // Get the location object from React Router
  const email = location.state ? location.state.email : ''; // Get the email from location.state
  const navigate = useNavigate();

  const handleVerification = () => {
    // Send a request to your backend to verify the code
    Axios.post("http://localhost:3001/verify-code", {
      email: email,
      verificationCode: verificationCode,
    })
      .then((response) => {
        if (response.status === 200) {
          setVerificationStatus("Verification successful");
          navigate('/main');
        } else {
          setVerificationStatus("Verification failed");
        }
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        setVerificationStatus("Verification failed");
      });
  };

  return (
    <div className="content">
    <div className="centered-input-box">
      <input
        type="text"
        placeholder="Enter verification code..."
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <div className="button_el">
      <button type="button" onClick={handleVerification}>Enter</button>
      </div>
      <div className="verification-status">{verificationStatus}</div>
    </div>
    </div>
  );
}

export default EmailVerification;
