import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const FoodAndBeverage = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#fafafa' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/food-and-beverage.webp"
              alt="Food and Beverage Manufacturing"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Food and Beverage Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7, color: '#555' }}>
            Food and Beverage Manufacturing involves converting raw materials into consumable products like food and drinks. This process includes stages such as processing, packaging, and preparing goods for distribution.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#555' }}>
            The industry focuses on maintaining high standards of quality and safety while optimizing production techniques to ensure efficient and sustainable manufacturing practices.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FoodAndBeverage;
