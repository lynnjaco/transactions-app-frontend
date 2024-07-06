import './TransactionItem.css'

function TransactionItem() {
    return (
        <div>
            <p>Date</p>
            <p>Description</p>
            <p>Origin</p>
            {/* Amount text will change color depending on if it's a debit or credit */}
            <p>Amount</p> 
            <img src="" alt="Transaction Category Icon" />
            <img src="" alt="Delete Transaction Icon"/>
            <img src="" alt="Edit Transaction Icon"/>
        </div>
    )
}

export default TransactionItem