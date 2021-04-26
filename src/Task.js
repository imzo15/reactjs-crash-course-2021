import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = (props) => {
    return(
        <div className='task'>
            <h3>{props.task.title} <FaTimes style={closeButtonStyle} /></h3>
            <p>{props.task.day}</p>
        </div>
    )
}

const closeButtonStyle = {
    color: 'red',
    cursor: 'pointer'
}

export default Task