import React from 'react';
import { Box, Typography, Button, Switch } from '@mui/material';
import PriceContainer from '@/components/priceUI/PriceContainer';
import Wrapper from '@/components/priceUI/wrapper';

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

const Services = () => {
  return (
    <Box sx={{ maxWidth: '100%', py: 8, px: 2 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center">
        Choose a suitable plan
      </Typography>

      <Typography variant="body1" textAlign="center" mt={1} mb={4}>
        Your Trusted Partner in Data Protection with Cutting-Edge Solutions for
        Comprehensive Data Security.
      </Typography>

      {/* Plans Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        <PriceContainer
          heading={'UI/UX Design'}
          desc={`Ideal for small businesses or individuals looking to secure their data with fundamental protection features.`}
          btnText={'Select Basic Plan →'}
          features={features.basic}
        />

        <PriceContainer
          heading={'Frontend Plan'}
          desc={`Perfect for medium to large businesses requiring security features and priority support.`}
          btnText={'Select Premium Plan →'}
          features={features.premium}
          black
        />

        <PriceContainer
          heading={'Website Design'}
          desc={`Ideal for small businesses or individuals looking to secure their data with fundamental protection features.`}
          btnText={'Select Basic Plan →'}
          features={features.basic}
        />

        <PriceContainer
          heading={'Maintenance Plan'}
          desc={`Perfect for medium to large businesses requiring security features and priority support.`}
          btnText={'Select Premium Plan →'}
          features={features.premium}
          black
        />
      </Box>
    </Box>
  );
};

export default Services;

