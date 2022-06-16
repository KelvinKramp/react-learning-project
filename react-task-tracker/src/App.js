import './App.css';
import PropTypes from 'prop-types'
import Header from './components/Header'
import { Tasks } from './components/Tasks';
import { useState } from 'react';
 
 

function App() {
  const [tasks, setTasks] = useState([
    {
       id:1 ,
       text: 'Gebruik ciprixoin voor behandeling van CAD-UWI',
       recept: 'Ciproxin 2dd500mg 10d po',
       reminder: true,
    },
    {
       id:2 ,
       text: 'Gebruik augmentin voor behandeling van ongecompliceerde huidinfecties',
       recept: 'Augmentin 3dd625mg 3d po ',
       reminder: true,
    }
   ])

  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <h1>Zoek richtlijn</h1>
      <Header />
      <Tasks task_list={tasks} onDelete={deleteTask}/>
    </div>  
  );
}

Header.defaultProps = {
  dr: "dr. Stoned"
}

Header.propTypes = {
  title: PropTypes.string
}

export default App;
