import { Button, Grid, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function ServerError() {
    const {state} = useLocation();

    return (
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: '100vh' }}>
            {state?.error ? (
                <>
      <Typography variant="h1">   {state.error.title}</Typography>
      <Typography variant="h4">Server Error</Typography>
      <Typography variant="body1">
        {console.log(state.error)}
      {state.error.detail || 'Internal server error'}
      </Typography>
      </>
               
            ) : (
                <>
                <Typography variant="h1">500</Typography>
                <Typography variant="h4">Server Error</Typography>
                <Typography variant="body1">
                  Sorry, something went wrong on our end.
                </Typography>
                </>
            )}
             <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        style={{ marginTop: '20px' }}
      >
        Go to Home
      </Button>
      </Grid>
   
    )
}