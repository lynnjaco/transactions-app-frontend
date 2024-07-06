import './Dashboard.css'

import Budget from './Budget'
import BudgetSnippets from './BudgetSnippets'
import Transactions from './Transactions'

function Dashboard() {
    return (
        <div id="dashboard-container">
            <div className="dashboard-content-cont" id="budget-breakdown-container">
                <Budget />
            </div>

            <div className="dashboard-content-cont" id="budget-snippets-container">
                <BudgetSnippets />
            </div>

            <div className="dashboard-content-cont" id="transactions-container">
                <Transactions />    
            </div>
        </div>
    )
}

export default Dashboard