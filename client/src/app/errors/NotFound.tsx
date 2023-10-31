import { Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: '100vh' }}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Page Not Found</Typography>
        <Typography variant="body1">
          The page you are looking for doesn't exist.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link} to='/catalog'
          style={{ marginTop: '20px' }}
        >
          Go back to the shop
        </Button>
      </Grid>
    )
}