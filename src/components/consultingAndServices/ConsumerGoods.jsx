import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const ConsumerGoods = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f0f4f8' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/consumer-goods.jpg"
              alt="Consumer Goods Manufacturing"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
            Consumer Goods Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#bdc3c7' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#34495e' }}>
            Consumer Goods Manufacturing involves the production of products intended for personal use and consumption. This includes a wide range of products such as food, beverages, clothing, electronics, and household items.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6, color: '#34495e' }}>
            The industry emphasizes efficiency, quality, and safety in its manufacturing processes. Advanced technologies and innovative practices are applied to meet consumer demands and ensure product reliability and satisfaction.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ConsumerGoods;
