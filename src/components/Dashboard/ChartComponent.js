// components/Dashboard/ChartComponent.js
import React, { useState, useEffect } from 'react';
import { Chart } from 'chart.js';

const ChartComponent = ({ selectedTimeframe }) => {
  const [chart, setChart] = useState(null);

  const weeklyLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const monthlyLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const yearlyLabels = [new Date().getFullYear() - 2, new Date().getFullYear() - 1, new Date().getFullYear()];

  useEffect(() => {
    let labels = [];
    if (selectedTimeframe === 'weekly') {
      labels = weeklyLabels;
    } else if (selectedTimeframe === 'monthly') {
      labels = monthlyLabels;
    } else if (selectedTimeframe === 'yearly') {
      labels = yearlyLabels;
    }

    if (chart) {
      chart.destroy();
    }

    const newChart = new Chart(document.getElementById('myChart'), {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: `${selectedTimeframe} Data`,
          data: Array(labels.length).fill(Math.floor(Math.random() * 100)),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: selectedTimeframe === 'weekly' ? 'Days' : selectedTimeframe === 'monthly' ? 'Months' : 'Years'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    });

    setChart(newChart);
  }, [selectedTimeframe]);

  return <canvas id="myChart"></canvas>;
};

export default ChartComponent;
