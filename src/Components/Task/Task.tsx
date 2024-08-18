import React, { FC } from 'react'
import './Task.css';
import { Button } from '@mui/material';

type TaskProps = {
    title: string,
  }

const Task:FC<TaskProps> = ({title}) => {
  return (
    <div className='task-container'>
        <div className='input-title-container'>
            <input type='checkbox'/>
            <p>{title}</p>
        </div>
        <div>
            <Button variant='contained' color="success">Edit</Button>
            <Button variant='contained' color='error'>Delete</Button>
        </div>
    </div>
  )
}

export default Task