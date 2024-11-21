import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardTimeframeSelector = () => {
  const [timeframe, setTimeframe] = useState('Weekly');
  const [chartData, setChartData] = useState({
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Dataset',
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  });

  const weeklyLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const monthlyLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const yearlyLabels = [(new Date().getFullYear() - 2).toString(), (new Date().getFullYear() - 1).toString(), new Date().getFullYear().toString()];

  useEffect(() => {
    if (timeframe === 'Weekly') {
      setChartData({
        labels: weeklyLabels,
        datasets: [
          {
            label: 'Dataset',
            data: weeklyLabels.map(() => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      });
    } else if (timeframe === 'Monthly') {
      setChartData({
        labels: monthlyLabels,
        datasets: [
          {
            label: 'Dataset',
            data: monthlyLabels.map(() => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      });
    } else if (timeframe === 'Yearly') {
      setChartData({
        labels: yearlyLabels,
        datasets: [
          {
            label: 'Dataset',
            data: yearlyLabels.map(() => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
        ],
      });
    }
  }, [timeframe]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Data Displayed for ${timeframe}`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Period',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Values',
        },
      },
    },
  };

  return (
    <div>
      <h2>Select Timeframe</h2>
      <div>
        <button onClick={() => setTimeframe('Weekly')}>Weekly</button>
        <button onClick={() => setTimeframe('Monthly')}>Monthly</button>
        <button onClick={() => setTimeframe('Yearly')}>Yearly</button>
      </div>

      <div style={{ width: '80%', margin: '0 auto' }}>
        <Bar key={timeframe} data={chartData} options={options} />
      </div>
    </div>
  );
};

export default DashboardTimeframeSelector;
