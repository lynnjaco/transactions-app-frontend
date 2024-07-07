import './Dashboard.css'
import Members from './Members'
import Budget from './Budget'
import Transactions from './Transactions'

function Dashboard() {
    return (
        <div id="dashboard-container">
            <div id='members-container'><Members /></div>
            <div className='dashboard-content-cont'><Budget /></div>
            <div id="transactions-container" className='dashboard-content-cont'><Transactions /></div>
        </div>
    )
}

export default Dashboard