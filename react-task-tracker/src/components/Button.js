import Proptypes from 'prop-types'

export const Button = ({onAdd, color, text}) => {

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