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
const handleFormSubmit = (formData: any) => {
  console.log('Form data is ', formData)
}

  return (
    <Container component='main' maxWidth='xs' className='form-container'>
      <Box 
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      <Typography component='h1' variant='h5' className='form-header-title' sx={{mt:4}}>
        Create New List
      </Typography>
      <Box component='form' noValidate sx={{mt: 3}} onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={12} sm={8}>
            <TextField 
              autoComplete='given-name'
              required
              fullWidth
              id='listTitle'
              label='List Title'
              autoFocus
              {...register('listTitle')}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField 
              required
              fullWidth
              id='createdBy'
              label='List Created By'
              autoComplete='family-name'
              {...register('createdBy')}
            />
          </Grid>
            <Grid item xs={12} sm={8}>
            <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{mt: 3, mb: 4}}
            >Submit
            </Button>
            </Grid>
        </Grid>
      </Box>
      </Box>
    </Container>
  )
}

export default ListForm