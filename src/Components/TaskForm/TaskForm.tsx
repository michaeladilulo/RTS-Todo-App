import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, FC, useState } from 'react';
import './TaskForm.css';
import axios from 'axios';
import { List } from '../../Types/Types';

type FormData = {
    title: string,
    completed: boolean,
    listId: string;
  }

  type ListForTaskProps = {
    title: string;
    completed: boolean;
    listId: List['id'];
  }

const TaskForm:FC<ListForTaskProps> = ({listId}) => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        completed: false,
        listId: listId
      });

      const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const {name, value, type, checked} = e.target;
        setFormData(previousState => ({
          ...previousState,
          [name]: type === 'checkbox' ? checked : value
        }))
      }

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
      
        try {
          const response = await axios.post(`http://localhost:3000/task`,
            formData
          )
          console.log(response.data)
        //   renderingLists(response.data, 'POST')
      
          setFormData({
            title: '',
            completed: false,
            listId: ''
          })
        } catch (error) {
          console.error('Error', error)
        }
      }

    return (
        <>
        {/* TODO: This will just be the way I stub it out now to get it to work, can refactor and talk to somebody about it later on */}

<Container component='main' maxWidth='xs' className='form-container'>
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
    <Typography component='p' className='form-header-title'>
        Create New Task
    </Typography>
    <Box component='form' noValidate onSubmit={handleSubmit} >
        <Grid justifyContent={'center'} alignItems={'center'}>
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
                    </Box>
                </Grid>
            <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <TextField 
                    autoComplete='given-name'
                    required
                    fullWidth
                    id='taskTitle'
                    label='Task Title'
                    onChange={handleChange}
                    value={formData.title}
                    name='title'
                    autoFocus
                />
            <Grid item xs={12} sm={8} sx={{ml:1}}>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='success'
                    >Submit
                </Button>
            </Grid>
            </Grid>
        </Grid>
    </Box>
    </Box>
</Container>
        {/* DONE: Create a checkbox in the top right of the list card that has a label of 'Create Tasks for lists' */}
        {/* When Checked => This form will show */}
        {/* When Not Checked => This form will not show */}
        {/* This checkbox when checked will run an api call that has an endpoint of List/${listId} */}
        {/* Once that list id is obtained, then I can add it to the URL for the post request for the tasks */}
        {/* The task URL will be /list/${listId}/task */}
        {/* Upon creation of the task you will see something in the database where the list is tied to the task */}
        {/* Will probably need to create a type for Task */}
        </>
    )
}

export default TaskForm;