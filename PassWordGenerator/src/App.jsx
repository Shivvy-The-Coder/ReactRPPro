// import { useState } from 'react'
import { useState ,useCallback,useEffect} from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(8)
  const [numberALlowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword] = useState('')

  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoopqrstuvwxyz"
    if(numberALlowed) str +="0123456789"
    if(charAllowed)   str+="!@#$%^&*()"

    for(let i=1;i<length;i++)
      {
        pass+=str.charAt(Math.floor(Math.random()*str.length+1))
      }
      setPassword(pass)
  },[length,numberALlowed,charAllowed])

  const copyPasswordToCLipboard=()=>{
    window.navigator.clipboard.writeText(password) 
  }


  useEffect((
  )=>{
      generatePassword();
  },[length,numberALlowed,charAllowed])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray text-orange-500">
      <h1 className="text-white text-center my-3 "> Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          placeholder="password"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          readOnly
        />
        <button 
        onClick={copyPasswordToCLipboard}
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <input
          type="range"
          min={6}
          max={100}
          className="cursor-pointer"
          onChange={(e) => setlength(e.target.value)}
          value={length}
        />
        <label htmlFor="length">Length:{length}</label>

        <div className="flex text-sm gap-x-2">
          <input
            type="checkbox"
            defaultChecked={numberALlowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            className="cursor-pointer"
            value={length}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>

        <div className="flex text-sm gap-x-2">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            className="cursor-pointer"
            value={length}
          />
          <label htmlFor="Character">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App
