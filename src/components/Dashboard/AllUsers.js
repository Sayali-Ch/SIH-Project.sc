import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllUsers.css';

const AllUsers = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState('');
  const [message, setMessage] = useState('');

  const users = [
    { id: 1, name: 'abcd', email: 'wabalo5693@anypng.com' },
    { id: 2, name: 'efgh', email: 'example2@domain.com' },
    // Add more users here
  ];

  const handleUserChange = (e) => {
    const selectedEmail = e.target.value;
    setSelectedUser(selectedEmail);
    setMessage(''); // Reset message when a new user is selected
  };

  const handleSendMessage = () => {
    if (selectedUser && message) {
      alert(`Message sent to ${selectedUser}: ${message}`);
      setMessage('');
    } else {
      alert('Please select a user and write a message.');
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="all-users-container">
      <h1>Admin Dashboard</h1>
      <div className="user-selection">
        <label htmlFor="user-select">User Details:</label>
        <select
          id="user-select"
          value={selectedUser}
          onChange={handleUserChange}
        >
          <option value="">Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.email}>
              {user.name} ({user.email})
            </option>
          ))}
        </select>
      </div>
      {selectedUser && (
        <div className="message-section">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="button-group">
            <button className="send-message-btn" onClick={handleSendMessage}>
              Send Message
            </button>
            <button className="back-btn" onClick={handleBack}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
