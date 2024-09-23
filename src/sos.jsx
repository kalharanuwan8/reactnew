import React, { useState } from 'react'; // Import useState from React
import './sos.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Sos = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleClick = () => {
    setIsSidebarVisible(prevState => !prevState);
  };

  return (
    <div className="sos-page-container">
      {/* Navigation Bar */}
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

      {/* Main Content Area */}
      <div className="main-content">
        {/* SOS Request Section */}
        <div className="sos-section">
          <h2>User SOS Requests</h2>
          <table className="sos-table">
            <thead>
              <tr>
                <th>UserID</th>
                <th>Time</th>
                <th>Route</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Track User Section */}
        <div className="track-user-section">
          <h3>Track User By ID</h3>
          <input type="text" placeholder="User ID" className="user-input" />
          <button className="track-button">Locate user</button>
        </div>
      </div>

      {/* Sidebar: Conditional rendering based on state */}
      {isSidebarVisible && (
                <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
          <button className="close-button" onClick={handleToggleClick}>
            ×
          </button> {/* Close button */}

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
};

export default Sos;
