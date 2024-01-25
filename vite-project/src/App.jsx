import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("default name");

  const updateName = (event) => {
    setName(event.target.value);
  };

  return (
   <div>
      <input type="text" value={name} onChange={updateName} />
      <p>Hello {name}!</p>
   </div>
  );
}

export default App