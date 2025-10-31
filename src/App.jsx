import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbaar from './components/Navbaar/Navbaar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbaar></Navbaar>
    </>
  )
}

export default App
