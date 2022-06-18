import './App.css';
import PropTypes from 'prop-types'
import Header from './components/Header'
import { AddTask } from './components/AddTask';
import { Tasks } from './components/Tasks';
import { useState } from 'react';
import { ThemeContext, ThemeUpdateContext } from './components/Context'

function App() {
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

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log("ADD TASK")
    console.log("ID")
    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    console.log(task)
  }

  const [showAddTask, setShowAddTask] = useState(false)

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = (id) => {
    console.log(id)
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
    // console.log(tasks.filter(task => task.id === id? console.log(task.reminder) : ""))
  }




  return (
    <ThemeContext.Provider value={{ tasks }}>
      <ThemeUpdateContext.Provider value={{ addTask }}>
        {
          <div className="container">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
            {showAddTask && <AddTask />}
            {tasks.length > 0 ? (
              <Tasks task_list={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : ("No task to show")}
          </div>
        }
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

// Proptypes
Header.defaultProps = {
  dr: "dr. Stoned"
}

Header.propTypes = {
  dr: PropTypes.string
}

export default App;
