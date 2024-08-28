import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const HeroSection = () => (
    <Box
      sx={{
        backgroundImage: "url('../assets/HeroImg4.avif')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        py: 10,
        textAlign: 'center'
      }}
    >
      <Container>
        <Typography variant="h1" gutterBottom>
           Welcome to DigiLime Consulting
        </Typography>
        <Typography variant="h4" gutterBottom>
          Empowering Businesses with Innovative Solutions
        </Typography>
        <Typography variant="h5">
          In Software and Manufacturing Consulting
        </Typography>
      </Container>
    </Box>
  );
  

export default HeroSection;
