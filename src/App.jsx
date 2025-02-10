import { useState } from 'react';
import './App.css'

function App() {

  // let counter =15;
  const [counter,setCounter]=useState(0)

  const addone = () => {
    setCounter(counter+1)
    console.log(counter)
  }
  const removeone=()=>{
    if(counter<=0)
        return null
    setCounter(counter-1)
    console.log(counter)
  }

  return (
    <>
    <h1>React ExP</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addone}
    >Add Value</button>{" "}

    <button onClick={removeone}>Remove Value</button>
    <p>Footer :{counter}</p>
    </>
  )
}

export default App
