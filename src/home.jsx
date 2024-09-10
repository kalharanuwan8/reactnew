import React from 'react';
import './homepage.css'; // You can create a CSS file for custom styles

function Homepage() {
  return (
    <div className="dashboard-container">
      <div className="nav-bar">
        <div className="user-greeting">
          <span>Hello User...</span>
        </div>
        <div className="nav-buttons">
          <button className="nav-button home-btn">Home</button>
          <button className="nav-button register-btn">Register New Passenger/Driver</button>
          <button className="nav-button edit-btn">Edit User Details</button>
          <button className="nav-button reload-btn">Reload Passenger E-Wallet</button>
          <button className="nav-button sos-btn">SOS</button>
        </div>
      </div>
      <div className="content-area">
        {/* You can place the rest of the page content here */}
      </div>
    </div>
  );
}

export default Homepage;
