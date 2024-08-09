import React, { FC } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './ListForm.css'

const ListForm:FC = () => {
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
              name='firstName'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              required
              fullWidth
              id='lastName'
              label='Last Name'
              autoComplete='family-name'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              fullWidth
              id='emailaddress'
              label='Email Address'
              type='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              required
              fullWidth
              id='password'
              label='Password'
              type='password'
            />
          </Grid>
          <Grid item xs={12} display={'flex'}>
            <Checkbox
              id='checkbox'
            />
            <Typography>
              I agree to receive emails related to product updates
            </Typography>
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