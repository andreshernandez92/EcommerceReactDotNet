import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {  Typography } from "@mui/material";
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { Link } from 'react-router-dom';
function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
        component={Link} to='/contact'
      >
        <Typography variant="h4" component="span">
         Got any questions?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Contact Us!
      </Typography>
      <LoyaltyIcon    sx={{ width: 100 }}/>
    </Container>
  );
}

export default ProductSmokingHero;