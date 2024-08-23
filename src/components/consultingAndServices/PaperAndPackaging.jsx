import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const PaperAndPackaging = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#fafafa' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={8} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/paper-and-packaging.webp"
              alt="Paper and Packaging Manufacturing"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Paper and Packaging Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#555' }}>
            Paper and Packaging Manufacturing involves the production of paper products and packaging materials. This includes processes such as pulp production, paper milling, and the creation of various packaging solutions designed to protect and transport goods.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
            The industry focuses on sustainability and innovation, with advancements in materials and processes to reduce environmental impact and improve efficiency in packaging and distribution.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaperAndPackaging;
