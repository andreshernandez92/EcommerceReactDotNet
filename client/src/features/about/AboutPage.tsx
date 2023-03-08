import { Button, ButtonGroup, Typography } from "@mui/material";
import { Container } from "@mui/system";
import agent from "../../app/api/agent";

export default function AboutPage(){
return(
 <Container>
    <Typography gutterBottom variant="h2"> Errors for testing purposes</Typography>
    <ButtonGroup>
        <Button variant='contained' onClick={()=> agent.TestErrors.get500Error().catch(error=> console.log(error))}>Test 500 Error</Button>
    </ButtonGroup>
 </Container>

)

}