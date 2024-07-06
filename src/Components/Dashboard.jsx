import './Dashboard.css'
import Budget from './Budget'
import BudgetSnippets from './BudgetSnippets'
import Transactions from './Transactions'

function Dashboard() {
    return (
        <div id="dashboard-container">
            <div className='dashboard-content-cont'>
                <Budget />
            </div>

            <div id="transactions-container" className='dashboard-content-cont'>
                <Transactions />    
            </div>
        </div>
    )
}

export default Dashboard