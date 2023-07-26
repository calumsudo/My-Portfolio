import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const BasicMenu = ({ handlePage, handleMenuClicked }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    if (handleMenuClicked) {
      handleMenuClicked(true);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (handleMenuClicked) {
      handleMenuClicked(false);
    }
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* Pass the selected menu item to the handleClose function */}
        <MenuItem onClick={() => handlePage('terminal')}>Terminal</MenuItem>
        <MenuItem onClick={() => handlePage('Projects')}>Projects</MenuItem>
        <MenuItem onClick={() => handlePage('Resume')}>Resume</MenuItem>
        <MenuItem onClick={() => handlePage('About Me')}>About Me</MenuItem>
        <MenuItem onClick={() => handlePage('Game')}>Game</MenuItem>
      </Menu>
    </div>
  );
}

export default BasicMenu;
