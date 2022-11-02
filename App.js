import Header from './components/Header' // import from Header.js
import Tasks from './components/Tasks' // import from Tasks.js
import AddTask from './components/AddTask' // import from AddTask.js
import { useState } from 'react'

function App() {
  // true - shows form, false - hides form
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Finish NTWK Lab 5',
      day: 'Oct 23rd at 11:59pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Finish Firesides and Schedule Page',
      day: 'Oct 23rd at 11:59am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Finish React JS Crash Course',
      day: 'Oct 23rd at 11:59pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'Clean the espresso machine',
      day: 'Oct 24th at 11:59pm',
      reminder: false,
    }
  ])
  
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1 // to get a random id
    const newTask = { id, ...task}
    setTasks([...tasks, newTask]) // add newTask to array tasks
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === 
    id ? {...task, reminder: !task.reminder } : task))
  }

  // but it's not working? why??
  // need to add props or deconstructure it in Tasks.js
  // ternery operator without else - && 
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />      
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder} />
      ) : ('No Tasks To Show.')}
    </div>
  );
}

export default App;
