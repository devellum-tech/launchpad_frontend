import React from 'react';
import { Box, Typography, Button, Switch } from '@mui/material';

const features = {
  basic: [
    'Basic Threat Detection',
    'Basic Alerts & Reporting',
    'Daily Data Backup',
    'Email Support',
    'Single User License',
  ],
  premium: [
    'Advanced Threat Detection and Remediation',
    'Real-Time Alerts and Reporting',
    'Continuous Data Backup and Restore',
    '24/7 Priority Support',
    'Multi-User Licenses (Up to 10 Users)',
  ],
};

const PricingSection = () => {
  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto', py: 8 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center">
        Choose a suitable plan
      </Typography>

      <Typography variant="body1" textAlign="center" mt={1} mb={4}>
        Your Trusted Partner in Data Protection with Cutting-Edge Solutions for Comprehensive Data Security.
      </Typography>

      {/* Toggle */}
      {/* <Box display="flex" justifyContent="center" alignItems="center" gap={1.5} mb={6}>
        <Typography>Monthly</Typography>
        <Switch defaultChecked />
        <Typography>Yearly</Typography>
      </Box> */}

      {/* Plans Container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'center',
        }}
      >
        {/* Basic Plan */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#f9f9f9',
            borderRadius: '20px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">UI/UX Design</Typography>
          <Typography>
            Ideal for small businesses or individuals looking to secure their data with fundamental protection features.
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            {/* $29 <Typography component="span" fontSize="1rem" fontWeight={400}>per month, billed monthly</Typography> */}
          </Typography>

          <Box>
            {features.basic.map((f, i) => (
              <Box key={i} display="flex" alignItems="flex-start" gap={1.5} mt={1}>
                <Box
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: 'green',
                    mt: '2px',
                  }}
                >
                  ✔️
                </Box>
                <Typography>{f}</Typography>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              alignSelf: 'start',
              backgroundColor: '#000',
              color: '#fff',
              textTransform: 'none',
              borderRadius: '50px',
              px: 3,
              py: 1,
              '&:hover': { backgroundColor: '#111' },
            }}
          >
            Select Basic Plan &nbsp; →
          </Button>
        </Box>

        {/* Premium Plan */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '20px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h6" fontWeight="bold">Frontend Plan</Typography>
            {/* <Box
              sx={{
                backgroundColor: '#d7fe52',
                color: '#000',
                fontWeight: 600,
                px: 1.5,
                py: 0.5,
                borderRadius: '20px',
                fontSize: '0.8rem',
              }}
            >
              Recommended
            </Box> */}
          </Box>

          <Typography>
            Perfect for medium to large businesses requiring security features and priority support.
          </Typography>
          {/* <Typography variant="h4" fontWeight="bold">
            $99 <Typography component="span" fontSize="1rem" fontWeight={400}>per month, billed monthly</Typography>
          </Typography> */}

          <Box>
            {features.premium.map((f, i) => (
              <Box key={i} display="flex" alignItems="flex-start" gap={1.5} mt={1}>
                <Box
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#d7fe52',
                    mt: '2px',
                  }}
                >
                  ✔️
                </Box>
                <Typography>{f}</Typography>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              alignSelf: 'start',
              backgroundColor: '#fff',
              color: '#000',
              textTransform: 'none',
              borderRadius: '50px',
              px: 3,
              py: 1,
              '&:hover': { backgroundColor: '#eee' },
            }}
          >
            Select Premium Plan &nbsp; →
          </Button>
        </Box>

        {/* Basic Plan 2*/}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#f9f9f9',
            borderRadius: '20px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">Website Design</Typography>
          <Typography>
            Ideal for small businesses or individuals looking to secure their data with fundamental protection features.
          </Typography>
          {/* <Typography variant="h4" fontWeight="bold">
            $29 <Typography component="span" fontSize="1rem" fontWeight={400}>per month, billed monthly</Typography>
          </Typography> */}

          <Box>
            {features.basic.map((f, i) => (
              <Box key={i} display="flex" alignItems="flex-start" gap={1.5} mt={1}>
                <Box
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: 'green',
                    mt: '2px',
                  }}
                >
                  ✔️
                </Box>
                <Typography>{f}</Typography>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              alignSelf: 'start',
              backgroundColor: '#000',
              color: '#fff',
              textTransform: 'none',
              borderRadius: '50px',
              px: 3,
              py: 1,
              '&:hover': { backgroundColor: '#111' },
            }}
          >
            Select Basic Plan &nbsp; →
          </Button>
        </Box>

          {/* Premium Plan 2*/}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '20px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h6" fontWeight="bold">Maintenance Plan</Typography>
            {/* <Box
              sx={{
                backgroundColor: '#d7fe52',
                color: '#000',
                fontWeight: 600,
                px: 1.5,
                py: 0.5,
                borderRadius: '20px',
                fontSize: '0.8rem',
              }}
            >
              Recommended
            </Box> */}
          </Box>

          <Typography>
            Perfect for medium to large businesses requiring security features and priority support.
          </Typography>
          {/* <Typography variant="h4" fontWeight="bold">
            $99 <Typography component="span" fontSize="1rem" fontWeight={400}>per month, billed monthly</Typography>
          </Typography> */}

          <Box>
            {features.premium.map((f, i) => (
              <Box key={i} display="flex" alignItems="flex-start" gap={1.5} mt={1}>
                <Box
                  sx={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#d7fe52',
                    mt: '2px',
                  }}
                >
                  ✔️
                </Box>
                <Typography>{f}</Typography>
              </Box>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              alignSelf: 'start',
              backgroundColor: '#fff',
              color: '#000',
              textTransform: 'none',
              borderRadius: '50px',
              px: 3,
              py: 1,
              '&:hover': { backgroundColor: '#eee' },
            }}
          >
            Select Premium Plan &nbsp; →
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingSection;
