import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './myprofile.css';

const MyProfile = () => {
  // State to manage sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // State for form inputs (name, email, address)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  // Toggle sidebar visibility
  const handleToggleClick = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <button
          className="toggle-button"
          onClick={handleToggleClick}
          aria-label="Toggle sidebar"
        >
          <span aria-hidden="true">☰</span>
        </button>

        <div className="user-greeting">
          <span>Hello Admin...!</span>
        </div>

        <div className="nav-buttons">
          <Link to="/homepage" className="nav-button home-btn">Home</Link>
          <Link to="/register" className="nav-button register-btn">Register New Passenger/Driver</Link>
          <Link to="/route-details" className="nav-button route-btn">Route Details</Link>
          <Link to="/reload" className="nav-button reload-btn">Reload Passenger E-Wallet</Link>
          <Link to="/sos" className="nav-button sos-btn">SOS</Link>
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="sidebar visible">
          <button className="close-button" onClick={handleToggleClick}>×</button>

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
    
      {/* Profile Section */}
      <div className="container2">
            <div className='leftside'>
                
                    <button className='Settings'>Profile</button>
                    <button className='Settings'>Security</button>
                    <button className='Settings'>Reports</button>
                    <button className='Settings'>LogOut</button>
                
            </div>
            <div className='rightside'>

                {/* Circular Image Placeholder */}
                <div className="profile-image">
                    <img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                    className="profile-pic"
                    />
                </div>

                {/* Profile Form */}
                <form className="profile-form">
                    <div className="form-group">
                    <label htmlFor="name">NAME:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">EMAIL:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="address">ADDRESS:</label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter your address"
                    />
                    </div>
                </form>

                {/* Edit Button */}
                <button className="edit-button">Edit Info</button>
                </div>
                </div>
    </div>
  );
};

export default MyProfile;
