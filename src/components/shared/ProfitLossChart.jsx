import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ProfitLossChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data) {
      const ctx = document.getElementById('profitLossChart').getContext('2d');
      const dates = Object.keys(data.profitAndLossPerDay);
      const profits = dates.map(date => data.profitAndLossPerDay[date].profit);
      const losses = dates.map(date => data.profitAndLossPerDay[date].loss);

      if (chartRef.current) {
        // Destroy the existing chart instance if it exists
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Profit',
              backgroundColor: 'rgba(16, 185, 129, 0.5)',
              borderColor: 'rgba(16, 185, 129, 1)',
              borderWidth: 1,
              data: profits
            },
            {
              label: 'Loss',
              backgroundColor: 'rgba(239, 68, 68, 0.5)',
              borderColor: 'rgba(239, 68, 68, 1)',
              borderWidth: 1,
              data: losses
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: true,
              labels: {
                font: {
                  size: 12 // Adjust font size for legend
                }
              }
            }
          }
        }
      });
    }
  }, [data]);

  return <canvas id="profitLossChart" className="rounded-lg shadow-md w-24 h-16"></canvas>;
};

export default ProfitLossChart;
