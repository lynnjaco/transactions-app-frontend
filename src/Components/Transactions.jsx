import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Transactions.css'

function Transactions( {transactions, convertCentsToDollars}) {

    const navigate = useNavigate();

    function sortByDateDesc(array) {
        return array.sort((a, b) => {
            const [aMonth, aDay, aYear] = a.transactionDate.split('-').map(Number);
            const [bMonth, bDay, bYear] = b.transactionDate.split('-').map(Number);
    
            const aDate = new Date(aYear, aMonth - 1, aDay);
            const bDate = new Date(bYear, bMonth - 1, bDay);
    
            return bDate - aDate;
        });
    }
    function sortByDateAsc(array) {
        return array.sort((a, b) => {
            const [aMonth, aDay, aYear] = a.transactionDate.split('-').map(Number);
            const [bMonth, bDay, bYear] = b.transactionDate.split('-').map(Number);
    
            const aDate = new Date(aYear, aMonth - 1, aDay);
            const bDate = new Date(bYear, bMonth - 1, bDay);
    
            return aDate - bDate;
        });
    }

    function sortDateAsc(array){
        useEffect(() => {
            sortByDateAsc(array);
        }, [array])
    }

    function sortDateDesc(array){
        useEffect(() => {
            sortByDateDesc(array);
        }, [array])
    }

    function handleAddTransactionButton(){
        navigate("/transactions");
    }
    
    return (
        <>
            <div id='transactions-control-container' className='row'>
                <div id='transaction-view' className='col'>
                    <div className='controls-cont row'>
                        <p>Sort By: </p>
                        <p className='control-text' onClick={sortDateAsc(transactions)}>Date ↑</p>
                        <p className='control-text' onClick={sortDateDesc(transactions)}>Date ↓</p>
                        <p className='control-text'>Amount</p>
                    </div>
                    <div className='controls-cont row'>
                        <p>View:</p>
                        <p className='control-text'>Income</p>
                        <p className='control-text'>Expenses</p>
                        <p className='control-text'>All</p>
                    </div>  
                </div>
                <button id='add-transaction-button' onClick={handleAddTransactionButton}>+</button>
                <p id='transactions-title'>Transactions</p>
            </div>
            <table>
                <thead>
                    <tr id='header-row'>
                        <th id='category-column'>Category</th>
                        <th id='date-column'>Date</th>
                        <th id='description-column'>Description</th>
                        <th id='source-column'>Source</th>
                        <th id='amount-column'>Amount</th>
                        <th id='edit-column'>Edit</th>
                        <th id='delete-column'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { sortByDateDesc(transactions).map( transaction => (
                    <tr key={ transaction.id } className='transaction-item' >
                            <td id='category-text'><p>{ transaction.category }</p></td>
                            <td id='date-text'><Link to={`/transactions/${transaction.id}`}><p>{ transaction.transactionDate }</p></Link></td>
                            <td id='description-text'><Link to={`/transactions/${transaction.id}`}><p>{ transaction.transactionName }</p></Link></td>
                            <td id='source-text'><Link to={`/transactions/${transaction.id}`}><p>{ transaction.transactionOrigin }</p></Link></td>
                            <td id='amount-text'><Link to={`/transactions/${transaction.id}`}><p>{ convertCentsToDollars(transaction.amountInCents) }</p></Link></td>
                            <td><img className="table-icon" src="/assets/editicon.svg" alt="Edit Icon" /></td>
                            <td><img className="table-icon" src="/assets/deleteicon.svg" alt="Delete Icon" /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </>
    )
}

// 
export default Transactions