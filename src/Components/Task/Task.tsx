import React, { FC } from 'react'
import './Task.css';
import { Button } from '@mui/material';

type TaskProps = {
    title: string,
  }

const Task:FC<TaskProps> = ({title}) => {
  return (
    <div className='task-container'>
        <span className='input-title-container'>
            <input type='checkbox'/>
            <p className='task-title'>{title}</p>
        </span>
        <span>
            <Button variant='contained' color="success">Edit</Button>
            <Button variant='contained' color='error'>Delete</Button>
        </span>
    </div>
  )
}

export default Task