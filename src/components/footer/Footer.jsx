import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
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
              <Link href="#" color="inherit" variant="body2" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ mb: 1 }}>
                About Us
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ mb: 1 }}>
                Services
              </Link>
              <Link href="#" color="inherit" variant="body2" sx={{ mb: 1 }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              <strong>Address:</strong> 1234 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2">
              <strong>Phone:</strong> (123) 456-7890
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> info@example.com
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: '#555' }} />

        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
