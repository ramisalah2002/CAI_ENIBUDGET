import { Hidden } from '@mui/material';
import React from 'react';
import { Line } from 'react-chartjs-2';

function StatisticsChart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
              },
          tooltip: {
            enabled: false, // Disable the default tooltip rendering
            external: function (context) {
              // Create the tooltip container if it doesn't exist
              let tooltipEl = document.getElementById('chartjs-tooltip');
              if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'chartjs-tooltip';
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.pointerEvents = 'none';
                tooltipEl.style.transition = 'all 0.2s ease';
                document.body.appendChild(tooltipEl);
              }
      
              // Hide tooltip if no data
              const tooltipModel = context.tooltip;
              if (tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;
                return;
              }
      
              // Set tooltip content
              if (tooltipModel.body) {
                const titleLines = tooltipModel.title || [];
                const bodyLines = tooltipModel.body.map(b => b.lines);
      
                let innerHtml = `<div style="width: 100%; height: 90px; box-shadow: 0px 0px 100px 20px rgba(0, 0, 0, 0.25); border-radius: 10px; background-color: #fff; padding: 10px;">`;
                innerHtml += `<div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">${titleLines.join('<br>')}</div>`;
                bodyLines.forEach((body, i) => {
                  const colors = tooltipModel.labelColors[i];
                  const colorStyle = `background: ${colors.backgroundColor}; border-color: ${colors.borderColor};`;
                  innerHtml += `<div style="display: flex; align-items: center; gap: 5px;">
                    <span style="width: 10px; height: 10px; display: inline-block; border-radius: 50%; ${colorStyle}"></span>
                    <span>${body}</span>
                  </div>`;
                });
                innerHtml += `</div>`;
      
                tooltipEl.innerHTML = innerHtml;
              }
      
              // Position the tooltip
              const position = context.chart.canvas.getBoundingClientRect();
              tooltipEl.style.opacity = 1;
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            
            ticks: {
                callback: function (value, index, values) {
                    return `€${value}`; // Add euro symbol before the value
                  },
          
                font: {
                  size: 16, // Adjust the font size here
                  weight: 500,
                },
                color: "#57565b", // Optional: Customize label color
            },
            grid: {
              display: false,
            },
            callback: function (value) {
                return `€${value}`; // Add euro symbol before the value
              },
          },
          x: {
            ticks: {
                font: {
                  size: 16, // Adjust the font size here
                  weight: 500,
                },
                color: "#57565b", // Optional: Customize label color
            },
            grid: {
              drawOnChartArea: true,
              drawBorder: true,
              drawTicks: true,
              width: 2,
              color: '#f2f3f7',
              borderDash: [5, 5],
            },
          },
        },
      };
      
      
      const data = {
        labels: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
        datasets: [
          {
            label: 'Entrant',
            data: [12, 15, 10, 12.9, 18, 20, 25],
            borderColor: '#4b5bbe',
            backgroundColor: '#4b5bbe',
            tension: 0,
            pointRadius: 4,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 5,
            pointHoverBorderColor: '#ffffff',
          },
          {
            label: 'Sortant',
            data: [10, 12, 14, 12.9, 17, 19, 22],
            borderColor: '#e84f16',
            backgroundColor: '#e84f16',
            tension: 0,
            pointRadius: 4,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 5,
            pointHoverBorderColor: '#ffffff',
          },
        ],
      };

      const shadowPlugin = {
        id: 'lineShadow',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          chart.data.datasets.forEach((dataset, index) => {
            const meta = chart.getDatasetMeta(index);
      
            if (meta.type === 'line') {
              ctx.save();
              ctx.shadowColor = 'rgba(0, 0, 0, 0.15)'; // Shadow color
              ctx.shadowBlur = 10; // Amount of blur
              ctx.shadowOffsetX = 0; // Horizontal offset
              ctx.shadowOffsetY = 4; // Vertical offset
              meta.dataset.draw(ctx); // Draw the shadow behind the line
              ctx.restore();
            }
          });
        },
      };
  

  return <Line data={data} options={options} plugins={[shadowPlugin]}/>;
}

export default StatisticsChart;
