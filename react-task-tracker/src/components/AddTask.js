import { useState, useContext } from "react"
import { ThemeContext, ThemeUpdateContext } from './Context'

export const AddTask = () => {
    const { tasks } = useContext(ThemeContext)
    const { addTask } = useContext(ThemeUpdateContext)
    const [text, setText] = useState('')
    const [recept, setRecept] = useState('')
    const [reminder, setReminder] = useState(false)
    // const addTask = (task) => {
    //     const id = Math.floor(Math.random() * 10000) + 1
    //     console.log("ADD TASK")
    //     console.log("ID")
    //     console.log(id)
    //     const newTask = {id, ...task}
    //     setTasks([...tasks, newTask])
    //     console.log(task)
    //   }

    const onSubmit = (e) => {
        // IF NO INPUT SHOW ERROR
        e.preventDefault()

        // IF TEXT ADD TEXT
        if (!text) {
            alert('Please add text')
            return
        }
        addTask({ text, recept, reminder })
        // console.log("VARIABLES")
        // console.log(text)
        // console.log(typeof text)
        // console.log(recept)
        // console.log(typeof recept)
        // console.log(reminder)
        // console.log(typeof reminder)

        // CLEAR FORM
        setText('')
        setRecept('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Richtlijn</label>
                <input type='text' placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Recept</label>
                <input type='text' placeholder="add day and time" value={recept} onChange={(e) => setRecept(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Gecontroleerd</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}
