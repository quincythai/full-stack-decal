import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
    console.log(count)
  }

  return (
    <div>
      <header>
        <h1>Count</h1>
        <button onClick={increment}>Click me</button>
        {/* <button onClick={() => setCount(count + 1)}>Click me</button> */}
        <p>Count: {count}</p>
        {count % 2 == 0 
          ? <div>count is even</div>
          : <div>count is odd </div>
        }
      </header>
    </div>
  )
}

export default App
