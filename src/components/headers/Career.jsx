import { Box, Button, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Career = () => {
  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Join the DigiLime India Team
      </Typography>
      <Typography variant="body1" color="text.secondary" component="p" sx={{ marginBottom: 4 }}>
        Join the DigiLime India team and be part of a company that values innovation, collaboration, and professional growth. We offer:
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <List sx={{ bgcolor: 'background.paper', borderRadius: 2, boxShadow: 2 }}>
            <ListItem sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
              <ListItemText primary="Dynamic Work Environment: A collaborative and inclusive workplace where your ideas are valued." />
            </ListItem>
            <ListItem sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
              <ListItemText primary="Professional Development: Opportunities for continuous learning and career advancement." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Exciting Projects: Work on cutting-edge projects that make a real impact on our clients." />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Box sx={{ marginTop: 6 }}>
        <Typography variant="h6" component="h3" gutterBottom>
          What Our Team Looks Like
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box 
              component="img" 
              src='assets/team-photo1.jpg' 
              alt="Team brainstorming session" 
              sx={{ 
                width: '100%', 
                height: 300, // Fixed height
                objectFit: 'cover', // Ensures image covers the box without distortion
                borderRadius: 2, 
                boxShadow: 3 
              }} 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              component="img" 
              src='assets/team-photo2.jpg' 
              alt="Team event" 
              sx={{ 
                width: '100%', 
                height: 300, // Fixed height
                objectFit: 'cover', // Ensures image covers the box without distortion
                borderRadius: 2, 
                boxShadow: 3 
              }} 
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <Button variant="contained" color="primary">
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default Career;
