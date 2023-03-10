import { Button, Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";
import history from '../customcomponents/Historycustom';
export default function NotFound(){
return(
            <Container component={Paper} sx={{height:400}}>
               
                    <Typography variant='h3' color='error' gutterBottom>Oops - we could not find what you are looking for</Typography>
                    <Divider/>
                    <Button onClick={()=> history.push('/catalog')}> Go back to the Catalog!</Button>
            </Container>
)

}