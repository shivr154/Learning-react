import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <h1>Hello Myapp</h1>
  )
}

// const reactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   },
//   children : 'Click me to visit google'
// }


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
  )
  
  const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a', // type of element
  {href : 'https://google.com', target :'_blank'}, // props
  'click me to visit google', // body
  anotherUser // at the end evaluated expression are inserted
)

// {reactElement} -> we write evaluated expression in this


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
  {anotherElement}
  <br />
  {reactElement}
    <App />
    <MyApp />
  </>
  
)
 