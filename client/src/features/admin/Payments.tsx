import { Container, Card, CardContent, Typography, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/store/configStore';
import { getPaymentAsync, setPaymentData } from './paymentslice';
import { useEffect } from 'react';


export default function PaymentPage()  {
  const { paymentData } = useAppSelector((state) => state.payments);
  const dispatch = useAppDispatch();
  
  useEffect(() => { 
    if(!paymentData){ 
      dispatch(getPaymentAsync()).then((response) => {
        dispatch(setPaymentData(response));
        
      });
    }
  }, []);
if (!paymentData) return <Typography variant="h3">You have no recent payments</Typography>;


    return (
      
    <Container maxWidth="sm">

        <Typography variant="h2" sx={{ fontSize: {
      xs: '2rem', // Adjust the font size for extra small screens (mobile)
      sm: '2rem', // Adjust the font size for small screens
      md: '2rem', // Adjust the font size for medium screens
      lg: '2rem', // Adjust the font size for large screens
      xl: '3rem', // Adjust the font size for extra large screens
    },my: 2 }}  > RECENT PAYMENTS</Typography>
    
    <Grid container spacing={2}>
  {paymentData && paymentData.items && paymentData.items.map((payment, index) => (
    <Grid item xs={12} key={payment.id}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6" component="div">
            Payment ID: {payment.id}
          </Typography>
          <Typography color="textSecondary">
            Amount: {payment.amount} {payment.currency}
          </Typography>
          <Typography color="textSecondary">
            Created: {new Date(payment.created).getDate()}
          </Typography>
          <Typography color="textSecondary">
            Client Secret: {payment.clientSecret}
          </Typography>
          <Typography color="textSecondary">
            Payment Method Type: {payment.paymentMethodType}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

    </Container>
  );
};

