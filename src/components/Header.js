import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button onClick={props.onAdd} color={props.showAddTask ? 'crimson' : 'green'} text={props.showAddTask ? 'Close' : 'Add'} />
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

Header.defaultProps = {
    title: "Task Tracker"
}

export default Header