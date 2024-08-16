import React, { FC, useEffect, useState } from 'react'
import './TrashDeleteIcon.css'
import axios from 'axios'

type TrashDeleteIconProps = {
    id: string;
    renderingLists: any;
}

const TrashDeleteIcon:FC<TrashDeleteIconProps> = ({id, renderingLists}) => {

    const handleClick = async () => {
        try {
           const response = await axios.delete(`http://localhost:3000/list/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response.data)
            renderingLists(response.data);
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