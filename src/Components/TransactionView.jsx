import './TransactionView.css'

function TransactionView() {
    return (
        <>
            <form id='transaction-form'>
                <label>Date
                    <input type='date' name='transactionDate'/>
                </label>

                <label>Description
                    <input type='text' name='transactionDescription'/>
                </label>

                <label>Origin
                    <input type='text' name='transactionOrigin'/>
                </label>

                <label>Amount
                    <input type='number' name='transactionAmount'/>
                </label>

                <div id="transaction-form-buttons">
                    <button id="edit-transaction-button" className="transaction-form-button">Edit</button>
                    <button id="delete-transaction-button" className="transaction-form-button">Delete</button>
                    <button id="submit-transaction-button" className="transaction-form-button">Submit</button>
                </div>
            </form>
        </>
    )
}

export default TransactionView