import React from 'react'
import PropTypes from 'prop-types'
const Button = (props) => {
    return (
        <button
            className='btn'
            style={{ backgroundColor: props.color }}
            onClick={props.onClick}
        >
            {props.text}

        </button>
    )
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    color: "#ccc",
    text: "Button"
}

export default Button