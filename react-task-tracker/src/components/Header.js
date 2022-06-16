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
            <Button text={showAddTask ? 'Sluiten' : 'Toevoegen taak'} onClick={onAdd} color={showAddTask ? 'red' : 'green'} />
            <Button color='green' text='Zoeken' />
        </header>
    )

}

export default Header