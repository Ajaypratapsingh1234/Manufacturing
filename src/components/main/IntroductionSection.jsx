import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const IntroductionSection = () => (
  <Box sx={{ py: 5 }}>
    <Container>
      <Typography variant="h6" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="body1">
        At DigiLime India, we are dedicated to transforming your business with tailored solutions in software consulting, software implementation, and manufacturing consulting. Our mission is to drive efficiency, innovation, and growth across diverse industries by integrating cutting-edge technologies and best practices.
      </Typography>
    </Container>
  </Box>
);

export default IntroductionSection;
