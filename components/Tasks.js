import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {
  // to update the tasks -> use SetTasks
  return (
    <>
      {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  )
}

export default Tasks
