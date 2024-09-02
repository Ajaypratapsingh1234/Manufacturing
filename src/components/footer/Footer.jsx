import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        borderTop: '2px solid #444',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="body2">
              We are dedicated to providing high-quality products and services to meet your needs.
              Our commitment to excellence drives us to continuously innovate and improve.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <RouterLink to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Home
                </Typography>
              </RouterLink>
              <RouterLink to="/about-us" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  About Us
                </Typography>
              </RouterLink>
              <RouterLink to="/consulting-and-services" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Services
                </Typography>
              </RouterLink>
              <RouterLink to="/contact-us" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Contact
                </Typography>
              </RouterLink>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              <strong>Address:</strong> A-12, KH No. 11/7/2, GF,Lakhi Ram Park Near Rohini Sector-22,Suleman Nagar, Kirari North West Delhi- 110086
            </Typography>
            <Typography variant="body2">
              <strong>Phone:</strong> +91 8076656173
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> digilimeindia@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#555' }} />

        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <a href="https://www.facebook.com/Digilimeconsulting?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: '#fff' }}>
                <Facebook />
              </IconButton>
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.linkedin.com/company/digilime-india/" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: '#fff' }}>
                <LinkedIn />
              </IconButton>
            </a>
          </Grid>
          <Grid item>
            <a href="https://x.com/Digilime_MRP?t=L-UdA1vTZmBaTyR5gfnebw&s=08" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: '#fff' }}>
                <Twitter />
              </IconButton>
            </a>
          </Grid>
          <Grid item>
            <a href="https://www.instagram.com/digilime_consulting?igsh=MXdwb3ZvZWxyeGhhcQ==" target="_blank" rel="noopener noreferrer">
              <IconButton sx={{ color: '#fff' }}>
                <Instagram />
              </IconButton>
            </a>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#555' }} />

        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Digilime Consulting. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
