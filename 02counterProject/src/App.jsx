import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) 

  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
  }

  const decreaseValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>My React Counter</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
