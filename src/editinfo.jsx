import React, { useState } from 'react';
import './EditUser.css';  // Ensure this file has the appropriate styles
import { Link } from 'react-router-dom';

function EditUserDetails() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleToggleClick = () => {
        setIsSidebarVisible(prevState => !prevState);
    };

    const handleDelete = () => {
        // Add your delete functionality here
        console.log('User deleted!');
    };

    const handleSave = () => {
        // Add your save functionality here
        console.log('Changes saved!');
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
                <div className="user-greeting">
                    <span>Hello User...</span>
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
            <div className="content-area">
                {/* Form Section */}
                <div className="form-container">
                <div class="search-container">
                      <input type="text" class="search-input" placeholder="Search by User ID / Email"/>
                      <div class="action-buttons">
                        <button class="delete-user">Delete User</button>
                        <button class="edit-user">Edit</button>
                       </div>
                    </div>
                    <input type="text" placeholder="Full Name" className="input-field" />
                    <input type="email" placeholder="Email" className="input-field" />
                    <input type="text" placeholder="Student / Staff ID" className="input-field" />
                    <input type="text" placeholder="Contact No." className="input-field" />
                    <input type="text" placeholder="Guardian's Contact No." className="input-field" />

                    {/* Action buttons for search, delete and edit */}
                    

                    {/* Save changes button */}
                    <button className="save-button" onClick={handleSave}>Save Changes</button>
                </div>
            </div>

            {/* Sidebar Section */}
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
                        <button className="menu-item">Settings</button>
                        <button className="menu-item logout">Log Out</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EditUserDetails;
