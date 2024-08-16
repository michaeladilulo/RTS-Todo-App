import React, { FC } from 'react'
import './TrashDeleteIcon.css'
import axios from 'axios'

type TrashDeleteIconProps = {
    id: string;
    renderingLists: (listItem: any, requestType: 'POST' | 'DELETE') => void;
}

const TrashDeleteIcon:FC<TrashDeleteIconProps> = ({id, renderingLists}) => {

    const handleClick = async () => {
        try {
           const response = await axios.delete(`http://localhost:3000/list/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log('RESPONSE', response)
            console.log(response.data)
            renderingLists({ id }, 'DELETE');
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <button className='font-awesome-trash' onClick={handleClick}>
        X
        </button>
    )
}

export default TrashDeleteIcon