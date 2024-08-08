import React from 'react';
import Chart from 'react-apexcharts';
import '../Styles/Activity.css';

const BarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%', 
        borderRadius: 5, 
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ["5","7","9","11","13","15","17","19","21","23","25","27"]
    },
    yaxis: {
        tickAmount: 4, // Limit to 5 values
      },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val} thousands`
      }
    }
  };

  const series = [
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70]
    }
  ];

  return (
    <div className="bar-chart">
        <div className='header'>
        <h2>Premium</h2>
        <div className="dropdownContainer">
          <select id="period-select" >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        </div>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={150}
      />
    </div>
  );
};

export default BarChart;