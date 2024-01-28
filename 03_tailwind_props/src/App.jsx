import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let user = {
    username:"shivam12",
    email: "shivamrarg123@gnail.com"
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-3'>tailwind test</h1>
    
     <Card username = "shivam" othObj={user} btnText = "click me" />
     <Card username = "ashu" btnText = "visit me" />
      
    </>
  )
}

export default App