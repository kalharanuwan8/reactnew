import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function Homepage() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleClick = () => {
    setIsSidebarVisible(prevState => !prevState);
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

      <div className="content-area">
        <h2>Current status of the E-Shuttle</h2>
        <div className="status-cards">
          <div className="status-card">No. of Passengers: 14</div>
          <div className="status-card">No. of Drivers: 5</div>
          <div className="status-card">Ongoing Trips: 5</div>
          <div className="status-card">No. of Buses in Use: 7</div>
        </div>
      </div>

      {/* Sidebar: Conditional rendering based on state */}
      {isSidebarVisible && (
                <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
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
         <Link to = "/myprofile" className="menu-item">User Management</Link>
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

export default Homepage;
