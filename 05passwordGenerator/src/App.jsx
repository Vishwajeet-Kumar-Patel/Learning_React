import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setlength] = useState(8)
  const[numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback((fn => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) str += "0123456789"
    if(charAllow) str += "!@#$%^&*>?+_=-(){}[]:;"

    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      password += str.charAt(char)
    }

    setPassword(password)
  }), [length, numAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-600 text-white px-3 py-1.5 shrink-0 hover:bg-blue-900'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-5'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={5}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => (setlength(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className='"flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllow}
            id='numberInput'
            onChange={() => {
              setNumAllow((prev) => !prev);
            }} 
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                  setCharAllow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
