import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const FurnitureAndWoodProducts = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/furniture-and-wood-products.webp"
              alt="Furniture Manufacturing"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Furniture Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555' }}>
            Furniture manufacturing involves transforming raw materials into finished products. This process includes design, cutting, shaping, assembling, and finishing materials like wood, metal, or plastic. The goal is to produce functional and aesthetically pleasing items for various settings, including homes and offices.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            The industry emphasizes precision, craftsmanship, and quality. Modern techniques and technologies are utilized to enhance production efficiency and meet high standards of design and durability.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FurnitureAndWoodProducts;
