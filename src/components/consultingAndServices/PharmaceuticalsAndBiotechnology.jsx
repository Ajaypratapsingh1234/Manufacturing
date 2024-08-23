import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const PharmaceuticalsAndBiotechnology = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={8} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/pharmaceuticals-and-biotechnology.jpg"
              alt="Pharmaceuticals and Biotechnology"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Pharmaceuticals and Biotechnology
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555' }}>
            Pharmaceuticals and Biotechnology involve the research, development, and manufacturing of drugs and medical technologies. This sector is crucial for advancing medical science and improving public health by providing innovative treatments and therapies.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            The industry relies on cutting-edge technology and rigorous testing to ensure safety, efficacy, and quality in pharmaceutical products and biotechnological solutions. This includes everything from drug discovery to the production of biologics and medical devices.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PharmaceuticalsAndBiotechnology;
