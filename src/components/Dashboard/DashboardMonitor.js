import "./DashboardMonitor.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardMonitor = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState("");
  const [showMessageSection, setShowMessageSection] = useState(false);
  const [message, setMessage] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedUser(value);
    setShowMessageSection(value !== "");
  };

  const handleMessageChange = (event) => setMessage(event.target.value);

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message sent to ${selectedUser}`);
      setMessage("");
    } else {
      alert("Please enter a message before sending.");
    }
  };

  return (
    <div className="divisional-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, Post Office Head</h1>
        <p>Manage Swachhta, compliance, and staff effortlessly.</p>
      </div>

      <div className={`animated-section ${animate ? "slide-up" : ""}`}>
        <h2 className="section-heading">Overview</h2>
        <div className="dashboard-overview">
          <div className="overview-card">
            <h2>Compliance</h2>
            <p>80% Completed</p>
          </div>
          <div className="overview-card" onClick={() => navigate("/Alerts")}>
            <h2>Alerts</h2>
            <p>5 Active Alerts</p>
          </div>
          <div className="overview-card" onClick={() => navigate("/Reports")}>
            <h2>Reports</h2>
            <p>10 Pending Reports</p>
          </div>
        </div>
      </div>

      {/* Send Alert Message Section */}
      <div className={`alert-message-container animated-section ${animate ? "slide-up" : ""}`}>
        <div className="send-alert-section">
          <h2>Send Alert Message</h2>
          <select className="alert-dropdown" value={selectedUser} onChange={handleSelectChange}>
            <option value="">Select User</option>
            <option value="Post Office A">Post Office A</option>
            <option value="Post Office B">Post Office B</option>
          </select>
          {showMessageSection && (
            <div className="textarea-container">
              <textarea
                className="message-textarea"
                placeholder="Type your message here"
                value={message}
                onChange={handleMessageChange}
              />
              <button className="send-message-btn" onClick={handleSendMessage}>
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Report Management Section */}
      <div className={`report-management-container animated-section ${animate ? "slide-up" : ""}`}>
        <div className="report-management">
          <h2>Report Management</h2>
          <div className="report-cards">
            <div className="report-card">
              <h3>Pending Reports</h3>
              <ul>
                <li>• Missing Waste Bin</li>
                <li>• Late Compliance Submission</li>
              </ul>
            </div>
            <div className="report-card">
              <h3>Resolved Reports</h3>
              <ul>
                <li>• Broken Bin Replaced</li>
                <li>• Overdue Submission Cleared</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMonitor;
