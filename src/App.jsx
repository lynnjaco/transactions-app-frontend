import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import NavBar from './Components/NavBar'
import TransactionView from './Components/TransactionView'


function App() {
  
  const API = import.meta.env.VITE_API_URL
  const [transactions, setTransactions] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
    .then((response) => {
      return response.json()
    })
    .then((res) => {
      setTransactions(res);
    })
    .catch( error => console.error(error))
  }, [])

  useEffect(() => {
    fetch(`${API}/members`)
    .then((response) => {
      return response.json()
    })
    .then((res) => {
      console.log(res);
      setMembers(res);
    })
    .catch( error => console.error(error))
  }, [])

  // converts cents to dollars and creates a string of the amount
  function convertCentsToDollars(num){
    return num ? `$${(num/100).toFixed(2)}` : "";
}

  return (
    <div id='app-view'>
      <Router>
        <div id='left-bar-container'><NavBar /></div>
        <div id="right-page-container">
          
          <div id='main-content-container'>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element= { <About/> } />
                <Route path="/dashboard" element= { <Dashboard members={ members } transactions={ transactions } convertCentsToDollars={ convertCentsToDollars }/> } />
                <Route path="/transaction" element= { <TransactionView/> } />
                <Route path="/transaction/:id" element= { <TransactionView/> } />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
