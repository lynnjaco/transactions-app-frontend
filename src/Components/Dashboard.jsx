import './Dashboard.css'
import Members from './Members'
import Budget from './Budget'
import Transactions from './Transactions'

function Dashboard( { members, transactions } ) {
    return (
        <div id="dashboard-container">
            <div id='members-container'><Members members={ members } /></div>
            <div className='dashboard-content-cont'><Budget transactions={ transactions } /></div>
            <div id="transactions-container" className='dashboard-content-cont'><Transactions transactions={ transactions }/></div>
        </div>
    )
}

export default Dashboard