import { Button, Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import history from '../customcomponents/Historycustom';
export default function ServerError(){

const location = useLocation();
return (
            <Container component={Paper}>
                {location.state ? (
                        <>
                    <Typography variant='h3' color='error' gutterBottom>{location.state.statusText}</Typography>
                    <Divider/>
                    <Typography>{location.state.state || 'Internal server error'}</Typography>     
                        </>
                ): (
                <Typography variant='h5' gutterBottom>Server Error</Typography>
                )}
            <Button onClick={()=> history.push('/catalog')}> Go back to the Catalog!</Button>
            </Container>

    )
}