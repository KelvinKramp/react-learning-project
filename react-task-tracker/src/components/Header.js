import { Button } from "./Button"

const Header = ({ dr, showAddTask }) => {


    return (
        <header>
            <h1>Hello {dr}</h1>
            <h1>Zoek richtlijn</h1>
            <Button text={showAddTask ? 'Sluiten' : 'Toevoegen richtlijn'} color={showAddTask ? 'red' : 'green'} />
            <Button color='darkgrey' text='Zoek richtlijn' />
        </header>
    )

}

export default Header