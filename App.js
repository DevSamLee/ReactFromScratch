import Header from './components/Header' // import from Header.js
import Tasks from './components/Tasks' // import from Tasks.js
import { useState } from 'react'

function App() {
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

  // but it's not working? why??
  // need to add props or deconstructure it in Tasks.js 
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
