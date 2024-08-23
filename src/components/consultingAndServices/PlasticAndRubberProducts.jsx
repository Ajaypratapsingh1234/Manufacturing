import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const PlasticAndRubberProducts = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={8} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/plastic-and-rubber-products.jpg"
              alt="Plastic and Rubber Products"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Plastics and Rubber Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555' }}>
            Plastics and Rubber Manufacturing involves transforming raw materials like crude oil and natural rubber into a diverse range of products through chemical and mechanical processes. This industry encompasses everything from everyday household items to complex industrial components.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            The sector focuses on innovation and efficiency, utilizing advanced techniques to produce high-quality materials that meet various industrial and consumer needs. It plays a crucial role in multiple industries, including automotive, packaging, and consumer goods.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlasticAndRubberProducts;
