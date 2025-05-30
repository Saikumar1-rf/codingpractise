import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Popup from './Popup'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/popup' element={<Popup/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
