import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MedicalDevices = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/medical-devices.webp"
              alt="Medical Devices"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Medical Device Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555' }}>
            Medical Device Manufacturing is the process of creating instruments, equipment, or software used in healthcare for diagnosis, treatment, monitoring, or prevention of disease. This field encompasses a range of devices from simple tools to complex machinery.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            The industry focuses on stringent quality controls and compliance with regulatory standards to ensure safety and effectiveness. Advances in technology and materials continually enhance the performance and capabilities of medical devices.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MedicalDevices;
