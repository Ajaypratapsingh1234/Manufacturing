import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const ElectronicsAndElectricalEquipment = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/electronics-and-electrical-equipment.jpg"
              alt="Electronics Manufacturing"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Electronics Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7, color: '#555' }}>
            Electronics Manufacturing involves the assembly of electronic components into finished products. This process includes creating and soldering printed circuit boards, integrating various electronic components, and rigorous testing to ensure optimal functionality and quality.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#555' }}>
            The industry is characterized by rapid technological advancements and the need for precision engineering. High standards and cutting-edge techniques are employed to produce reliable and innovative electronic devices.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ElectronicsAndElectricalEquipment;
