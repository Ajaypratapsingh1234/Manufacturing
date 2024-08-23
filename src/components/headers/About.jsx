import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import * as React from 'react';

function About() {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ marginTop: '16px' }}>
        <Grid item xs={12} md={6}>
          <img src="assets/HeroImg.jpg" alt="description" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
          <Typography variant="h3" component="h2" gutterBottom>
            Digilime India: Your ERP Experts
          </Typography>
          <Typography variant="body1">
            Digilime India is a specialized ERP consulting firm with up to six years of experience in guiding manufacturers through the complexities of ERP systems. We understand the gap between polished vendor demos and the challenges of implementation. Our mission is to offer unbiased, expert evaluation and critique, ensuring you select the ERP solution that truly meets your needs.
          </Typography>
        </Grid>
      </Grid>

      {/* Mission and Values Section */}
      <Box mt={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
          To empower businesses by providing world-class consulting services and technology solutions that foster innovation, efficiency, and growth.
        </Typography>

        <Typography variant="h4" component="h2" mt={4} gutterBottom>
          Our Values
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <HandshakeIcon />
            </ListItemIcon>
            <ListItemText primary="Integrity: We operate with transparency and honesty in all our dealings." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LightbulbIcon />
            </ListItemIcon>
            <ListItemText primary="Innovation: We are committed to staying ahead of the curve by embracing new technologies and methodologies." />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmojiEventsIcon />
            </ListItemIcon>
            <ListItemText primary="Customer Success: Our success is measured by the success of our clients." />
          </ListItem>
        </List>
      </Box>

      {/* Company Overview Section */}
      <Box mt={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Company Overview
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <img src="assets/Handshake.avif" alt="description1" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src="assets/LightBulb.jpg" alt="description2" style={{ width: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img src="assets/trophy.jpg" alt="description3" style={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
