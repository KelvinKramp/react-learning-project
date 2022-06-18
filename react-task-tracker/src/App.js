import './App.css';
import PropTypes from 'prop-types'
import Header from './components/Header'
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';
import { useState } from 'react';
import { ThemeContext, ThemeUpdateContext } from './components/Context'


function App() {
  // TASK LIST
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Gebruik ciprixoin voor behandeling van CAD-UWI',
      recept: 'Ciproxin 2dd500mg 10d po',
      reminder: false,
    },
    {
      id: 2,
      text: 'Gebruik augmentin voor behandeling van ongecompliceerde huidinfecties',
      recept: 'Augmentin 3dd625mg 3d po ',
      reminder: false,
    }
  ])


  // ADD TASK FUNCTION
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log("ADD TASK")
    console.log("ID")
    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    console.log(task)
  }


  // SHOW ADDTASK FORM 
  const [showAddTask, setShowAddTask] = useState(false)
  const onAdd = () => setShowAddTask(!showAddTask)


  // DELETE TASK FUNCTION
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }


  // CHECKED BY SUPERVISOR
  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
    // console.log(tasks.filter(task => task.id === id? console.log(task.reminder) : ""))
  }


  // THE COMPONENT
  return (
    <ThemeContext.Provider value={{ tasks }}>
      <ThemeUpdateContext.Provider value={{ addTask, onAdd, deleteTask, toggleReminder }}>
        {
          <div className="container">
            <Header  showAddTask={showAddTask} />
            {showAddTask && <AddTask />}
            {tasks.length > 0 ? (
              <Tasks onDelete={deleteTask} onToggle={toggleReminder} />
            ) : ("No task to show")}
          </div>
        }
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}


// PROP DEFAULT AND TYPES
Header.defaultProps = {
  dr: "dr. Stoned"
}

Header.propTypes = {
  dr: PropTypes.string
}

export default App;
