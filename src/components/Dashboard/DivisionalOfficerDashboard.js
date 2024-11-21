import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DivisionalOfficerDashboard.css';

const DivisionalOfficerDashboard = () => {
  const navigate = useNavigate();

  const handleMonitorPOs = () => {
    navigate('/dashboardmonitor');
  };

  const handleViewPostMasters = () => {
    navigate('/allusers');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Welcome, Divisional Officer</h1>
        <p>
          Seamlessly manage Swachhta and LiFE practices across all post offices
          in your division with an intuitive and powerful dashboard.
        </p>
        <div className="dashboard-buttons">
          <button onClick={handleMonitorPOs} className="dashboard-btn">
            Monitor P/Os
          </button>
          <button onClick={handleViewPostMasters} className="dashboard-btn">
            View All Post Masters
          </button>
        </div>
        <div className="popup-message">
          For Divisional Officers Only
        </div>
      </div>
    </div>
  );
};

export default DivisionalOfficerDashboard;
