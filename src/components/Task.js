import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className={`task ${props.task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => props.onToggleReminder(props.task.id)}>
            <h3>{props.task.title} <FaTimes style={closeButtonStyle} onClick={() => props.onDelete(props.task.id)} /></h3>
            <p>{props.task.day}</p>
        </div>
    )
}

const closeButtonStyle = {
    color: 'crimson',
    cursor: 'pointer'
}

export default Task