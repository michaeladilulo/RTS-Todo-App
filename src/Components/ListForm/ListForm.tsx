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
  completionGoal?: string | null,
  completed: boolean,
}

type ListFormProps = {
  renderingLists: (listItem: any, requstType: 'POST' | 'DELETE') => void;
}

const ListForm:FC<ListFormProps> = ({renderingLists}) => {
const [formData, setFormData] = useState<FormData>({
  title: '',
  createdBy: '',
  completionGoal: null,
  completed: false
});

const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  const {name, value, type, checked} = e.target;
  setFormData(previousState => ({
    ...previousState,
    [name]: type === 'checkbox' ? checked : value
  }))
}

const handleDateChange = (newDate: Dayjs | null): void => {
  const formattedDate = newDate?.format('YYYY-MM-DD');
  setFormData({...formData, completionGoal: formattedDate})
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();

  try {
    const response = await axios.post(`http://localhost:3000/list`,
      formData
    )
    console.log(response.data)
    renderingLists(response.data, 'POST')

    setFormData({
      title: '',
      createdBy: '',
      completionGoal: null,
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
          <Grid item xs={12} sm={7}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                label='Select Completion Date' 
                name='datePicker' 
                value={formData.completionGoal ? dayjs(formData.completionGoal) : null} 
                onChange={handleDateChange}
                />
              </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={8}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type='checkbox'
                  id='completed'
                  name='completed'
                  checked={formData.completed}
                  onChange={handleChange}
                  className='form-input-checkbox'
                />
                <Typography sx={{ ml: 1 }}>Completed</Typography>
              </Box>
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

// npx json-server --watch data/db.json --port 3000

export default ListForm