// src/components/WeatherGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registering the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherGraph = ({ data }) => {
  // Ensure that we have data, otherwise return null
  if (!data || data.length === 0) {
    return <p>No data available for graph.</p>;
  }

  // Preparing the labels and temperature data from the forecast
  const labels = data.map((item) => new Date(item.dt_txt).toLocaleTimeString());
  const temperatures = data.map((item) => item.main.temp);

  // Setting up the chart data
  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Temperature (°C)',
      data: temperatures,
      borderColor: '#42A5F5',  // Light Blue color for the line
      backgroundColor: 'rgba(66, 165, 245, 0.2)',  // Light blue fill
      fill: true,  // To fill the area under the line
      pointRadius: 5,
      pointBackgroundColor: '#42A5F5',
    }]
  };

  // Chart.js options (customize as needed)
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Temperature Trend for the Next 3 Hours',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}°C` // Display temperature in °C
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time'
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)'
        },
        beginAtZero: false,  // Don't start y-axis from 0 for better visual scaling
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default WeatherGraph;
