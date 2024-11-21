import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DivisionalOfficerLogin.css';

const DivisionalOfficerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true

    // Simulate a delay for login processing (e.g., API call)
    setTimeout(() => {
      if (username.trim() === 'admin' && password.trim() === 'admin123') {
        setError(''); // Clear error message
        setIsLoading(false); // Reset loading state
        navigate('/divisional-officer-dashboard'); // Redirect to dashboard
      } else {
        setError('Invalid username or password. Please try again.');
        setIsLoading(false); // Reset loading state
      }
    }, 1000); // Simulated delay of 1 second
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Divisional Officer Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="text"
              className="input-field"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <button
              type="submit"
              className="login-button"
              disabled={isLoading} // Disable button during loading
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DivisionalOfficerLogin;
