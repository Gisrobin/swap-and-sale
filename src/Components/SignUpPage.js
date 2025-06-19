import React, { useState } from 'react';
import './SignUpPage.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <div className="all-icons">
        <div className="arrow">←</div>
      </div>

      <div className="form-wrapper">
        <div className="texts">
          <p className="p1">Sign Up now to access your personal account</p>
          <p className="p2">Complete your sign up to access exclusive features</p>
        </div>

        <div className="login-signup">
          <button className="login">LOG IN</button>
          <button className="signup">SIGN UP</button>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="row">
            <div className="input-field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
            </div>
            <div className="input-field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
            </div>
          </div>

          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          <div className="input-field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />
          </div>

          <button type="submit" className="submit-btn">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
