function App() {
  const name = 'Sam'
  const x = true
  return (
    // You can only return a single parent element (div, fragment...)
    <div className="App">
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
    // You can't have another element outside of parent element
    // Failed to complie
    // It said JSX elements must be wrapped in an enclosing tag.
    // <h2>Hello</h2>
  );
}

export default App;
