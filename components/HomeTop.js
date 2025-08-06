'use client';
import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const HomeTop = () => {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        mx: 'auto',
        textAlign: 'center',
        py: { xs: 8, md: 12 },
      }}
    >
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 2,
        }}
      >
        Your Trusted Partner in<br />
        Comprehensive Web Security
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          maxWidth: 800,
          mx: 'auto',
          fontSize: { xs: '1rem', md: '1.25rem' },
          color: 'text.secondary',
          mb: 4,
        }}
      >
        Securing Your Digital World: Your Trusted Partner in Data Protection with
        Cutting-Edge Solutions for Comprehensive Data Security.
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#000',
            borderRadius: '30px',
            color: '#fff',
            px: 4,
            py: 1.5,
            textTransform: 'none',
            fontSize: '1rem',
            '&:hover': {
              backgroundColor: '#222',
            },
          }}
        >
          Get Started →
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: '30px',
            px: 4,
            py: 1.5,
            textTransform: 'none',
            fontSize: '1rem',
          }}
        >
          Learn More
        </Button>
      </Stack>
    </Box>
  );
};

export default HomeTop;
