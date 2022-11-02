// create template code with ES7 -> 'rafce'
// import React from 'react' // I don't need this anymore!

import PropTypes from 'prop-types' //ES7 -> 'impt'
import Button from './Button' // import Button.js


// add props so I can pass the value!
// you can specify the props by using {}
// if I add multiple button in the function I can get buttons! Reuse!
// onClick is in the Button tag, I need to handle it in the Button.js
// need to add props for toggle in App.js 
const Header = ({ title, onAdd, showAdd }) => {
    // nested function for onClick event
    // you can add event in the parentheses
    // make color and text value dynamic! by using ternary operator
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} 
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// if you pass something isn't string, it will create warning. (but still render)
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
const headingStyle = {
    color: 'red', 
    backgroundColor:'black'
}

export default Header

// nothing happened yet! because I didn't add 'Header.js' to 'App.js'
