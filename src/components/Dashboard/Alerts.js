import React from "react";
import "./Alerts.css";

const Alerts = () => {
  return (
    <div className="alerts-page">
      {/* Header Section */}
      <div className="alerts-header">
        <h1>Divisional Office</h1>
        <p>Send alerts to the users seamlessly with elegance.</p>
      </div>

      {/* Form Section */}
      <div className="alerts-form-container">
        <h2 className="form-title">Send an Alert</h2>
        <form className="alerts-form">
          <div className="form-group">
            <label htmlFor="user-select">Select User</label>
            <select id="user-select" className="form-input">
              <option value="" disabled>
                Select User
              </option>
              <option value="User1">User 1</option>
              <option value="User2">User 2</option>
              <option value="User3">User 3</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="alert-message">Alert Message</label>
            <textarea
              id="alert-message"
              className="form-input"
              placeholder="Type your alert message here..."
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="alert-area">Area</label>
            <input
              id="alert-area"
              className="form-input"
              type="text"
              placeholder="Enter area..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="alert-details">Details</label>
            <textarea
              id="alert-details"
              className="form-input"
              placeholder="Enter additional details..."
              rows="3"
            ></textarea>
          </div>

          <button type="submit" className="form-button">
            Send Alert
          </button>
        </form>
      </div>
    </div>
  );
};

export default Alerts;
