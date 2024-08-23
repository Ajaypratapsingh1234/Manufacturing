import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MetalFabricationAndMachinery = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/metal-fabrication-and-machinery.jpg"
              alt="Metalworking and Machinery Manufacturing"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Metalworking and Machinery Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555' }}>
            Metalworking is the process of shaping metal into desired forms using various techniques. It involves cutting, bending, and forming metal to create products. This process is fundamental to producing high-quality metal components used in various applications.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            Machinery manufacturing involves the production of machines and tools used across different industries. These machines are essential for operations in sectors such as construction, agriculture, and general manufacturing, facilitating efficient and precise work.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MetalFabricationAndMachinery;
