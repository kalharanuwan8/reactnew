import React, { useState, useRef } from 'react';
import './sidebar.css';
import './Registernew.css';
import { Link } from 'react-router-dom';
import { firestore } from './firebase';
import { addDoc, collection } from '@firebase/firestore';

function Registernew() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isPassenger, setIsPassenger] = useState(true);

  const handleToggleClick = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const handlePassengerClick = () => {
    setIsPassenger(true);
  };

  const handleDriverClick = () => {
    setIsPassenger(false);
  };

  const nameRef = useRef();
  const emailRef = useRef();
  const idRef = useRef();
  const contactRef = useRef();
  const guardianContactRef = useRef(); // For passenger-specific field
  const ref = collection(firestore, 'Adminreg1');

  const handleRegPassenger = async (e) => {
    e.preventDefault();
    // Collect form data
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      id: idRef.current.value,
      contact: contactRef.current.value,
      guardianContact: guardianContactRef.current.value,
      role: 'passenger', // This distinguishes the user as a passenger
    };

    try {
      // Add the data to Firestore
      await addDoc(ref, data);
      console.log('Passenger registered successfully!');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
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
          <Link to="/register" className="nav-button-register-btn">Register New User</Link>
          <Link to="/homepage" className="nav-button-route-btn">Route Details</Link>
          <Link to="/reload" className="nav-button-reload-btn">Reload</Link>
          <Link to="/sos" className="nav-button-sos-btn">SOS</Link>
        </div>
      </div>

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

      <div className="form-container">
        <input type="text" placeholder="Full Name" className="input-field" ref={nameRef} />
        <input type="email" placeholder="Email" className="input-field" ref={emailRef} />
        <input type="text" placeholder="Student / Staff ID" className="input-field" ref={idRef} />
        <input type="text" placeholder="Contact No." className="input-field" ref={contactRef} />

        {isPassenger ? (
          <>
            <input
              type="text"
              placeholder="Guardian's Contact No."
              className="input-field"
              ref={guardianContactRef}
            />
            <button className="register-button" onClick={handleRegPassenger}>
              Register as Passenger
            </button>
          </>
        ) : (
          <>
            <input type="password" placeholder="Password" className="input-field" />
            <input type="password" placeholder="Confirm Password" className="input-field" />
            <button className="register-button">Register as Driver</button>
          </>
        )}
      </div>

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
    </div>
  );
}

export default Registernew;
