import React, { useState } from 'react';
import './Registernew.css';

function Registernew() {
  const [isPassenger, setIsPassenger] = useState(true);

  const handlePassengerClick = () => {
    setIsPassenger(true);
  };

  const handleDriverClick = () => {
    setIsPassenger(false);
  };

  return (
    <div className="homepage-container">
      <div className="navbar">
        <button className="nav-button">Hello Admin...!</button>
        <button className="nav-button">Home</button>
        <button className="nav-button orange-button">Register New Passenger/Driver</button>
        <button className="nav-button">Edit User Details</button>
        <button className="nav-button">Reload Passenger E-Wallet</button>
        <button className="nav-button">SOS</button>
      </div>

      {/* Updated: Single button container for both passenger and driver */}
      <div className="button-container">
        <button
          className={`register-toggle ${isPassenger ? 'active' : ''}`}
          onClick={handlePassengerClick}
        >
          Register as Passenger
        </button>
        <button
          className={`register-toggle ${!isPassenger ? 'active' : ''}`}
          onClick={handleDriverClick}
        >
          Register as Driver
        </button>
      </div>

      {/* Form Section */}
      <div className="form-container">
        <input type="text" placeholder="Full Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="text" placeholder="Student / Staff ID" className="input-field" />
        <input type="text" placeholder="Contact No." className="input-field" />

        {isPassenger ? (
          <>
            <input type="text" placeholder="Guardian's Contact No." className="input-field" />
            <button className="register-button">Register as Passenger</button>
          </>
        ) : (
          <>
            <input type="password" placeholder="Password" className="input-field" />
            <input type="password" placeholder="Confirm Password" className="input-field" />
            <button className="register-button">Register as Driver</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Registernew;
