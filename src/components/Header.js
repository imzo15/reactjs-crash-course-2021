import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    const onClickFunction = (event) => {
        console.log(event);
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button onClick={onClickFunction} color='green' text='Add' />
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