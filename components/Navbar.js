'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
} from '@mui/material';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  const router = useRouter()

  const menuItems = ['Services','Pricing', 'About Us', 'Contact'];
  const menuURLs = ['services','pricing', 'about', 'contact'];

  const handleClick = (indexProps)=>{
    router.push(menuURLs[indexProps])
  }

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Box
          sx={{
            width: '100%',
            // px: 2,
            mx: 'auto',
            '@media (min-width: 900px)': {
              maxWidth: '80%',
            },
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: '50%',
                  backgroundColor: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography fontWeight="bold" color="white">D</Typography>
              </Box>
              <Typography fontWeight="bold">Devellum</Typography>
            </Box>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
              {menuItems.map((item,index) => (
                <Button key={index} sx={{ textTransform: 'none' }} onClick={()=>handleClick(index)}>
                  {item}
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#000',
                  borderRadius: '30px',
                  color: '#fff',
                  textTransform: 'none',
                }}
              >
                Get Started →
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              sx={{ display: { xs: 'block', md: 'none' }, fontSize: '20px' }}
              onClick={toggleDrawer}
            >
              ☰
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
            <Typography fontWeight="bold">Devellum</Typography>
            <Button onClick={toggleDrawer} sx={{ fontSize: '18px', minWidth: 'auto' }}>
              ✕
            </Button>
          </Box>
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#000',
                  borderRadius: '30px',
                  color: '#fff',
                  textTransform: 'none',
                }}
              >
                Get Started →
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
