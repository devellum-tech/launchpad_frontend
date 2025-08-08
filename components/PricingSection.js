import React from 'react';
import { Box, Typography, Button, Switch } from '@mui/material';
import Wrapper from './priceUI/wrapper';
import PriceContainer from './priceUI/PriceContainer';

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
        Your Trusted Partner in Data Protection with Cutting-Edge Solutions for
        Comprehensive Data Security.
      </Typography>

      {/* Toggle */}
      {/* <Box display="flex" justifyContent="center" alignItems="center" gap={1.5} mb={6}>
        <Typography>Monthly</Typography>
        <Switch defaultChecked />
        <Typography>Yearly</Typography>
      </Box> */}

      {/* Plans Container */}
      <Wrapper>
        {/* Basic Plan */}

        <PriceContainer
          heading={'UI/UX Design'}
          desc={`Ideal for small businesses or individuals looking to secure their data with
            fundamental protection features.`}
          btnText={'Select Basic Plan &nbsp; →'}
          features={features.basic}
        />

        <PriceContainer
          heading={'Frontend Plan'}
          desc={`Perfect for medium to large businesses requiring security features and
            priority support.`}
          btnText={'Select Premium Plan &nbsp; →'}
          features={features.premium}
          black
        />

        {/* Basic Plan 2*/}
        <PriceContainer
          heading={'Website Design'}
          desc={`Ideal for small businesses or individuals looking to secure their data with
            fundamental protection features.`}
          btnText={'Select Basic Plan &nbsp; →'}
          features={features.basic}
        />

        {/* Premium Plan 2*/}
        <PriceContainer
          heading={'Maintenance Plan'}
          desc={`Perfect for medium to large businesses requiring security features and
            priority support.`}
          btnText={'Select Premium Plan &nbsp; →'}
          features={features.premium}
          black
        />
      </Wrapper>
    </Box>
  );
};

export default PricingSection;

