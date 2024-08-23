import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Automotive = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f0f4f8' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/automotive.webp"
              alt="Automotive Manufacturing"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Automotive Manufacturing
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#ccc' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#555' }}>
            Automotive manufacturing is the process of designing, producing, and assembling vehicles, including cars, trucks, and motorcycles. It involves complex supply chains, advanced technology, and rigorous quality control.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6, color: '#555' }}>
            The industry is characterized by its emphasis on precision, safety, and efficiency. Modern automotive manufacturing leverages automation, robotics, and sophisticated software to meet high standards of quality and performance.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Automotive;
