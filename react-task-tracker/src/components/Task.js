import { FaTimes } from "react-icons/fa";
import { IconContext } from 'react-icons'
import { ThemeUpdateContext } from './Context'
import { useContext } from 'react'


export const Task = ( {task} ) => {
    const { deleteTask, toggleReminder } = useContext(ThemeUpdateContext)
    const text = task.text
    const recept = task.recept
    const id = task.id

    return (
        <div 
        // DONT DO THIS: className={`task $(task.reminder && 'reminder')`} -> USE CURLY BRACES
        className={`task ${task.reminder && 'reminder'}`}
        onDoubleClick = {() => toggleReminder(id) } >
            <IconContext.Provider value={{ size: '70px', cursor: 'pointer' }}>
                <h3>{text} <FaTimes onClick={() => deleteTask(id)} /> </h3>
                <p>{recept}</p>
            </IconContext.Provider>
        </div >
    )
}
