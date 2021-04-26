import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'

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
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
