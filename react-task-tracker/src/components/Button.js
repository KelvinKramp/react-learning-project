import Proptypes from 'prop-types'
import { ThemeUpdateContext } from './Context'
import { useContext } from 'react'

export const Button = ({color, text}) => {
  const { onAdd } = useContext(ThemeUpdateContext)

    return (
        <button
        onClick={onAdd}
        style={{ backgroundColor: color }}
        className='btn'
      >
        {text}
      </button>
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