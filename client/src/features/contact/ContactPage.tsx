import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import AppSnackbar from '../../app/components/AppSnackbar';

const ContactPage = () => {
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  return (
    <Container maxWidth="lg" sx={{// Margin
      mx: 2, // Horizontal margin
      my: 3, // Vertical margin
   }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Contact Us
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> 123 Main Street, City, Country
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> +1 (123) 456-7890
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> contact@yourwebsite.com
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h6" gutterBottom>
              Send us a Message
            </Typography>
            <form>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                margin="normal"
              />
          <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={() => {
            setSnackbarMessage('The email service has not been implemented but can be!');
            setSnackbarOpen(true);
            // You can also perform other actions (e.g., sending the message) here
          }}
        >
          Send Message
        </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <AppSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={() => setSnackbarOpen(false)}
      />
    </Container>
  );

};

export default ContactPage;
