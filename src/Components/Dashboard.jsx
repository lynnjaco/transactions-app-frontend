import './Dashboard.css'
import Members from './Members'
import Budget from './Budget'
import Transactions from './Transactions'

function Dashboard( { members, setMembers, transactions, convertCentsToDollars, calculateMonthlyAmount } ) {
    return (
        <div id="dashboard-container">
            <div id='members-container'><Members members={ members } setMembers={ setMembers } /></div>
            <div className='dashboard-content-cont'><Budget transactions={ transactions } convertCentsToDollars={ convertCentsToDollars } calculateMonthlyAmount={ calculateMonthlyAmount }/></div>
            <div id="transactions-container" className='dashboard-content-cont'><Transactions transactions={ transactions } convertCentsToDollars={ convertCentsToDollars }/></div>
        </div>
    )
}

export default Dashboard