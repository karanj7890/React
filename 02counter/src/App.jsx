import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]= useState(15)


  // let counter= 15;

  const addvalue= ()=>{
    counter= counter + 1
    if(counter<=20){
      setCounter(counter)
    }
    else{
      alert("limit reached")
    }
  }

  const removevalue= ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      alert("limit reached")
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addvalue}>add value {counter}</button>
      <br />
      <button onClick={removevalue}>remove value {counter}</button>
    </>
  )
}

export default App
