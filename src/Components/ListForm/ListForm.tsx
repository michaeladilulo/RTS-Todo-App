import React, { ChangeEvent, FC, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs';
import axios from 'axios'
import './ListForm.css'

type FormData = {
  title: string,
  createdBy: string,
  startDate: Dayjs | null,
  completed: boolean
}

const ListForm:FC = () => {
const [formData, setFormData] = useState<FormData>({
  title: '',
  createdBy: '',
  startDate: null,
  completed: false
});

const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  const {name, value} = e.target;
  setFormData(previousState => ({
    ...previousState,
    [name]: value
  }))
}

const handleDateChange = (date: Dayjs | null): void => {
  setFormData((previousState) => ({
    ...previousState,
    startDate: date
  }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();

  try {
    const response = await axios.post(`http://localhost:3000/list`,
      formData
    )
    console.log(response.data)

    setFormData({
      title: '',
      createdBy: '',
      startDate: null,
      completed: false
    })
  } catch (error) {
    console.error('Error', error)
  }
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
      <Box component='form' noValidate sx={{mt: 3}} onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item xs={12} sm={8}>
            <TextField 
              autoComplete='given-name'
              required
              fullWidth
              id='listTitle'
              label='List Title'
              onChange={handleChange}
              value={formData.title}
              name='title'
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField 
              required
              fullWidth
              id='createdBy'
              label='List Created By'
              autoComplete='family-name'
              onChange={handleChange}
              value={formData.createdBy}
              name='createdBy'
            />
          </Grid>
          <Grid item xs={12} sm={8}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                label='Select Start Date' 
                name='datePicker' 
                value={formData.startDate} 
                onChange={handleDateChange}
                />
              </LocalizationProvider>
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