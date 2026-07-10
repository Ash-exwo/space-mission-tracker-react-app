import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddMission from './components/AddMission'
import SearchMission from './components/SearchMission'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddMission/>}/>
      <Route path='/search' element={<SearchMission/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
