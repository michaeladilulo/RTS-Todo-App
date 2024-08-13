import React, { FC, useState } from 'react'
import './ListCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface CardProps {
  createdBy: string,
  completionGoal: null,
  title: string,
  completedOn: null
}

const ListCard:FC<CardProps> = ({createdBy, completionGoal, title, completedOn}) => {
  const [listComplete, setListComplete] = useState(false);
  const [completionDate, setCompletionDate] = useState<string | null>(null);

  const handleChange = (event: { target: { checked: boolean; }; }) => {
    setListComplete(event.target.checked)

    event.target.checked === true ? setCompletionDate(new Date().toISOString().substring(0, 10)) : setCompletionDate(null);
  }

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
        <input type ='checkbox' className='list-checkbox' onChange={handleChange}/> <span className='list-completed'>Completed</span>
        </span>
        <span>
          <span>Completed On: {completedOn} {listComplete && completionDate ? completionDate : null}</span>
        </span>
      </div>
      </div>
    </div>
  )
}

export default ListCard