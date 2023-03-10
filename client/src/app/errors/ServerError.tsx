import { Button, Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import history from '../customcomponents/Historycustom';
export default function ServerError(){
const locationinfo = useLocation();
    
return (
        
            <Container component={Paper}>
                {
                locationinfo.state.state?.error?(
                        <>
                    <Typography variant='h3' color='error' gutterBottom>{locationinfo.state.state}</Typography>
                    <Divider/>
                    <Typography>{locationinfo.state.error.detail || 'Internal server error'}</Typography>     
                        </>
                ): (
                <Typography variant='h5' gutterBottom>Server Error</Typography>
                )}
            <Button onClick={()=> history.push('/catalog')}> Go back to the Catalog!</Button>
            </Container>

    )
}