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
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  const router = useRouter();

  const menuItems = ['Home', 'Services', 'Pricing', 'About Us', 'Contact'];
  const menuURLs = ['/', 'services', 'pricing', 'about', 'contact'];

  const handleClick = (indexProps) => {
    router.push(menuURLs[indexProps]);
    setOpen(false); // close drawer on click (for mobile)
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Box
          sx={{
            width: '100%',
            p: '10px 0px 10px 0px',
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
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography fontWeight="bold" fontSize="1.25rem" color="white">
                  D
                </Typography>
              </Box>
              <Typography fontWeight="bold" fontSize="1.25rem">
                <Link href={'/'}>Devellum</Link>
              </Typography>
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}
            >
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleClick(index)}
                  sx={{
                    textTransform: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 500,
                  }}
                >
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
                  fontSize: '1.05rem',
                  px: 3,
                  py: 1,
                  '&:hover': {
                    backgroundColor: '#222',
                  },
                }}
              >
                Get Started →
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              edge="end"
              sx={{
                display: { xs: 'block', md: 'none' },
                fontSize: '24px',
              }}
              onClick={toggleDrawer}
            >
              ☰
            </IconButton>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
            <Typography fontWeight="bold" fontSize="1.2rem">
              Devellum
            </Typography>
            <Button onClick={toggleDrawer} sx={{ fontSize: '20px', minWidth: 'auto' }}>
              ✕
            </Button>
          </Box>
          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={text} onClick={() => handleClick(index)}>
                <ListItemText
                  primary={text}
                  slotProps={{
                    primary: {
                      typographyProps: { fontSize: '1.05rem', fontWeight: 500 },
                    },
                  }}
                />
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
                  fontSize: '1.05rem',
                  px: 3,
                  py: 1,
                  '&:hover': {
                    backgroundColor: '#222',
                  },
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

