import { Button } from "./Button"

const Header = (props) => {
    const doSomething = () => {
        console.log('hello Kelvin')
    }

    return (
        <header>
            <h1>Hello {props.dr}</h1>
            <Button text='Zoeken' click={doSomething} />
            <Button color='Reset' text='hello1' />
            <Button color='green' text='hello2' />
        </header>
    )

}

export default Header