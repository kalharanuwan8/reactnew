import React, { useState } from 'react';
import './notification.css';  // Make sure this CSS file is included
import './sidebar.css';       // Assuming the sidebar styles are in this file
import { Link } from 'react-router-dom';

function Notification() {
  // State for selected route, recipient type, message, and sidebar visibility
  const [selectedRoute, setSelectedRoute] = useState('');
  const [recipientType, setRecipientType] = useState('');
  const [message, setMessage] = useState('');
  const [recentNotifications, setRecentNotifications] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const routes = ['Awissawella', 'Route 2', 'Route 3'];
  const recipientTypes = ['Passengers', 'Drivers'];

  // Toggle sidebar visibility
  const handleToggleClick = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleSend = () => {
    if (selectedRoute && recipientType && message) {
      const newNotification = {
        route: selectedRoute,
        recipient: recipientType,
        notification: message,
      };
      setRecentNotifications([...recentNotifications, newNotification]);
      setMessage('');  // Clear message after sending
    } else {
      alert("Please select a route, recipient type, and message.");
    }
  };

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
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
          <Link to="/route" className="nav-button-route-btn">Route Details</Link>
          <Link to="/reload" className="nav-button-reload-btn">Reload</Link>
          <Link to="/sos" className="nav-button-sos-btn">SOS</Link>
        </div>
      </div>

      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="sidebar">
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
            <Link to="/busmanagement" className="menu-item">Bus and Route Management</Link>
            <Link to="/notification" className="menu-item">Notification Management</Link>
            <button className="menu-item">Refund Management</button>
            <Link to="/myprofile" className="menu-item">Settings</Link>
            <button className="menu-item logout">Log Out</button>
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="content-area">
        <h2>Notification Management</h2>
    
        <div className="notification-controls">
          {/* Select Route */}
          <div className="control-group">
            <label>Select Route</label>
            <select 
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value)}
            >
              <option value="">-- Select Route --</option>
              {routes.map((route, index) => (
                <option key={index} value={route}>
                  {route}
                </option>
              ))}
            </select>
            </div>

          {/* Select Recipient */}
          <div className="control-group">
            <label>Select Recipient</label>
            <select 
              value={recipientType}
              onChange={(e) => setRecipientType(e.target.value)}
            >
              <option value="">-- Select Recipient --</option>
              {recipientTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
         
            </div>
          {/* Message Input */}
          <div className="control-group">
            <textarea 
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
         

          {/* Send Button */}
          <button className="send-btn" onClick={handleSend}>
            Send
          </button>
          <div className="recent-notifications">
          <h3>Recent Notifications</h3>
          <table>
            <thead>
              <tr>
                <th>Route</th>
                <th>Recipient</th>
                <th>Notification</th>
              </tr>
            </thead>
            <tbody>
              {recentNotifications.map((notification, index) => (
                <tr key={index}>
                  <td>{notification.route}</td>
                  <td>{notification.recipient}</td>
                  <td>{notification.notification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>  

        {/* Recent Notifications */}
        
      </div>
    </div>
    </div>
  );
}

export default Notification;
