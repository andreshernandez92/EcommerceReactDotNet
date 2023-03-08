import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

export default function ServerError(){

    return (
            <Container component={Paper}>
                    <Typography variant='h5' gutterBottom>Server Error</Typography>
            </Container>

    )
}