import React, { FC, useState } from 'react';
import ListDeleteIcon from '../ListDeleteIcon/ListDeleteIcon';
import axios from 'axios';
import dayjs from 'dayjs';
import './ListCard.css';
import ListSelectionCheckbox from '../ListSelectionCheckbox/ListSelectionCheckbox';
import TaskForm from '../TaskForm/TaskForm';

interface CardProps {
  createdBy: string,
  completionGoal: null | string,
  title: string,
  completedOn: string | null,
  id: string;
  completed?: boolean;
  renderingLists: (listItem: any, requestType: 'POST' | 'DELETE') => void;
}

const ListCard:FC<CardProps> = ({id, createdBy, completionGoal, title, completedOn, completed, renderingLists}) => {
  const [listComplete, setListComplete] = useState<boolean>(completed ?? false);
  const [completionDate, setCompletionDate] = useState<string | null>(completedOn ?? '');
  const [checked, setChecked] = useState(false);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = dayjs().format('YYYY-MM-DD');
    const isChecked = event.target.checked;

    
    console.log(isChecked)
    setListComplete(isChecked);
    setCompletionDate(date)
    
    try {
      await axios.put(`http://localhost:3000/list/${id}`, {
        completionGoal: completionGoal,
        completedOn: isChecked ? date : null,
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
  
  const handleCheckmarkChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setChecked(event.target.checked);
  }


  return (
    <span className='card-container'>
      <span className='card-selection-and-deletion'>
        <ListDeleteIcon id={id} renderingLists={renderingLists}/>
        <div className='text-checkbox-container'>
        <span className='text-for-list-selection'>Click Checkbox To Add Tasks:</span><ListSelectionCheckbox id={id} checked={checked} onChange={handleCheckmarkChange} listId={id}/>  
        </div>
      </span>
    <div>
      <div className='card-content'>
      <div>
        <span className='card-header-create-complete'>
        <span className='card-created-by'>Created By: {createdBy}</span>
        <span className='card-created-by'>Completion Goal: {completionGoal}</span>
        </span>
      </div>
      <div className='list-title'>
        <h2>{title}</h2>
      </div>
      <div>
        {checked ? <TaskForm listId={id} /> : null}
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
    </div>
    </span>      
  )
}

export default ListCard