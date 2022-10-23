// create template code with ES7 -> 'rafce'
// import React from 'react' // I don't need this anymore!

// add props so I can pass the value!
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

export default Header

// noting happened yet! because I didn't add 'Header.js' to 'App.js'
