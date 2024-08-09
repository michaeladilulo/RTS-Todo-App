import React, { FC } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form'
import './ListForm.css'

const ListForm:FC = () => {

const {register, handleSubmit} = useForm();

  return (
    <Container component='main' maxWidth='xs'>
      <Box 
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Typography component='h1' variant='h5'>
        Create New List
      </Typography>
      <Box component='form' noValidate sx={{mt: 3}}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField 
              autoComplete='given-name'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
              {...register('firstName')}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              required
              fullWidth
              id='lastName'
              label='Last Name'
              autoComplete='family-name'
              {...register('lastName')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              fullWidth
              id='emailaddress'
              label='Email Address'
              type='email'
              autoComplete='email'
              {...register('email')}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              fullWidth
              id='password'
              label='Password'
              type='password'
              autoComplete='new-password'
              {...register('password')}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel 
            control={<Checkbox value='allowExtraEmails' color='primary' />}
            label='I agree to receive emails related to product updates'
            />
          </Grid>
        </Grid>
        <Button
        type='submit'
        fullWidth
        variant='contained'
        sx={{mt: 3, mb: 2}}
        >Submit</Button>
      </Box>
      </Box>
    </Container>
  )
}

export default ListForm