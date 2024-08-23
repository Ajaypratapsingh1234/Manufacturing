import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

const CaseStudies = () => {
  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Learn How DigiLime India Has Helped Businesses Achieve Their Goals
      </Typography>
      <Typography variant="body1" color="text.secondary" component="p" sx={{ marginBottom: 4 }}>
        Our case studies provide in-depth insights into:
      </Typography>
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Client Challenges
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The issues our clients faced before partnering with us.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Our Approach
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The strategies and solutions we implemented to overcome these challenges.
        </Typography>
      </Box>
      <Box sx={{ marginBottom: 6 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          Results
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The measurable impact of our services on the client’s business.
        </Typography>
      </Box>
      <Divider sx={{ marginY: 4 }} />
      <Typography variant="h6" component="h3" gutterBottom>
        Visual Examples
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box 
            sx={{ 
              width: '100%', 
              height: 300, // Fixed height
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              overflow: 'hidden', 
              borderRadius: 2, 
              boxShadow: 3 
            }}
          >
            <Box 
              component="img" 
              src='assets/before-image.jpg' 
              alt="Before" 
              sx={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' // Ensures image covers the box without distortion
              }} 
            />
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ marginTop: 1 }}>
            Before: Initial state of the project or metrics.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box 
            sx={{ 
              width: '100%', 
              height: 300, // Fixed height
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              overflow: 'hidden', 
              borderRadius: 2, 
              boxShadow: 3 
            }}
          >
            <Box 
              component="img" 
              src='assets/after-image.avif' 
              alt="After" 
              sx={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' // Ensures image covers the box without distortion
              }} 
            />
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ marginTop: 1 }}>
            After: Improved state of the project or metrics.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box 
            sx={{ 
              width: '100%', 
              height: 300, // Fixed height
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              overflow: 'hidden', 
              borderRadius: 2, 
              boxShadow: 3 
            }}
          >
            <Box 
              component="img" 
              src='assets/success-metrics.png' 
              alt="Success Metrics" 
              sx={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' // Ensures image covers the box without distortion
              }} 
            />
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ marginTop: 1 }}>
            Success Metrics: Key metrics showing the impact of our services.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaseStudies;
