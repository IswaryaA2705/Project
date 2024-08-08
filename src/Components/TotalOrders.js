//toatalorder.jsimport React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../Styles/TotalOrders.css'

const CardComponent = ({ imageSrc, title, value, percentage }) => {
  return (
    <Box className="card-item">
      <Box className="card-row">
        <img src={imageSrc} alt="icon" className="card-image" />
      </Box>
      <Box className="card-row">
        <Typography variant="h6" className="card-title">{title}</Typography>
      </Box>
      <Box className="card-row">
        <Typography variant="h4" className="card-value">{value}</Typography>
        <Box className="card-percentage">
          <ArrowUpwardIcon className="card-arrow" />
          <Typography variant="body2">{percentage}%</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardComponent;