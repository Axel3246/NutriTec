// Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import re from '../assets/itesn.png';
import nutritec from '../assets/nutritec.png'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LoginIcon from '@mui/icons-material/Login';
import "./styles.css"

const Navbar = ({ activePage }) => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(activePage); // Set the active page from the prop

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Inicio', route: '/', onClick: () => handleLinkClick('Inicio') },
    { text: 'Comunidad', route: '/comunidad', onClick: () => handleLinkClick('Comunidad') },
  ];

  const handleLinkClick = (linkText) => {
    setActiveLink(linkText);
    console.log(`${linkText} clicked`);
  };

  const handleNavButtonClick = (route) => {
    navigate(route);
    setIsDrawerOpen(false); // Close the drawer after navigation (if open)
  };

  return (
    <>
      <Box
        sx={{
          background: '#F7F7F7',
          boxShadow: 'none',
          mb: 2,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <AppBar position="static" sx={{ width: '100%', background: '#F7F7F7', borderBottom: { xs: '1.5px solid #ccc', md: '0px solid #ccc' }, py: 0.5}}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#F7F7F7',
              
            }}
          >
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton edge="start" color="black" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Box>
            <a className="link" href='/'>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={nutritec} alt="Logo" style={{ width: '70px', marginRight: '-10px' }} />
              <Typography variant="h5" sx={{ color: 'black', fontWeight: 'bold', fontSize: { xs: '1.7rem', s: '1.7rem', md: '1.8rem' } }}>
                Nutri<Typography
                  component="span"
                  sx={{
                    color: '#8bc34a',
                    fontWeight: 'bold',
                    fontSize: { xs: '1.9rem', s: '1.9rem', md: '2rem' },
                    fontFamily: 'Encode Sans Condensed',
                  }}
                >
                  TEC
                </Typography>
              </Typography>
            </Box>
            </a>

            <List
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: '16px',
                alignItems: 'center',
                color: 'black',
                fontWeight: 'bold',
                mr: 'auto',
                ml: '3rem',
              }}
            >
              {menuItems.map((item, index) => (
                <ListItem
                  button
                  key={index}
                  onClick={() => handleNavButtonClick(item.route)}
                  sx={{
                    color: activeLink === item.text ? '#8bc34a' : 'inherit',
                    borderBottom: activeLink === item.text ? '2px solid #8bc34a' : 'none',
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>

            <Box sx={{ display: { xs: 'block', md: 'block' } }}>
              <Button color="success" variant="outlined" size="small" onClick={() => console.log('Sign In clicked')}>
                <IconButton edge="start" sx={{ color: '#8bc34a' }} aria-label="menu" size="small">
                  <LoginIcon />
                </IconButton>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          sx={{ display: { xs: 'block', md: 'none' }, mr: -2 }}
          PaperProps={{
            sx: { width: '80%', height: '30%', mt: 9, ml: 1 },
          }}
        >
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} onClick={() => handleNavButtonClick(item.route)}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
      <div style={{ paddingTop: '80px' }}>
      </div>
    </>
  );
};

export default Navbar;
