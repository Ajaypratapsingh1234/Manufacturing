import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const RenewableEnergyEquipment = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/renewable-energy-equipment.avif"
              alt="Renewable Energy Equipment"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Renewable Energy Equipment
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555' }}>
            Renewable Energy Equipment encompasses technologies and systems designed to harness energy from renewable sources like solar, wind, and hydropower. This equipment is crucial for the transition to sustainable energy systems and helps in reducing dependence on fossil fuels.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            The industry focuses on innovation and efficiency to improve energy capture, storage, and distribution. By leveraging advanced technologies, renewable energy equipment supports the global effort to combat climate change and promote environmental sustainability.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RenewableEnergyEquipment;
