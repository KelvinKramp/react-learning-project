import { Button } from "./Button"

const Header = ({ dr, onAdd, showAddTask }) => {
    console.log("HEADER")
    console.log(dr)
    console.log(onAdd)
    console.log(showAddTask)
    // const doSomething = () => {
    //     console.log(onAdd)
    //     console.log("asdsa")
    // }

    return (
        <header>
            <h1>Hello {dr}</h1>
            <h1>Zoek richtlijn</h1>
            <Button text={showAddTask ? 'Sluiten' : 'Toevoegen richtlijn'} onClick={onAdd} color={showAddTask ? 'red' : 'green'} />
            <Button color='darkgrey' text='Zoek richtlijn' />
        </header>
    )

}

export default Header