import { Button } from "./Button"
import { ThemeUpdateContext } from './Context'
import { useContext } from 'react'


const Header = ({ dr, showAddTask }) => {
    const { onAdd } = useContext(ThemeUpdateContext)


    return (
        <header>
            <h1>Hello {dr}</h1>
            <h1>Zoek richtlijn</h1>
            <Button onAdd={onAdd} text={showAddTask ? 'Sluiten' : 'Toevoegen richtlijn'} color={showAddTask ? 'red' : 'green'} />
            <Button onAdd={()=>{}} color='darkgrey' text='Zoek richtlijn' />
        </header>
    )

}

export default Header