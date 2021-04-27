import React from 'react'
import  {useState} from 'react'

const AddTask = (props) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (event) => {
        event.preventDefault()

        if (!title) {
            alert('Please add a task') 
            return
        }

        props.onAdd({title, day, reminder})
        setTitle('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="">Task</label>
                <input type="text" placeholder='Add Task' value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>

            <div className='form-control'>
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder='Add Day & Time' value={day} onChange={(event) => setDay(event.target.value)} />
            </div>

            <div className='form-control-check'>
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(event) => setReminder(event.target.checked)}/>
            </div>

            <input type="submit" className='btn btn-block' value="Save Task"/>
        </form>
    )
}

export default AddTask