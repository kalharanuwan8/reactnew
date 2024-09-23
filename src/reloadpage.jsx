import React, { useState } from 'react'; // Import useState
import './reloadpage.css';
import { Link } from 'react-router-dom';

const WalletReloadPage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleClick = () => {
    setIsSidebarVisible(prevState => !prevState);
  };

  // Function to handle 'By Card' click
  const handleCardPayment = () => {
    // Open the external Stripe payment link in a new tab
    window.open('http://127.0.0.1:5501/eshuttlereact/public/stripe_webview.html', '_blank');
  };

  return (
    <div className="wallet-reload-page"> {/* Added wrapper div for the entire page */}
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

        {/* Start of the new container */}
        <div className="form-container"> {/* New container for grouping form elements */}
          <div className="content">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search by User ID / Email"
                className="input-field"
              />
            </div>

            <div className="input-group">
              <input
                type="number"
                placeholder="Reload Amount"
                className="input-field"
              />
            </div>

            <div className="button-group1">
              <button className="action-button">By Cash</button>

              {/* By Card Button */}
              <button 
                className="action-button"
                onClick={handleCardPayment} // Add onClick to handle card payment
              >
                By Card
              </button>

              <button className="reload-button">Reload</button>
            </div>
          </div>
        </div>
        {/* End of the new container */}
      </div>

      {/* Sidebar: Conditional rendering based on state */}
      {isSidebarVisible && (
        <div className="sidebar visible">
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
};

export default WalletReloadPage;
