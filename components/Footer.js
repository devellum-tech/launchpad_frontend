import React from 'react';
import { Box, Grid, Typography, Link, TextField, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#fafafa',
        px: { xs: 2, sm: 6, md: 10 },
        py: { xs: 5, md: 8 },
        mt: 10,
      }}
    >
      <Grid container spacing={4}>

        {/* Logo & Description */}
        <Grid item xs={12} md={3}>
          <Box display="flex" alignItems="center" mb={2}>
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
            <Typography variant="h6" fontWeight="bold" ml={1}>
              Devellum
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Securing Your Digital World: Your Trusted Partner in Data Protection with Cutting Edge Solutions for Data Security.
          </Typography>
        </Grid>

        {/* Resources */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Resources
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" underline="hover" color="text.primary">Service</Link>
            <Link href="#" underline="hover" color="text.primary">Pricing</Link>
            {/* <Link href="#" underline="hover" color="text.primary">Blog</Link> */}
          </Box>
        </Grid>

        {/* Quick Info */}
        <Grid item xs={6} md={2}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Quick Info
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link href="#" underline="hover" color="text.primary">About Us</Link>
            {/* <Link href="#" underline="hover" color="text.primary">Privacy Policy</Link> */}
            <Link href="#" underline="hover" color="text.primary">Contact Us</Link>
          </Box>
        </Grid>

        {/* Newsletter */}
        {/* <Grid item xs={12} md={5}>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Subscribe to Our Newsletter!
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Stay Informed with Our Latest Security Insights – Subscribe to Our Newsletter!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              mt: 1,
            }}
          >
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
              sx={{
                backgroundColor: 'white',
                borderRadius: 5,
              }}
              InputProps={{
                sx: { px: 2 },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#E4FB76',
                color: '#000',
                borderRadius: '30px',
                px: 4,
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#d6f268',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid> */}
      </Grid>

      {/* Bottom Text */}
      <Box mt={6} textAlign="center">
        <Typography variant="body2" color="text.secondary">
          Copyright © {new Date().getFullYear()} Fortify. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
