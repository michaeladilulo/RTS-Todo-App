import React, { FC } from 'react'
import './ListCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from '@mui/material';

const ListCard:FC = () => {
  return (
    <div className='card-container'>
      <div className='card-content'>
      <div className='card-header'>
        <FontAwesomeIcon icon={faTrash} className='font-awesome-trash'/>
        <span className='card-header-create-complete'>
        <span className='card-created-by'>Created By: Snoopy Mcgovenor</span>
        <span className='card-created-by'>Completion Goal: 12/12/2024</span>
        </span>
      </div>
      <div className='list-title'>
        <h2>Grocery Shopping</h2>
      </div>
      <div className='card-footer'>
        <span className='card-checkbox'>
        <Checkbox /> <span className='list-completed'>Completed</span>
        </span>
        <span>
          <span>Completed On: 12/12/2024</span>
        </span>
      </div>
      </div>
    </div>
  )
}

export default ListCard