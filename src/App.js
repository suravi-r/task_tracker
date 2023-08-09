import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App () {
  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Meeting',
    day: 'Feb 6th at 1:30pm',
    reminder: true,
    },
    {
      id: 2,
      text: 'Eating',
      day: 'Feb 9th at 1:00pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Sitting',
      day: 'Feb 4th at 1:40pm',
      reminder: false,
    }
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    const newTasks = tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)
    setTasks(newTasks)
  }

  return (
    <div className='container'>
      <Header 
      onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length> 0 ? <Tasks 
      tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}/> : 'No tasks to show'}
    </div> 
  )
}


export default App;
