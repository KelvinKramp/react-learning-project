import React from 'react'
import { Task } from './Task'

export const Tasks = (props) => {
    const { task_list } = props
    const { onDelete } = props
    const { onToggle } = props
    // const tasks2 = Object.keys(tasks)
    // const tasks3 = Object.keys(tasks2)
    // console.log(tasks3.length)
    // console.log("show taks list")
    // console.log(task_list[1].id)
    // console.log(task_list[1].text)
    // console.log(task_list[0].text)
    return (
        <>
            {task_list.map((to_show_task) => (
                <Task key={to_show_task.id} task={to_show_task} onDelete={onDelete} onToggle={() => onToggle(to_show_task.id)}/>
            ))}
        </>

    )
}