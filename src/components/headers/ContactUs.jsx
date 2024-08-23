import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

const ContactUs = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '20px', position: 'relative' }}>
      <img src="assets/office-background.jpg" alt="Office Background" style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
      <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
      <Typography variant="h4" component="h2" gutterBottom color="white">
        Ready to take your business to the next level?
      </Typography>
      <Typography variant="body1" color="white" component="p">
        Contact DigiLime India today to learn how we can help. Whether you’re looking for a consultation or have specific questions about our services, our team is here to assist you.
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '400px', margin: 'auto' }}>
        <TextField 
          label="Name" 
          variant="outlined" 
          margin="normal" 
          fullWidth 
          InputLabelProps={{ 
            style: { color: 'white' } // White label color
          }}
          InputProps={{ 
            style: { color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px', border: '1px solid white' } // White border and text color
          }} 
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          label="Email" 
          variant="outlined" 
          margin="normal" 
          fullWidth 
          type="email" 
          InputLabelProps={{ 
            style: { color: 'white' }
          }}
          InputProps={{ 
            style: { color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px', border: '1px solid white' }
          }} 
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          label="Phone Number" 
          variant="outlined" 
          margin="normal" 
          fullWidth 
          InputLabelProps={{ 
            style: { color: 'white' }
          }}
          InputProps={{ 
            style: { color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px', border: '1px solid white' }
          }} 
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          label="Company" 
          variant="outlined" 
          margin="normal" 
          fullWidth 
          InputLabelProps={{ 
            style: { color: 'white' }
          }}
          InputProps={{ 
            style: { color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px', border: '1px solid white' }
          }} 
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          label="Message" 
          variant="outlined" 
          margin="normal" 
          fullWidth 
          multiline 
          rows={4} 
          InputLabelProps={{ 
            style: { color: 'white' }
          }}
          InputProps={{ 
            style: { color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '4px', border: '1px solid white' }
          }} 
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactUs;
