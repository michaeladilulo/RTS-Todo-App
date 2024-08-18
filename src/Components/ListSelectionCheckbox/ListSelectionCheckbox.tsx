import React, { ChangeEvent, FC } from 'react'
import './ListSelectionCheckbox.css'
import axios from 'axios'

type ListSelectionCheckboxProps = {
    id: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    listId: string;
}

const ListSelectionCheckbox:FC<ListSelectionCheckboxProps> = ({id, checked, onChange, listId}) => {

    const handleClickForListId = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
           const response = await axios.get(`http://localhost:3000/list/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response.data)
            listId = response.data.id;
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <span className='checkbox-container'>
        <input type='checkbox' checked={checked} onChange={(e) => {
            handleClickForListId(e);
            onChange(e);
        }} />
        </span>
    )
}

export default ListSelectionCheckbox