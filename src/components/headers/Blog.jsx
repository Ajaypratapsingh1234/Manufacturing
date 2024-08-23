import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

const Blog = () => {
  return (
    <Box sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Stay Informed with the Latest Insights and Trends
      </Typography>
      <Typography variant="body1" color="text.secondary" component="p" sx={{ marginBottom: 4 }}>
        Our blog covers topics such as:
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ maxWidth: 345, height: '100%', margin: 'auto', borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="180"
              image='assets/tech-image.jpg'
              alt="Digital Transformation"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Digital Transformation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore how digital transformation is reshaping industries and driving innovation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ maxWidth: 345, height: '100%', margin: 'auto', borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="180"
              image='assets/factory-image.jpg'
              alt="Industry 4.0"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Industry 4.0
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Learn about the fourth industrial revolution and its impact on manufacturing.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ maxWidth: 345, height: '100%', margin: 'auto', borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="180"
              image='assets/software-image.jpg'
              alt="Best Practices in Software Implementation"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Best Practices in Software Implementation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover effective strategies for implementing software solutions in your organization.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card sx={{ maxWidth: 345, height: '100%', margin: 'auto', borderRadius: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="180"
              image='assets/case-study-image.jpg'
              alt="Case Studies of Successful Projects"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Case Studies of Successful Projects
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Read about our successful projects and the impact they’ve had on our clients.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Divider sx={{ marginY: 4 }} />
      <Typography variant="body1" color="text.secondary">
        Stay tuned for more updates and insights on our blog.
      </Typography>
    </Box>
  );
};

export default Blog;
