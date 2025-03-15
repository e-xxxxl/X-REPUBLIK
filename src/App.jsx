import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Marquee from './Components/Marquee/Marquee'
import LandingPage from './Components/Pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import LineupPage from './Components/Pages/LineupPage'
import NotfoundPage from './Components/Pages/NotfoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="*" element={<NotfoundPage />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/lineup' element={<LineupPage/>} />
      </Routes>
      
    </>
  )
}

export default App
