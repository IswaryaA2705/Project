import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { Star } from '@mui/icons-material';
import '../Styles/CustomerFeedback.css';

const createFeedbackData = (profile, name, rating, feedback) => {
  return { profile, name, rating, feedback };
};

const feedbacks = [
  createFeedbackData('https://via.placeholder.com/150', 'John Doe', 4, 'Great service and friendly staff!'),
  createFeedbackData('https://via.placeholder.com/150', 'Jane Smith', 5, 'Absolutely loved it! Will come again.'),
  createFeedbackData('https://via.placeholder.com/150', 'Alice Johnson', 3, 'Good, but room for improvement.'),
  createFeedbackData('https://via.placeholder.com/150', 'Chris Lee', 4, 'Very satisfied with the experience.'),
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star key={i} className={`star ${i <= rating ? 'star-yellow' : ''}`} />
    );
  }
  return stars;
};

const CustomerFeedback = () => {
  return (
    <div>
      <h2>Customer feedback</h2>
      {feedbacks.map((feedback, index) => (
        <Box key={index} mb={4}>
          <Box display="flex" alignItems="center">
            <Avatar src={feedback.profile} alt={feedback.name} />
            <Box ml={2}>
              <Typography variant="h6">{feedback.name}</Typography>
            </Box>
          </Box>
          <Box mt={1} display="flex">
            {renderStars(feedback.rating)}
          </Box>
          <Box mt={1} display="flex">
            <Typography variant="body1">{feedback.feedback}</Typography>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default CustomerFeedback;

