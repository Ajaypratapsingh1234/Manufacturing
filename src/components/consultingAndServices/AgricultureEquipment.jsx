import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const AgricultureEquipment = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#f9fafb' }}>
      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={6} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src="assets/agriculture-equipment.jpeg"
              alt="Agriculture Equipment"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            Agriculture Equipment
          </Typography>
          <Divider sx={{ my: 2, borderColor: '#ddd' }} />
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6, color: '#555' }}>
            Agriculture Equipment encompasses a range of machinery and tools designed for various farming tasks such as planting, cultivating, harvesting, and processing crops. These tools are essential for modern agriculture to enhance productivity and efficiency.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6, color: '#555' }}>
            Modern agriculture equipment integrates advanced technologies such as GPS, automation, and precision farming tools to optimize performance and reduce manual labor. These innovations help in improving crop yields, managing resources effectively, and ensuring sustainable farming practices.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AgricultureEquipment;
