import PropTypes from 'prop-types'
import Buttons from './Buttons'

function Header({title}) {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Buttons color='green' text='Add' />
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Management'
}

Header.propTypes = {                            /* check type of prop & return error for invalid prop */
    title : PropTypes.string.isRequired,
}

export default Header
