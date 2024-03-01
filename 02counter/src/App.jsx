import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(5)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    //console.log("clicked", counter)

    if (counter < 10) {
    setCounter(counter + 1)
    setCounter(previousCounter => previousCounter + 1)
    setCounter(previousCounter => previousCounter + 1)
    setCounter(previousCounter => previousCounter + 1)
    setCounter(previousCounter => previousCounter + 1)
    }else {
      alert("Counter is exceeding 10")
    }
  }

  const removeValue = () => {
    //counter = counter - 1
    if(counter > 0) {
    setCounter(counter - 1)
    setCounter(previousCounter => previousCounter - 1)
    setCounter(previousCounter => previousCounter - 1)
    setCounter(previousCounter => previousCounter - 1)
    setCounter(previousCounter => previousCounter - 1)
    }else {
      alert("Counter is less than 0")
    }
    //console.log("clicked", counter)
  }

  return (
    <>
      <h1>Vishwajeet Doing React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove Value: {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
