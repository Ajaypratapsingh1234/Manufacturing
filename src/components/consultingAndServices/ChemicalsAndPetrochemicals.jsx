import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const ChemicalsAndPetrochemicals = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f4f6f8' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/chemicals-and-petrochemicals.jpg"
              alt="Chemicals and Petrochemicals"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Chemical Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#bdc3c7' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#34495e' }}>
            Chemical Manufacturing is the process of converting raw materials into chemical products through various physical and chemical processes. This involves large-scale production of chemicals for various industries and consumer products.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6, color: '#34495e' }}>
            The industry focuses on efficiency, safety, and environmental sustainability. Advanced technologies and automation are used to optimize production processes and ensure high-quality products that meet industry standards.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChemicalsAndPetrochemicals;
