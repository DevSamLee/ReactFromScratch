// create template code with ES7 -> 'rafce'
// import React from 'react' // I don't need this anymore!

import PropTypes from 'prop-types' //ES7 -> 'impt'
import Button from './Button' // import Button.js


// add props so I can pass the value!
// you can specify the props by using {}
// If I add multiple button in the function I can get buttons!
const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Hello' />
      <Button color='orange' text='Hi' />
      <Button color='purple' text='Bye' />
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
