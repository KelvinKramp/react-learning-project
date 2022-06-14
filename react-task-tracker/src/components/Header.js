import { Button } from "./Button"

const Header = (props) => {
    return (
        <header>
            <h1>Hello {props.woman}</h1>
            <Button text='hello' />
            <Button color='green' text='hello1' />
            <Button color='green' text='hello2' />
        </header>
    )

}

export default Header