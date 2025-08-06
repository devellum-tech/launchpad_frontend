import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HomePointSection = () => {
  const points = [
    'Our platform ensures that all sensitive data is encrypted both during transmission and while stored.',
    'Implement role-based access controls (RBAC) and multi-factor authentication (MFA).',
    'Regularly audit user access to sensitive information and systems to ensure compliance with security policies.',
  ];

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 6, md: 10 },
        px: 2, // mobile padding
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px', // centers content in container
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Delivers an all-encompassing <br />
          security summary.
        </Typography>

        <Box display="flex" flexDirection="column" gap={2}>
          {points.map((text, idx) => (
            <Box key={idx} display="flex" alignItems="flex-start" gap={1.5}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  backgroundColor: '#000',
                  color: '#fff',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1rem',
                  mt: '4px',
                }}
              >
                ✔️
              </Box>
              <Typography variant="body1" fontSize="1rem">
                {text}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          sx={{
            width: 'fit-content',
            px: 2,
            py: 1,
            backgroundColor: '#000',
            borderRadius: '999px',
            color: '#fff',
            fontSize: '1rem',
            fontWeight: 500,
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            '&:hover': {
              backgroundColor: '#111',
            },
          }}
        >
          Get Started
          <Box
            sx={{
              backgroundColor: '#d7fe52',
              color: '#000',
              width: 32,
              height: 32,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.25rem',
            }}
          >
            →
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default HomePointSection;
