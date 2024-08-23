import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const AerospaceAndDefense = () => {
  return (
    <Box sx={{ padding: '20px', backgroundColor: '#eaeaea' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
            <img
              src="assets/aerospace-and-defense.jpg"
              alt="Aerospace and Defense"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#004d40' }}>
            Aerospace Manufacturing
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
            Aerospace Manufacturing is the process of designing, building, testing, and producing aircraft, spacecraft, and their components. It involves advanced technologies and precise engineering to create complex products that operate in extreme environments.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            This industry requires rigorous standards and quality controls to ensure safety and performance in demanding conditions. Innovations in materials science, propulsion systems, and avionics are key drivers of progress in aerospace manufacturing.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AerospaceAndDefense;
