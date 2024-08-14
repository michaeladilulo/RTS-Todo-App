import React, { FC, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import './ListCard.css'
import dayjs from 'dayjs';
import { Button } from '@mui/material';

interface CardProps {
  createdBy: string,
  completionGoal: null,
  title: string,
  completedOn: string | null,
  id: string;
  completed?: boolean;
}

const ListCard:FC<CardProps> = ({id, createdBy, completionGoal, title, completedOn, completed}) => {
  const [listComplete, setListComplete] = useState<boolean>(completed ?? false);
  const [completionDate, setCompletionDate] = useState<string | null>(completedOn ?? '');

  const [creationBy, setCreatedBy] = useState('')
  const [cardTitle, setCardTitle] = useState('')
  const [cardId, setCardId] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/list/${id}`);
        const data = response.data;
        setListComplete(response.data.completed);
        setCompletionDate(response.data.completedOn ?? completedOn);
      } catch (error) {
        console.error('Error Fetching List Data', error)
      }
    };

    fetchData();
  }, [id])

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = dayjs().format('YYYY-MM-DD');
    const isChecked = event.target.checked;
    
    console.log(isChecked)
    setListComplete(isChecked);
    setCompletionDate(date)

    setCreatedBy(createdBy);
    setCardTitle(title);
    setCardId(id);
    
    try {
      await axios.put(`http://localhost:3000/list/${id}`, {
        completionGoal: completionGoal,
        completedOn: date ? date : null,
        createdBy: createdBy,
        title: title,
        id: id,
        completed: isChecked
      }, 
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      setListComplete(isChecked);
    } catch (error) {
      console.error('Error updating list data:', error);
    }
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      completionGoal,
      completedOn: completionDate,
      createdBy,
      title,
      id,
      completed: listComplete,
    };

    try {
      await axios.put(`http://localhost:3000/list/${id}`, formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (      
    <form onSubmit={handleSubmit} className='card-container'>
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
        <input type ='checkbox' className='list-checkbox' onChange={handleChange} checked={listComplete}/> <span className='list-completed'>Completed</span>
        </span>
        <span>
          <span className='list-completed-on-data'>Completed On: {listComplete && completionDate ? completionDate : null}</span>
        </span>
      </div>
      </div>
      <div className='list-form-button-container'>
      <Button variant='contained' color='success' type='submit' className='list-form-button'>Save Changes</Button>
      </div>
    </form>
  )
}

export default ListCard