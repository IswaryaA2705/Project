import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import '../Styles/Dashboard.css';
import BarChart from './Activity';
import RadialChart from './Profit';
import CustomerOrderTable from './Orders';
import About from './About';
import CustomerFeedback from './CustomerFeedback';
import CardComponent from './TotalOrders'
import { Typography } from '@mui/material';
import OrderIcon from "../../src/Images/orders.png"
import DeliveredIcon from "../../src/Images/delivered.png"
import CancelledIcon from "../../src/Images/cancelled.png"
import RevenueIcon from "../../src/Images/revenue.png"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <div className="main-content">
        <div className="header-container">
          <Header />
        </div>
        <div className="title-container">
          <Typography variant="h5">Dashboard</Typography>
        </div>
        <div className="dashboard-grid">
          <div className="grid-item-1">
            <CardComponent 
              imageSrc={OrderIcon}
              title="Total Orders"
              value="75"
              percentage="3"
            />
            <CardComponent 
              imageSrc={DeliveredIcon}
              title="Total Delivered"
              value="75"
              percentage="3"
            />
            <CardComponent 
              imageSrc={CancelledIcon}
              title="Total Cancelled"
              value="75"
              percentage="3"
            />
            <CardComponent 
              imageSrc={RevenueIcon}
              title="Total Revenue"
              value="75"
              percentage="3"
            />
            </div>
          <div className="grid-item"><div className='grid-container'><RadialChart/></div></div>
          <div className="grid-item-3"><BarChart/></div>
          <div className="grid-item-4"><About/></div>
          <div className="grid-item-5"><CustomerOrderTable/></div>
          <div className="grid-item-6"><CustomerFeedback/></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

