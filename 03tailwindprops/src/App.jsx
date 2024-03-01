import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username: "Vishwa",
    age:21
}

let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind sikh raha hu</h1>
      <Card username="Deadpool"  theory="I am an X Men " btnText="Click me" />
      <Card username="Vishwajeet"  theory="I am an Engineer" btnText="Visit me"/>
    </>
  )
}

export default App
