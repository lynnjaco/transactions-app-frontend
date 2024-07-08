import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Transactions.css'

function Transactions( {transactions, convertCentsToDollars}) {

    function sortByDate(array) {
        return array.sort((a, b) => {
            const [aMonth, aDay, aYear] = a.transactionDate.split('-').map(Number);
            const [bMonth, bDay, bYear] = b.transactionDate.split('-').map(Number);
    
            const aDate = new Date(aYear, aMonth - 1, aDay);
            const bDate = new Date(bYear, bMonth - 1, bDay);
    
            return bDate - aDate;
        });
    }
    
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
                { sortByDate(transactions).map( transaction => (
                   <tr key={ transaction.id } className='transaction-item' >
                        <td id='category-text'><p>{ transaction.category }</p></td>
                        <td id='date-text'><Link to={`/transactions/${transaction.id}`}><p>{ transaction.transactionDate }</p></Link></td>
                        <td id='description-text'><Link to={`/transactions/${transaction.id}`}><p>{ transaction.transactionName }</p></Link></td>
                        <td id='source-text'><Link to={`/transactions/${transaction.id}`}><p>{ transaction.transactionOrigin }</p></Link></td>
                        <td id='amount-text'><Link to={`/transactions/${transaction.id}`}><p>{ convertCentsToDollars(transaction.amountInCents) }</p></Link></td>
                        <td><img className="table-icon" src="/assets/editicon.svg" alt="Edit Icon" /></td>
                        <td><img className="table-icon" src="/assets/deleteeicon.svg" alt="Delete Icon" /></td>
                    </tr>
                ))}
            </table>
            
        </>
    )
}

// 
export default Transactions