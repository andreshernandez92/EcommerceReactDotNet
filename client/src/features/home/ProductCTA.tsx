import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../../app/components/AppButton';
import {   Typography, TextField } from "@mui/material";
import AppSnackbar from '../../app/components/AppSnackbar';
function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'warning.main',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive offers
              </Typography>
              <Typography variant="h5">
                Taste the holidays of the everyday close to home.
              </Typography>
              
              <TextField
                placeholder="Your email"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2, background: "white", padding: 1}}
              />
              
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'https://github.com/andreshernandez92/EcommerceReactDotNet/blob/master/client/src/app/utils/images/productCTAImageDots.png',
            }}
          />
          <Box
            component="img"
            src="https://github.com/andreshernandez92/EcommerceReactDotNet/blob/master/client/src/app/utils/images/ecommercesite.jpg?raw=true"
            alt="ecommerce image"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '80%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <AppSnackbar
        open={open}
        closeFunc={handleClose}
        message="The email service has not been implemented but can be!"
      />
    </Container>
  );
}

export default ProductCTA;