import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const GlassAndCeramics = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/glass-and-ceramics.webp"
              alt="Glass and Ceramics Manufacturing"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Glass and Ceramics Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555' }}>
            Glass and ceramics manufacturing involves creating products from materials like glass and clay. This process includes shaping, firing, and finishing to produce items used in various applications, from household items to industrial components.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            The industry focuses on precision and craftsmanship, utilizing advanced techniques to ensure product quality and durability. Innovations in technology and design continue to evolve, enhancing the functionality and aesthetic appeal of glass and ceramic products.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GlassAndCeramics;
