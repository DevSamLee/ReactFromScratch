import { useState } from 'react'

const Tasks = () => {
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
  // to update the tasks -> use SetTasks
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks
