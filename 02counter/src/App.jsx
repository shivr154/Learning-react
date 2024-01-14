import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)

  //  let counter = 5

   const addValue = () => {
    // console.log(`value added `, counter);
    if(counter >= 20){
      alert("cant go above 20")
    }else{
      counter = counter + 1;
      setCounter(counter)
    }
   }

   const removeValue = () => {
    if(counter <= 0){
       alert("cant go below 0");
    }else{
      counter = counter -1;
      setCounter(counter);
    }
   }

  return (
    <>
      <h1>Hello Shivam</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter} </button>
      <br />
      <button onClick={removeValue} >Remove Value {counter} </button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
