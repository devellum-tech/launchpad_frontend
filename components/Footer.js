import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
} from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#0D1B2A', color: '#fff', pt: 8, pb: 4, mt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#FFD700', mb: 2 }}>
              Devellum
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
              Delivering high-quality web & mobile solutions with transparency and client
              focus.
            </Typography>
            <Typography variant="body2">📧 devellum.tech@gmail.com</Typography>
            <Typography variant="body2">📞 +91 98765 43210</Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#FFD700', mb: 2 }}>
              Links
            </Typography>
            <Stack spacing={1}>
              {['Home', 'Services', 'Works', 'About Us', 'Contact'].map((item, i) => (
                <Link
                  key={i}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  underline="none"
                  sx={{
                    color: '#ccc',
                    fontSize: '0.95rem',
                    '&:hover': { color: '#FFD700' },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Why Choose Us */}
          <Grid item xs={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#FFD700', mb: 2 }}>
              Why Us
            </Typography>
            <Stack spacing={1}>
              {[
                'On-time Delivery',
                'Transparent Pricing',
                'Professional Tracking',
                'Documented Development',
                '24/7 Support',
              ].map((point, i) => (
                <Typography key={i} variant="body2" sx={{ color: '#ccc' }}>
                  ✔ {point}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#FFD700', mb: 2 }}>
              Connect
            </Typography>
            <Stack direction="row" spacing={1}>
              {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, i) => (
                <IconButton
                  key={i}
                  size="small"
                  sx={{
                    bgcolor: '#1B263B',
                    color: '#FFD700',
                    '&:hover': { bgcolor: '#FFD700', color: '#0D1B2A' },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', my: 4 }} />

        {/* Bottom Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{ color: 'grey.500', fontSize: '0.85rem' }}
        >
          © {new Date().getFullYear()} Devellum. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

