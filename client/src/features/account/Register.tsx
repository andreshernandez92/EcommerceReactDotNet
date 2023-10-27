import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Avatar, Grid, Paper, TextField, Typography } from '@mui/material';
import agent from '../../app/api/agent';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { LockOutlined } from '@mui/icons-material';
import { toast } from 'react-toastify';
export default function Register() {
  const {register,setError ,handleSubmit, formState: {isSubmitting, errors, isValid}}= useForm({
    mode:'all'
  })
  const navigate = useNavigate();

function handleApiErrors(errors:any){
    console.log(errors)
    if(errors) {
        errors.forEach((error: string)=>{
            if(error.includes('Password')) {
                setError('password', {message: error})
            } else if (error.includes('Email')) {
                setError('email',{message:error})
            }else if (error.includes('Username')) {
                setError('username',{message:error})
            }
        });
    }
}

  return (
      <Container component={Paper} maxWidth="sm" 
      sx={{display: 'flex', flexDirection:'column', alignItems: 'center', p: 4}}>
             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit((data)=>
           agent.Account.register(data).then(
            ()=>{
                toast.success('Registration Sucessful - you can now login');
                navigate('/login');
            }
           ).catch(error=> handleApiErrors(error)))}
           noValidate sx={{ mt: 1 }}>
             <TextField
              margin="normal"
              fullWidth
              label="Username"
              autoFocus
             {...register('username',{required:'Username is required'})}
             error={!!errors.username}
             helperText={errors?.username?.message as string}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Email address"
             
             {...register('email',{required:'Email is required',
             pattern: {
                value: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/,
                message: 'Not a valid email address'
            }
            })}
             error={!!errors.email}
             helperText={errors?.email?.message as string}
            />
            <TextField
              margin="normal"
              fullWidth
              label="password"
              type="password"
              {...register('password',{required:'Password is required',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                message: 'Password does not meet complexity requirements'
            }})}
              error={!!errors.password}
              helperText={errors?.password?.message as string}
            />
            <LoadingButton
            disabled={!isValid}
            loading={isSubmitting}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </LoadingButton>
            <Grid container>
              <Grid item>
              <Link to='/login' style={{ textDecoration: 'none' }}>
                            {"Already have an account? Sign In"}
                        </Link>
              </Grid>
              </Grid>
          </Box>
      </Container>
  );
  }