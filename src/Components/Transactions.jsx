import './Transactions.css'

function Transactions( {transactions, convertCentsToDollars}) {

    return (
        <>
            <table>
                <tr id='header-row'>
                    <th id='category-column'>Category</th>
                    <th id='date-column'>Date</th>
                    <th id='description-column'>Description</th>
                    <th id='source-column'>Source</th>
                    <th id='amount-column'>Amount</th>
                    <th id='edit-column'>Edit</th>
                    <th id='delete-column'>Delete</th>
                </tr>
                { transactions.map( transaction => (
                    <tr key={ transaction.id } className='transaction-item'>
                        <td id='category-text'>{ transaction.category }</td>
                        <td id='date-text'>{ transaction.transactionDate }</td>
                        <td id='description-text'>{ transaction.transactionName }</td>
                        <td id='source-text'>{ transaction.transactionOrigin }</td>
                        <td id='amount-text'>{ convertCentsToDollars(transaction.amountInCents) }</td>
                        <td><img className="table-icon" src="/assets/editicon.svg" alt="Edit Icon" /></td>
                        <td><img className="table-icon" src="/assets/deleteeicon.svg" alt="Delete Icon" /></td>
                    </tr>
                ))}
            </table>
            
        </>
    )
}

export default Transactions