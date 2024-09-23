import React, { useState } from 'react';
import './Registernew.css';
import { Link } from 'react-router-dom';

function Registernew() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isPassenger, setIsPassenger] = useState(true);  // Initialize isPassenger state

  const handleToggleClick = () => {
    setIsSidebarVisible(prevState => !prevState);
  };

  const handlePassengerClick = () => {
    setIsPassenger(true);  // Switch to Passenger registration
  };

  const handleDriverClick = () => {
    setIsPassenger(false);  // Switch to Driver registration
  };

  return (
    <div className="dashboard-container">
      <div className="nav-bar">
        <button
          className="toggle-button"
          onClick={handleToggleClick}
          aria-label="Toggle sidebar"
        >
          <span aria-hidden="true">☰</span> {/* Hamburger menu icon */}
        </button>

        <div className="user-greeting">
          <span>Hello Admin...!</span>
        </div>

        <div className="nav-buttons">
        {/* Link the buttons to their respective paths */}
          <Link to="/homepage" className="nav-button home-btn">Home</Link>
          <Link to="/register" className="nav-button register-btn">Register New Passenger/Driver</Link>
          <Link to="/homepage" className="nav-button route-btn">Route Details</Link>
          <Link to="/reload" className="nav-button reload-btn">Reload Passenger E-Wallet</Link>
          <Link to="/sos" className="nav-button sos-btn">SOS</Link>
        </div>
      </div>

      {/* Updated: Single button container for both passenger and driver */}
      <div className="button-container">
        <button
          className={`register-toggle ${isPassenger ? 'active' : ''}`}
          onClick={handlePassengerClick}
        >
          Register as Passenger
        </button>
        <button
          className={`register-toggle ${!isPassenger ? 'active' : ''}`}
          onClick={handleDriverClick}
        >
          Register as Driver
        </button>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <input type="text" placeholder="Full Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="text" placeholder="Student / Staff ID" className="input-field" />
        <input type="text" placeholder="Contact No." className="input-field" />

        {isPassenger ? (
          <>
            <input type="text" placeholder="Guardian's Contact No." className="input-field" />
            <button className="register-button">Register as Passenger</button>
          </>
        ) : (
          <>
            <input type="password" placeholder="Password" className="input-field" />
            <input type="password" placeholder="Confirm Password" className="input-field" />
            <button className="register-button">Register as Driver</button>
          </>
        )}
      </div>

      {/* Sidebar: Conditional rendering based on state */}
      {isSidebarVisible && (
        <div className="sidebar visible">
          <button className="close-button" onClick={handleToggleClick}>×</button> {/* Close button */}

          <div className="logo-section">
            <img src="logo.png" alt="E-Shuttle Logo" className="logo" />
            <h3>E-Shuttle</h3>
            <p>Journey for Comfort</p>
          </div>

          <div className="admin-section">
            <h4>Admin Portal</h4>
            <div className="profile-image">
              {/* Placeholder for the profile image */}
            </div>
            <div className="user-info">
              <p>username</p>
              <p>user@email.com</p>
            </div>
          </div>

          <div className="menu-items">
            <button className="menu-item">User Management</button>
            <button className="menu-item">Bus and Route Management</button>
            <button className="menu-item">Notification Management</button>
            <button className="menu-item">Refund Management</button>
            <button className="menu-item">Settings</button>
            <button className="menu-item logout">Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registernew;
