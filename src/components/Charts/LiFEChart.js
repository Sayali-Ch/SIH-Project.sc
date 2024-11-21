import React, { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js';

const liFEData = {
  monthly: [20, 18, 25, 22, 30, 40, 35],
  weekly: [10, 15, 18, 22, 12, 14, 18],
  yearly: [200, 250, 240]
};

const LiFEChart = () => {
  const [timeRange, setTimeRange] = useState('monthly');

  // Function to render the chart
  const renderChart = (timeRange) => {
    const canvas = document.getElementById('lifeChartCanvas');
    const existingChart = ChartJS.getChart(canvas); // Check if a chart already exists

    // Destroy the existing chart if it exists
    if (existingChart) {
      existingChart.destroy();
    }

    const chartData = liFEData[timeRange];

    new ChartJS(canvas, {
      type: 'bar',
      data: {
        labels: timeRange === 'monthly' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] :
               timeRange === 'weekly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'] :
               ['2022', '2023', '2024'],
        datasets: [
          {
            label: 'LiFE Data',
            data: chartData,
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `LiFE Data - ${timeRange.charAt(0).toUpperCase() + timeRange.slice(1)}`
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });
  };

  // Call renderChart on timeRange change
  useEffect(() => {
    renderChart(timeRange);
  }, [timeRange]);

  return (
    <div>
      <h2>LiFE Data</h2>
      <div>
        <button onClick={() => setTimeRange('monthly')}>Monthly</button>
        <button onClick={() => setTimeRange('weekly')}>Weekly</button>
        <button onClick={() => setTimeRange('yearly')}>Yearly</button>
      </div>
      <canvas id="lifeChartCanvas" width="400" height="200"></canvas>
    </div>
  );
};

export default LiFEChart;
