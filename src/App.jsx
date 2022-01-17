import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Profile from './Components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Profile/>
    </div>
  )
}

export default App
