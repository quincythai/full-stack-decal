import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from "./components/button";

function App() {
  const [count, setCount] = useState(0);

    function updateCount() {
      setCount(count + 1);
    }

  return (
    <>
      <div>hewwo</div>
      <Button title="first button" text="click me" update={updateCount}/>
      <Button title="gilgamesh" text="the king of evil" update={updateCount}/>
      <p>count: {count}</p>
    </>
  )
}

export default App
