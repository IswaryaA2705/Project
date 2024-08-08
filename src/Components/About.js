
import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="row">
        <span>Goals</span>
        <span className="dropdown-symbol">▼</span>
      </div>
      <div className="row">
        <span>Popular Dishes</span>
        <span className="dropdown-symbol">▼</span>
      </div>
      <div className="row">
        <span>Menus</span>
        <span className="dropdown-symbol">▼</span>
      </div>
    </div>
  );
};

export default About;