import { Container, Grid, Typography, Paper } from '@mui/material';

const AboutPage = () => {
  return (
    <Container maxWidth="lg"   sx={{
      mx: 2,
      my: 3,
    }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            About Ecommercedotnet
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "2rem" }}>
            <Typography variant="h6" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1">
              Ecommercedotnet is your one-stop destination for all your
              online shopping needs. We were founded with the goal of
              providing a seamless and enjoyable online shopping experience.
              Our dedicated team works tirelessly to bring you the latest
              and greatest products, always at competitive prices.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h6" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1">
              At Ecommercedotnet, our mission is to make online shopping
              accessible, affordable, and convenient for everyone. We aim
              to exceed our customers' expectations by offering a diverse
              range of high-quality products, exceptional customer service,
              and a user-friendly shopping platform.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;