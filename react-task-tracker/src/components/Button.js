import Proptypes from 'prop-types'

export const Button = ({ color, text, click }) => {
    return (
        <button className='btn' style={{ backgroundColor: color }} onClick={click}>
            {text} </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: Proptypes.string,
    color: Proptypes.string,
    click: Proptypes.func,
}