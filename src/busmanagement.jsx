import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import './bus.css';


function BusManagement() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Declare routes outside of the function so it is available in the return JSX
  const routes = [
    { route: 'Route 1', driver: 'A B C Kumara', bus: 'ABC 1234' },
    { route: 'Route 2', driver: 'A B C Kumara', bus: 'ABC 1234' },
    { route: 'Route 3', driver: 'A B C Kumara', bus: 'ABC 1234' },
    { route: 'Route 4', driver: 'A B C Kumara', bus: 'ABC 1234' },
    { route: 'Route 5', driver: 'A B C Kumara', bus: 'ABC 1234' },
  ];

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
          <Link to="/homepage" className="nav-button-home-btn">Home</Link>
          <Link to="/register" className="nav-button-register-btn">Register</Link>
          <Link to="/homepage" className="nav-button-route-btn">Route Details</Link>
          <Link to="/reload" className="nav-button-reload-btn">Reload </Link>
          <Link to="/sos" className="nav-button-sos-btn">SOS</Link>
        </div>
      </div>

      <div className="route-management-container">
        <h2>Bus & Route Management</h2>
        <table className="route-table">
          <thead>
            <tr>
              <th>Route Name</th>
              <th>Driver Name</th>
              <th>Bus Number</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route, index) => (
              <tr key={index}>
                <td>{route.route}</td>
                <td>
                  {route.driver}
                  <select className="driver-dropdown">
                    <option value="A B C Kumara">A B C Kumara</option>
                    <option value="D E F Kumara">D E F Kumara</option>
                  </select>
                </td>
                <td>
                  {route.bus}
                  <select className="bus-dropdown">
                    <option value="ABC 1234">ABC 1234</option>
                    <option value="XYZ 5678">XYZ 5678</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            <button className="menu-item">Bus and Route Management</button>
            <button className="menu-item">Notification Management</button>
            <button className="menu-item">Refund Management</button>
            <Link to="/myprofile" className="menu-item">Settings</Link>
            <button className="menu-item logout">Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BusManagement;
