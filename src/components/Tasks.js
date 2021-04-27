import React from 'react'
import Task from './Task'

const Tasks = (props) => {
    
    return(
        <div>
            {props.tasks.map((task) => (<Task key={task.id} task={task} onToggleReminder={props.onToggleReminder} onDelete={props.onDelete} />))}
        </div>
    )
}

export default Tasks