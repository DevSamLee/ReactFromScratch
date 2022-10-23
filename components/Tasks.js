const Tasks = ({ tasks }) => {
  // to update the tasks -> use SetTasks
  return (
    <>
      {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks
