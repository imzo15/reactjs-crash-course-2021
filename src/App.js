import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Doctor\'s appointment',
      day: 'Feb 1st at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      title: 'Meeting at school',
      day: 'Feb 2nd at 2:30pm',
      reminder: true
    },
    {
      id: 3,
      title: 'Grocery shopping',
      day: 'Feb 3rd at 2:30pm',
      reminder: false
    }
  ])
  // 1:03
  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => task.id !== id))
  }  

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!task.reminder} : task))
  }   

  return (
    <div className="container">
      <Header />
      {(tasks.length > 0) ? <Tasks tasks={tasks} onToggleReminder={toggleReminder} onDelete={deleteTask} /> : 'No tasks to display'}
      
    </div>
  );
}

export default App;
