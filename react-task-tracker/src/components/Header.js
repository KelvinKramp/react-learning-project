import { Button } from "./Button"

const Header = ({ dr, onAdd, showAdd }) => {

    // const doSomething = () => {
    //     console.log(onAdd)
    //     console.log("asdsa")
    // }

    return (
        <header>
            <h1>Hello {dr}</h1>
            <Button text='Toevoegen' onClick={onAdd} />
            <Button color='green' text='Zoeken' />
        </header>
    )

}

export default Header