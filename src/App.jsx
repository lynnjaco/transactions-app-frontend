import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import NavBar from './Components/NavBar'
import Members from './Components/Members'
import TransactionView from './Components/TransactionView'

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Members />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about" element= { <About/> } />
          <Route path="/dashboard" element= { <Dashboard/> } />
          <Route path="/transaction/:id" element= { <TransactionView/> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
