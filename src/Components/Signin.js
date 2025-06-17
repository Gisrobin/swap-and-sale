import React, { useState } from "react";
import './Signin.css';
import { useNavigate } from 'react-router-dom';
import image1 from '../images/image1.jpg'
import image2 from '../images/Facebook_Logo_(2019).png';
import image3 from '../images/Google__G__logo.svg';

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/dashboard');
    }
  };

  return (
    <div
      className="container signin-scroll"
      style={{
        minHeight: "100vh",
        maxHeight: "100vh",
        overflowY: "auto",
        boxSizing: "border-box",
        padding: "0 2vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div className="all-icons">
        <div className="time"><span>9:41</span></div>
        <div className='icons'>
          <span><i className="fa-solid fa-signal"></i></span>
          <span><i className="fa-solid fa-wifi"></i></span>
          <span><i className="fa-solid fa-battery-full"></i></span>
        </div>
      </div>

      <div className="arrow">
        <span><i className="fa-solid fa-arrow-left"></i></span>
      </div>

      <div className="texts">
        <p className="p1">Login and <br />setup your profile</p>
        <p className="p2">complete your sign up to access the exclusive features</p>
      </div>

      <div className="container2">
        <div className="form">
          <form onSubmit={handleSignIn}>
            <div className="login-signup">
              <button className="login" type="button">LOG IN</button>
              <button className="signup" type="button">SIGN UP</button>
            </div>
            <div className="email">
              <label>Email</label>
              <input
                className="emailInput"
                type="email"
                placeholder="Type your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: "100%", minWidth: 0 }}
              />
            </div>
            <div className="password">
              <label>Password</label>
              <input
                className="passwordInput"
                type="password"
                placeholder="Type your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ width: "100%", minWidth: 0 }}
              />
            </div>
            <button className="signinButton" type="submit" style={{ width: "100%", margin: "16px 0" }}>SIGN IN</button>

            <div className="last-buttons">
              <div className="google">
                <button className="google-button" type="button" style={{ width: "100%" }}>
                  <img src={image3} alt="Google icon" className="google-image" />
                  GOOGLE
                </button>
              </div>
              <div className="facebook">
                <button className="facebook-icon" type="button" style={{ width: "100%" }}>
                  <img src={image2} alt="Facebook logo" className="facebook-image" />
                  FACEBOOK
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signin;