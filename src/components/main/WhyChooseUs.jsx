import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const WhyChooseUs = () => (
  <Container sx={{ py: 5 }}>
    <Typography variant="h4" gutterBottom>
      Why Choose DigiLime India?
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Proven Expertise
          </Typography>
          <Typography variant="body1">
            With years of experience in software and manufacturing consulting, we bring a wealth of knowledge...
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Tailored Solutions
          </Typography>
          <Typography variant="body1">
            We understand that every business is unique. Our solutions are customized to meet your specific needs...
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Customer-Centric Approach
          </Typography>
          <Typography variant="body1">
            Your success is our priority. We work closely with you to ensure that our services align with your business goals...
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>
);

export default WhyChooseUs;
