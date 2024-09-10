import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook for navigation
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the entered email and password match the hardcoded credentials
    if (email === 'blablaa@gmail.com' && password === 'Hi1234!') {
      // Redirect to homepage (you can define the route '/homepage' in your App.js)
      navigate('/homepage');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      {/* Left Section */}
      <div className="left-section">
        <img 
          src="your_logo_url_here" 
          alt="E-Shuttle Logo" 
          className="logo"
        />
        <h2 className="login-title">Admin Login</h2>
        <p className="welcome-text">It's nice to see you again!</p>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Email / Staff ID" 
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
