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
  if (!data || data.length === 0) return <p>No data available for graph.</p>;

  // Prepare the labels and temperature data
  const labels = data.map((item) => new Date(item.dt_txt).toLocaleTimeString());
  const temperatures = data.map((item) => item.main.temp);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        borderColor: '#42A5F5', // Light Blue color for the line
        backgroundColor: 'rgba(66, 165, 245, 0.2)', // Light blue fill
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#42A5F5',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Temperature Trend for the Next 3 Hours',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}°C`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        beginAtZero: false,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default WeatherGraph;
