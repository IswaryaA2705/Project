//profit.js import React from 'react';
import Chart from 'react-apexcharts';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../Styles/RadialChart.css';

const RadialChart = () => {
  const netProfit = 75000; 
  const percentageIncrease = 3; 

  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: true,
            fontSize: '16px',
          },
          value: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ['#FF4560'] 
    },
    labels: ['70%'],
    
  };

  const series = [70]; 

  return (
    <div className="radial-chart-container">
      <div className="net-profit-info">
        <div className="net-profit-title">Net Profit</div>
        <div className="net-profit-amount">${netProfit.toLocaleString()}</div>
        <div className="net-profit-increase">
          <ArrowUpwardIcon style={{ color: 'green' }} />
          <span>{percentageIncrease}%</span>
        </div>
      </div>
      <div className="radial-chart">
        <Chart options={options} series={series} type="radialBar" height={180}/>
      </div>
    </div>
  );
};

export default RadialChart;