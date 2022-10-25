import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  // to update the tasks -> use SetTasks
  return (
    <>
      {tasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete}
      onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks
