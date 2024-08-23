import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const ConstructionMaterials = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/construction-materials.jpg"
              alt="Construction and Building Materials"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Construction and Building Materials Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#bdc3c7' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#34495e' }}>
            Construction & Building Materials Manufacturing involves producing essential materials such as cement, steel, bricks, glass, and wood. These materials are crucial for the construction of residential, commercial, and infrastructure projects.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6, color: '#34495e' }}>
            The industry focuses on quality, durability, and efficiency in material production. Advanced technologies and sustainable practices are employed to meet the growing demands of modern construction projects and ensure structural integrity.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConstructionMaterials;
