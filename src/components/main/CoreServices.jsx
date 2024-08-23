import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const services = [
  {
    title: "Software Consulting & Services",
    description: "Our software consulting services are designed to help you navigate the complexities of modern technology...",
    image: "assets/SoftwareConsulting.jpg"
  },
  {
    title: "Software Implementation",
    description: "We provide end-to-end software implementation services that transform your ideas into reality...",
    image: "assets/SoftwareDevelopment.avif"
  },
  {
    title: "Manufacturing Consulting",
    description: "Our manufacturing consulting services are tailored to optimize your production processes...",
    image: "assets/ManufacturingConsulting.jpg"
  }
];

const CoreServices = () => (
  <Container sx={{ py: 5 }}>
    <Typography variant="h4" gutterBottom>
      Our Core Services
    </Typography>
    <Grid container spacing={4}>
      {services.map((service, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200" // Set a fixed height for the image
              image={service.image}
              alt={service.title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body1">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default CoreServices;
