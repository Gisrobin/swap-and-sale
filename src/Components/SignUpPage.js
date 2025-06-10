import React, { useState } from 'react';
import './Signin.css';
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
    <div className="w-full h-screen bg-gradient-to-b from-indigo-500 to-blue-700 flex flex-col items-center justify-start text-white font-sans p-6">
      <div className="w-full max-w-md">
        <button className="text-white mb-4 text-xl">←</button>
        <h2 className="text-2xl font-bold mb-2">Sign Up now to access your personal account</h2>
        <p className="text-sm mb-6">Complete your sign up to access the exclusive features</p>
        <div className="flex justify-between bg-white/20 p-1 rounded-full mb-6">
          <button className="w-1/2 py-2 text-center text-white">LOG IN</button>
          <button className="w-1/2 py-2 text-center bg-white text-blue-700 rounded-full font-semibold">SIGN UP</button>
        </div>
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md text-white rounded-2xl p-6 space-y-4 shadow-lg">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gray-300 text-blue-900 font-semibold py-3 rounded-lg hover:bg-gray-400 transition"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;