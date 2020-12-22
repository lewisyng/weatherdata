import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core';
import Logo from './Logo';

function Nav() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pages, setPages] = useState({
    'Current Weather': '/',
    'Weather Forecast': '/forecast',
  });

  return (
    <div className='nav'>
      <Logo />
      <div className='nav__links nav__links__big'>
        {Object.keys(pages).map((item) => {
          return (
            <Link key={item} to={pages[item]}>
              {item}
            </Link>
          );
        })}
      </div>

      <div className='nav__links nav__links__small'>
        <AppBar>
          <Toolbar className='appbar__toolbar'>
            <Logo />
            <IconButton>
              <MoreVertIcon
                style={{ color: 'white' }}
                onClick={(event) => {
                  setOpen(true);
                  setAnchorEl(event.currentTarget);
                }}
              />
            </IconButton>
            <Menu
              open={open}
              onClose={() => {
                setOpen(false);
                setAnchorEl(null);
              }}
              anchorEl={anchorEl}
            >
              {Object.keys(pages).map((item) => {
                return (
                  <MenuItem
                    key={item}
                    onClick={() => {
                      setOpen(false);
                      setAnchorEl(null);
                    }}
                  >
                    {item}
                  </MenuItem>
                );
              })}
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}

export default Nav;
