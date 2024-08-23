import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const EngineeringManufacturing = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/engineering-manufacturing.webp"
              alt="Engineering Manufacturing"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Engineering Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7, color: '#555' }}>
            Engineering Manufacturing encompasses the design, production, and assembly of engineering components and systems. This field involves advanced technology and precise engineering practices to produce high-quality, reliable products.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#555' }}>
            The process is characterized by its complexity and the need for meticulous quality control, utilizing cutting-edge techniques and technologies to meet rigorous standards and ensure optimal performance.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EngineeringManufacturing;
