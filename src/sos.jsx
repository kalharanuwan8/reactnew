import React from 'react';
import './sos.css'; // Import the CSS file

const Sos = () => {
  return (
    <div className="sos-page-container">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="nav-item">Hello Admin...!</div>
        <button className="nav-button">Home</button>
        <button className="nav-button">Register New Passenger/Driver</button>
        <button className="nav-button">Route Details</button>
        <button className="nav-button">Reload Passenger E-Wallet</button>
        <button className="nav-button orange-button">SOS</button>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* SOS Request Section */}
        <div className="sos-section">
          <h2>User SOS Requests</h2>
          <table className="sos-table">
            <thead>
              <tr>
                <th>UserID</th>
                <th>Time</th>
                <th>Route</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Track User Section */}
        <div className="track-user-section">
          <h3>Track User By ID</h3>
          <input type="text" placeholder="User ID" className="user-input" />
          <button className="track-button">Locate user</button>
        </div>
      </div>
    </div>
  );
}

export default Sos;
