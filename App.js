import Header from './components/Header' // import from Header.js
import Tasks from './components/Tasks' // import from Tasks.js
import AddTask from './components/AddTask' // import from AddTask.js
import { useState, useEffect } from 'react'

function App() {
  // true - shows form, false - hides form
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
  
  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1 // to get a random id
    // const newTask = { id, ...task}
    // setTasks([...tasks, newTask]) // add newTask to array tasks
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === 
    id ? {...task, reminder: data.reminder } : task))
  }

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
