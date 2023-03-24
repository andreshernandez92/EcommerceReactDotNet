import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {  useFormContext } from 'react-hook-form';
import AppTextInput from '../../app/components/AppTextInput';

export default function AddressForm() {
    const {control} = useFormContext();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
            <AppTextInput control={control}  name='FullName' label='Full Name'/>
        </Grid>
        <Grid item xs={12}>
        <AppTextInput control={control}  name='Address1' label='Address 1'/>
        </Grid>
        <Grid item xs={12}>
        <AppTextInput control={control}  name='Address2' label='Address 2'/>
        </Grid>
        <Grid item xs={12}sm={6}>
        <AppTextInput control={control}  name='City' label='City'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <AppTextInput control={control}  name='State' label='State'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <AppTextInput control={control}  name='Zip' label='Zip'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <AppTextInput control={control}  name='Country' label='Country'/>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
   </>
  );
}