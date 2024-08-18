import React, { ChangeEvent, FC } from 'react'
import './ListSelectionCheckbox.css'
import axios from 'axios'

type ListSelectionCheckboxProps = {
    id: string;
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void; // Add onChange prop
}

const ListSelectionCheckbox:FC<ListSelectionCheckboxProps> = ({id, checked, onChange}) => {

    const handleClick = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
           const response = await axios.get(`http://localhost:3000/list/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <span className='checkbox-container'>
        <input type='checkbox' checked={checked} onChange={(e) => {
            handleClick(e);
            onChange(e);
        }} />
        </span>
    )
}

export default ListSelectionCheckbox