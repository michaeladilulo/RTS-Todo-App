import React, { FC } from 'react'
import './TrashDeleteIcon.css'
import axios from 'axios'

type TrashDeleteIconProps = {
    id: string
}

const TrashDeleteIcon:FC<TrashDeleteIconProps> = ({id}) => {
    
    const handleClick = async () => {
        try {
            await axios.delete(`http://localhost:3000/list/${id}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

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