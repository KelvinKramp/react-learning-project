import { FaTimes } from "react-icons/fa";
import { IconContext } from 'react-icons'

export const Task = (props) => {
    const text = props.task.text
    const recept = props.task.recept
    const id = props.task.id
    const onDelete = props.onDelete
    const onToggle = props.onToggle
    const task = props.task
    // console.log('test')
    // console.log(task.reminder)
    // console.log(`task $(task.reminder ? 'reminder': 'task')`)
    // console.log((task.reminder ? 'reminder': 'task'))
    return (
        <div 
        // DONT DO THIS: className={`task $(task.reminder && 'reminder')`} -> USE CURLY BRACES
        className={`task ${task.reminder && 'reminder'}`}
        onDoubleClick = {() => onToggle(id) } >
    <IconContext.Provider value={{ size: '70px', cursor: 'pointer' }}>
        <h3>{text} <FaTimes onClick={() => onDelete(id)} /> </h3>
        <p>{recept}</p>
    </IconContext.Provider>
        </div >
    )
}
