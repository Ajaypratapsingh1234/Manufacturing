import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const TextilesAndApparel = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#fafafa' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/textiles-and-apparel.jpg"
              alt="Textiles and Apparel"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Textile Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555' }}>
            Textile Manufacturing is the process of converting raw fibers into yarn, and then weaving or knitting this yarn into fabric. These fabrics are then further processed, dyed, printed, and finished to create a wide range of products like clothing, home furnishings, and industrial textiles.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            The industry involves several stages, including spinning, weaving, dyeing, and finishing. Each stage uses specialized equipment and techniques to ensure the quality and functionality of the final textile products.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TextilesAndApparel;
