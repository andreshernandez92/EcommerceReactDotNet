import { Link } from 'react-router-dom';
import Button from '../../app/components/AppButton';
import ProductHeroLayout from './ProductHeroLayout';
import { Typography } from '@mui/material';

const backgroundImage =
  'https://github.com/andreshernandez92/EcommerceReactDotNet/blob/master/client/src/app/utils/images/heroimage.png?raw=true';
  
export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
<Typography
  color="inherit"
  align="center"
  variant="h2"
  sx={{
    fontSize: {
      xs: '2rem', // Adjust the font size for extra small screens (mobile)
      sm: '3rem', // Adjust the font size for small screens
      md: '4rem', // Adjust the font size for medium screens
      lg: '5rem', // Adjust the font size for large screens
      xl: '6rem', // Adjust the font size for extra large screens
    }}}
>
  ECOMMERCEDOTNET STORE
</Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
       Sign up for Ecommercedotnet today!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component={Link}
        to="/register"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body1" color="inherit" sx={{ mt: 2 }}>
      Ecommercedotnet is your one-stop shop for all things e-commerce.</Typography>
    </ProductHeroLayout>
  );
}


