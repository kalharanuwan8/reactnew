import React from 'react';
import './reloadpage.css';

const WalletReloadPage = () => {
  
  // Function to handle 'By Card' click
  const handleCardPayment = () => {
    // Open the external Stripe payment link in a new tab
    window.open('http://127.0.0.1:5501/eshuttlereact/public/stripe_webview.html', '_blank');
  };

  return (
    <div className="homepage-container">
      <div className="navbar">
        <button className="nav-button">Hello User...</button>
        <button className="nav-button">Home</button>
        <button className="nav-button">Register New Passenger/Driver</button>
        <button className="nav-button">Edit User Details</button>
        <button className="nav-button orange-button">Reload Passenger E-Wallet</button>
        <button className="nav-button">SOS</button>
      </div>

      <div className="content">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search by User ID / Email"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Rs. 00.00"
            className="input-field balance"
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
  );
};

export default WalletReloadPage;
