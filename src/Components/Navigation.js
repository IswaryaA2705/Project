import React from 'react';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Styles/Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <IconButton color="inherit">
        <HomeIcon />
      </IconButton>
      <IconButton color="inherit">
        <ExploreIcon />
      </IconButton>
      <IconButton color="inherit">
        <FavoriteIcon />
      </IconButton>
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <IconButton color="inherit">
        <AccountCircleIcon />
      </IconButton>
    </div>
  );
};

export default Navigation;
