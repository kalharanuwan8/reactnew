import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './myprofile.css';
import './sidebar.css';

const MyProfile = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isSidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle section change for profile, security, and reports
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  // Handle edit and save actions in profile section
  const handleEditClick = () => {
    setActiveSection('editProfile');
  };

  const handleSaveClick = () => {
    setActiveSection('profile');
  };

  // Toggle sidebar visibility
  const handleToggleClick = () => {
    setSidebarVisible(!isSidebarVisible); // Toggle the sidebar visibility
  };

  return (
    <div className="dashboard-container">
      {/* Navigation bar */}
      <div className="nav-bar">
        <button
          className="toggle-button"
          onClick={handleToggleClick}
          aria-label="Toggle sidebar"
        >
          <span aria-hidden="true">☰</span> {/* Hamburger menu icon */}
        </button>
        <div className="nav-buttons">
          <Link to="/homepage" className="nav-button home-btn">Home</Link>
          <Link to="/register" className="nav-button register-btn">Register New Passenger/Driver</Link>
          <Link to="/route-details" className="nav-button route-btn">Route Details</Link>
          <Link to="/reload" className="nav-button reload-btn">Reload Passenger E-Wallet</Link>
          <Link to="/sos" className="nav-button sos-btn">SOS</Link>
        </div>
      </div>

      {/* Main content container */}
      <div className="container2">
        <div className='leftside'>
          <button className='Settings' onClick={() => handleSectionClick('profile')}>Profile</button>
          <button className='Settings' onClick={() => handleSectionClick('security')}>Security</button>
          <button className='Settings' onClick={() => handleSectionClick('reports')}>Reports</button>
          <button className='Settings'>LogOut</button>
        </div>

        {/* Profile Section */}
        {activeSection === 'profile' && (
          <div className='rightside'>
            <div className="profile-image">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="profile-pic"
              />
            </div>

            <form className="profile-form">
              <div className="form-group">
                <label htmlFor="name">NAME:</label>
                <p>{formData.name || "John Doe"}</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL:</label>
                <p>{formData.email || "blablaa@gmail.com"}</p>
              </div>
              <div className="form-group">
                <label htmlFor="address">ADDRESS:</label>
                <p>{formData.address || "Your address here"}</p>
              </div>
            </form>

            <button className="edit-button" onClick={handleEditClick}>Edit Info</button>
          </div>
        )}

        {/* Edit Profile Section */}
        {activeSection === 'editProfile' && (
          <div className='rightside'>
            <div className="profile-image">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="profile-pic"
              />
            </div>

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

            <button className="edit-button" onClick={handleSaveClick}>Save Info</button>
          </div>
        )}

        {/* Security Section */}
        {activeSection === 'security' && (
          <div className='rightside'>
            <div className='security-section'>
              <button className='security-button'>Change Password</button>
              <button className='security-button'>All Active Sessions</button>
              <button className='security-button'>Passenger Activities</button>
            </div>
          </div>
        )}

        {/* Reports Section */}
        {activeSection === 'reports' && (
          <div className='rightside'>
            <h2>Reports</h2>
            <p>View and manage your activity reports here.</p>
          </div>
        )}
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
              <img src="https://via.placeholder.com/100" alt="Profile" className="profile-pic" />
            </div>
            <div className="user-info">
              <p>username</p>
              <p>user@email.com</p>
            </div>
          </div>
        
          <div className="menu-items">
            <button className="menu-item">User Management</button>
            <Link to="/busmanagement" className="menu-item">Bus and Route Management</Link>
            <button className="menu-item">Notification Management</button>
            <button className="menu-item">Refund Management</button>
            <Link to="/myprofile" className="menu-item">Settings</Link>
            <button className="menu-item logout">Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
