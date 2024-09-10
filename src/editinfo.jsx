import React from 'react';
import './EditUser.css';  // Ensure this file has the appropriate styles

function EditUserDetails() {

  const handleSave = () => {
    // Add your save functionality here
    console.log('Changes saved!');
  };

  const handleDelete = () => {
    // Add your delete functionality here
    console.log('User deleted!');
  };

  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
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

      {/* Main Content Area */}
      <div className="content-area">
        {/* Form Section */}
        <div className="form-container">
          <input type="text" placeholder="Full Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input type="text" placeholder="Student / Staff ID" className="input-field" />
          <input type="text" placeholder="Contact No." className="input-field" />
          <input type="text" placeholder="Guardian's Contact No." className="input-field" />

          {/* Action buttons for search, delete and edit */}
          <div className="action-buttons">
            <input type="text" placeholder="Search by User ID / Email" className="input-field search-input" />
            <button className="nav-button" onClick={handleDelete}>Delete User</button>
            <button className="nav-button" onClick={handleSave}>Edit</button>
          </div>

          {/* Save changes button */}
          <button className="save-button" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default EditUserDetails;
