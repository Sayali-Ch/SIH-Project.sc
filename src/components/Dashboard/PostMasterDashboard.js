import React, { useState } from 'react';
import Sidebar from '../Sidebar';  // Adjusted path for Sidebar
import { Line, Pie } from 'react-chartjs-2';
import './PostMasterDashboard.css';


const PostMasterDashboard = () => {
  const [activeTab, setActiveTab] = useState('cleanliness');
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const cleanlinessMonthlyData = [75, 78, 82, 85, 88, 90, 91, 92, 94, 93, 95, 96];
  const cleanlinessPieData = {
    labels: ['Clean', 'Unclean'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return (
    <div className={`dashboard-container ${isSidebarVisible ? 'with-sidebar' : 'full-width'}`}>
      <Sidebar setActiveTab={setActiveTab} toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
      
      <div className="content-wrapper">
        <div className="dashboard-header">
          <h2>{activeTab === 'cleanliness' ? 'Cleanliness Level' : 'Garbage Tracking'}</h2>
        </div>

        <div className="chart-container">
          <div className="card line-chart">
            <h3>Cleanliness Level Over Time</h3>
            <Line
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                  {
                    label: 'Cleanliness Level (%)',
                    data: cleanlinessMonthlyData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    tension: 0.1,
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                      callback: (value) => `${value}%`,
                    },
                  },
                },
              }}
            />
          </div>

          <div className="card pie-chart">
            <h3>Cleanliness Level Breakdown</h3>
            <Pie data={cleanlinessPieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMasterDashboard;
