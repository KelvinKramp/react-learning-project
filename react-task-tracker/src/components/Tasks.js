import React from 'react'
import { Task } from './Task'
import { ThemeContext } from './Context'
import { useContext } from 'react'


export const Tasks = (props) => {
    const { tasks } = useContext(ThemeContext)

    return (
        <>
            {tasks.map((to_show_task) => (
                <Task key={to_show_task.id} task={to_show_task} />
            ))}
        </>

    )
}