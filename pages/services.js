import { Box, Typography, Button } from '@mui/material';

const services = [
  {
    heading: 'Web Development',
    desc: 'High-performance, scalable websites built to impress and convert.',
    features: [
      'Responsive & SEO-friendly',
      'Custom functionality & integrations',
      'Fast loading & secure',
    ],
    btnText: 'Explore Web Solutions →',
    black: false,
  },
  {
    heading: 'Mobile App Development',
    desc: 'Native & cross-platform apps delivering flawless user experiences.',
    features: [
      'iOS & Android expertise',
      'Smooth performance & animations',
      'Push notifications & APIs',
    ],
    btnText: 'Build My App →',
    black: true,
  },
  {
    heading: 'Software Solutions',
    desc: 'Tailored systems to streamline operations and boost productivity.',
    features: [
      'Custom ERP & CRM tools',
      'Workflow automation',
      'Secure & scalable architecture',
    ],
    btnText: 'See Our Software →',
    black: false,
  },
  {
    heading: 'UI/UX Design',
    desc: 'Pixel-perfect designs that blend beauty, usability, and impact.',
    features: ['User-centered design', 'Interactive prototypes', 'Brand-aligned visuals'],
    btnText: 'Design My Interface →',
    black: true,
  },
];

function ServiceCard({ heading, desc, features, btnText, black }) {
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: black ? '#000' : '#f5f5f5',
        color: black ? '#fff' : '#000',
        borderRadius: '20px',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        {heading}
      </Typography>
      <Typography>{desc}</Typography>

      <Box>
        {features.map((f, i) => (
          <Box key={i} display="flex" alignItems="flex-start" gap={1.5} mt={1}>
            <Box
              sx={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: black ? '#d7fe52' : 'green',
                mt: '2px',
              }}
            >
              ✔
            </Box>
            <Typography>{f}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Button
        variant="contained"
        sx={{
          mb: '10px',
          alignSelf: 'start',
          backgroundColor: black ? '#fff' : '#000',
          color: black ? '#000' : '#fff',
          textTransform: 'none',
          borderRadius: '50px',
          px: 3,
          py: 1,
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: black ? '#eee' : '#111',
          },
        }}
      >
        {btnText}
      </Button>
    </Box>
  );
}

const ServicesSection = () => {
  return (
    <Box sx={{ maxWidth: '100%', py: 8, px: 2 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 1 }}>
        Core IT Services
      </Typography>

      <Typography variant="body1" textAlign="center" mb={4}>
        Delivering end-to-end development with speed, transparency, and quality.
      </Typography>

      {/* Services Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4,
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {services.map((s, idx) => (
          <ServiceCard key={idx} {...s} />
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;

