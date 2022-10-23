// create template code with ES7 -> 'rafce'
// import React from 'react' // I don't need this anymore!

//add props so I can pass the value!
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

export default Header

// noting happened yet! because I didn't add 'Header.js' to 'App.js'
