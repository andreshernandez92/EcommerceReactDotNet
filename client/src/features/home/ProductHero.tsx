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
      <Typography color="inherit" align="center" variant="h2" >
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
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body1" color="inherit" sx={{ mt: 2 }}>
      Ecommercedotnet is your one-stop shop for all things e-commerce.</Typography>
    </ProductHeroLayout>
  );
}