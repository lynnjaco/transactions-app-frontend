import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'

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
  const [transactionObject, setTransactionObject] = useState("");

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
      setMembers(res);
    })
    .catch( error => console.error(error))
  }, [])

  // converts cents to dollars and creates a string of the amount
  function convertCentsToDollars(num){
    return num ? `$${(num/100).toFixed(2)}` : "";
}

// calculates amount based on frequency
  function calculateMonthlyAmount(amount, frequency) {
    let multiplier;

    switch(frequency) {
        case 'daily':
            multiplier = 30;
            break;
        case 'weekly':
            multiplier = 4.29; // 30 days/7 days
            break;
        case 'bi-weekly':
            multiplier = 2.14; // 30 days/14 days
            break;
        case 'bi-monthly':
            multiplier = 2; // Bi-monthly occurs twice a month
            break;
        case 'monthly':
            multiplier = 1;
            break;
        case 'annually':
            multiplier = 1 / 12; // Annual occurs once a year, divided by 12 to get monthly
            break;
        default:
            multiplier = 1; // Default to monthly if frequency is not recognized
            break;
    }
    return amount * multiplier;
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
                <Route path="/dashboard" element= { <Dashboard members={ members } setMembers={ setMembers } transactions={ transactions } convertCentsToDollars={ convertCentsToDollars } calculateMonthlyAmount={ calculateMonthlyAmount }/> } />
                <Route path="/dashboard/:id" element= { <Dashboard members={ members } setMembers={ setMembers } transactions={ transactions } convertCentsToDollars={ convertCentsToDollars } calculateMonthlyAmount={ calculateMonthlyAmount }/> } />
                <Route path="/transactions" element= { <TransactionView API={ API } transactionObject={ transactionObject } setTransactionObject={ setTransactionObject } members={ members }/> } />
                <Route path="/transactions/:id" element= { <TransactionView API={ API } transactionObject={ transactionObject } setTransactionObject={ setTransactionObject } members={ members }/> }/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
