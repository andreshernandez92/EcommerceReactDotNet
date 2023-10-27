import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TvIcon from '@mui/icons-material/Tv';
import BiotechIcon from '@mui/icons-material/Biotech';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="https://github.com/andreshernandez92/EcommerceReactDotNet/blob/master/client/src/app/utils/images/appCurvyLines.png?raw=true"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
                <SupportAgentIcon   sx={{width: 100, height: 55 }}/>
        
              <Typography variant="h6" sx={{ my: 5 }}>
              Customer focus
              </Typography>
              <Typography variant="h5">
                {
                  ' We are obsessed with our customers. We listen to their feedback and use it to improve our products, services, and website. '
                }
                {
                  ' We want to make sure that our customers have the best possible shopping experience.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
                <BiotechIcon  sx={{ width: 100,height: 55 }}/>
         
              <Typography variant="h6" sx={{ my: 5 }}>
                Innovation
              </Typography>
              <Typography variant="h5">
                {
                  'We are constantly innovating to find new ways to improve the customer experience. '
                }
                {' We use the latest technologies and trends to create a website that is easy to use, visually appealing, and secure.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
            <TvIcon sx={{ height: 55 , width: 100 } }/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {'We are transparent with our customers about everything from our pricing to our shipping policies.'}
                {'We want our customers to trust us and feel confident when shopping on our website.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;