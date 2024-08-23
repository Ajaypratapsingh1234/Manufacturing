import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const IndustrialEquipment = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/industrial-equipment.jpg"
              alt="Industrial Equipment"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Industrial Equipment Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555' }}>
            Industrial Equipment Manufacturing involves the production of machines and tools used in various industrial processes. This includes equipment for construction, mining, agriculture, and manufacturing industries.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            The industry focuses on precision engineering and durability to ensure equipment can withstand rigorous use in demanding environments. Advances in technology and materials continue to drive innovation in industrial equipment design and functionality.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndustrialEquipment;
