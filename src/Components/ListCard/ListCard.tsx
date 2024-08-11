import React, { FC } from 'react'
import './ListCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '@mui/material';

interface CardProps {
  createdBy: string,
  completionGoal: null,
  title: string,
  completedOn: null
}

const ListCard:FC<CardProps> = ({createdBy, completionGoal, title, completedOn}) => {
  return (
    <div className='card-container'>
      <div className='card-content'>
      <div className='card-header'>
        <FontAwesomeIcon icon={faTrash} className='font-awesome-trash'/>
        <span className='card-header-create-complete'>
        <span className='card-created-by'>Created By: {createdBy}</span>
        <span className='card-created-by'>Completion Goal: {completionGoal}</span>
        </span>
      </div>
      <div className='list-title'>
        <h2>{title}</h2>
      </div>
      <div className='card-footer'>
        <span className='card-checkbox'>
        <Checkbox /> <span className='list-completed'>Completed</span>
        </span>
        <span>
          <span>Completed On: {completedOn}</span>
        </span>
      </div>
      </div>

      <div>
      </div>

    </div>
  )
}

export default ListCard