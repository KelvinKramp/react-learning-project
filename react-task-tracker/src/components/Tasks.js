import React from 'react'
import { useState } from 'react'


export const Tasks = (tasks) => {
    console.log(tasks)
    const tasks2 = Object.keys(tasks)
    const tasks3 = Object.keys(tasks2)
    console.log(tasks3.length)
    return (
        <>{tasks2.map((task) => (<h3 key={task.id}>{task.text}</h3>))}</>
    )
}