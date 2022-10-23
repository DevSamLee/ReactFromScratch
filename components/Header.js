// create template code with ES7 -> 'rafce'
// import React from 'react' // I don't need this anymore!

import PropTypes from 'prop-types' //ES7 -> 'impt'


//add props so I can pass the value!
// you can specify the props by using {}
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// if you pass something isn't string, it will create warning. (but still render)
Header.propTypes = {
    title: PropTypes.string,
}
export default Header

// nothing happened yet! because I didn't add 'Header.js' to 'App.js'
