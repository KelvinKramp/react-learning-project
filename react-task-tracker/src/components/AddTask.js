import { useState } from "react"

export const AddTask = (prop) => {
    const addTask = prop.addTask
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const seeSomething = (e) => {
        setReminder(!e.currentTarget.checked)
    }

    const onSubmit = (e) => {
        // IF NO INPUT SHOW ERROR
        e.preventDefault()

        // IF TEXT ADD TEXt
        if(!text) {
            alert('Please add text')
            return
        }
        console.log("VARIABLES")
        console.log(text)
        console.log(typeof text)
        console.log(date)
        console.log(typeof date)
        console.log(reminder)
        console.log(typeof reminder)
        addTask({text, date, reminder})
        
        // CLEAR FORM
        setText('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder="add day and time" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' placeholder="set reminder" value={reminder} 
                onChange={(e) => seeSomething(e)} 
                checked={reminder}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}
