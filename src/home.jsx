import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';
import './sidebar.css'

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

        <div className="nav-buttons">
        {/* Link the buttons to their respective paths */}
          <Link to="/homepage" className="nav-button-home-btn">Home</Link>
          <Link to="/register" className="nav-button-register-btn">Register New User</Link>
          <Link to="/homepage" className="nav-button-route-btn">Route Details</Link>
          <Link to="/reload" className="nav-button-reload-btn">Reload</Link>
          <Link to="/sos" className="nav-button-sos-btn">SOS</Link>
        </div>
      </div>

      

      <div className="content-area">
      Current status of the E-Shuttle
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
         <button className="menu-item">User Management</button>
         <Link to = "/busmanagement" className='menu-item'>Bus and Route Management</Link>
         <Link to = "/notification" className='menu-item'>Notification Management</Link>
         <button className="menu-item">Refund Management</button>
         <Link to = "/myprofile" className="menu-item">Settings</Link>
         <button className="menu-item logout">Log Out</button>
       </div>
       
     </div>
     
      )}
    </div>
  );
}

export default Homepage;
