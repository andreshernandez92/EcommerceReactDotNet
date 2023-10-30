import { Container, Card, CardContent, Typography, Grid } from '@mui/material';

const paymentsData = [
  {
    id: "pi_3O6lS1GVq1NalTuj2o1v73Mw",
    amount: 111000,
    created: "2023-10-30T02:43:37Z",
    clientSecret: "pi_3O6lS1GVq1NalTuj2o1v73Mw_secret_2HtsVSZDGdqy3sSUCYt1nyuhA",
    currency: "usd",
    paymentMethodType: "card"
  },
  {
    id: "pi_3O6lS1GVq1NalTuj00dEE4kJ",
    amount: 111000,
    created: "2023-10-30T02:43:37Z",
    clientSecret: "pi_3O6lS1GVq1NalTuj00dEE4kJ_secret_UgpyPSpFFxT7Lu0gNDCNvA2ZU",
    currency: "usd",
    paymentMethodType: "card"
  }
];



export default function PaymentPage()  {

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
        {paymentsData.map((payment, index) => (
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
                  Created: {payment.created}
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

