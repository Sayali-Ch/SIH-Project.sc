import React, { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js';

const cleanlinessData = {
  monthly: [65, 59, 80, 81, 56, 55, 40],
  weekly: [45, 55, 60, 48, 70, 50, 65],
  yearly: [800, 950, 870]
};

const CleanlinessChart = () => {
  const [timeRange, setTimeRange] = useState('monthly');

  // Function to render the chart
  const renderChart = (timeRange) => {
    const canvas = document.getElementById('cleanlinessChartCanvas');
    const existingChart = ChartJS.getChart(canvas); // Check if a chart already exists

    // Destroy the existing chart if it exists
    if (existingChart) {
      existingChart.destroy();
    }

    const chartData = cleanlinessData[timeRange];

    new ChartJS(canvas, {
      type: 'bar',
      data: {
        labels: timeRange === 'monthly' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'] :
               timeRange === 'weekly' ? ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'] :
               ['2022', '2023', '2024'],
        datasets: [
          {
            label: 'Cleanliness Data',
            data: chartData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: `Cleanliness Data - ${timeRange.charAt(0).toUpperCase() + timeRange.slice(1)}`
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
      <h2>Cleanliness Data</h2>
      <div>
        <button onClick={() => setTimeRange('monthly')}>Monthly</button>
        <button onClick={() => setTimeRange('weekly')}>Weekly</button>
        <button onClick={() => setTimeRange('yearly')}>Yearly</button>
      </div>
      <canvas id="cleanlinessChartCanvas" width="400" height="200"></canvas>
    </div>
  );
};

export default CleanlinessChart;
