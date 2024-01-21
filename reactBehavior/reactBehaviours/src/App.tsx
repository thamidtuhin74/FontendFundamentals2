// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import UseStateExample from './pages/UseStateExample'

function App() {
  // const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  console.log('React Fundamentals')
  return (
    <>
      <h1>React Fundamentals</h1>
      <UseStateExample counter={counter} setCounter={setCounter}/>
    </>
  )
}

export default App
