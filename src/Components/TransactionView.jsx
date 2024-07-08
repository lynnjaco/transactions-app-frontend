import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './TransactionView.css'

function TransactionView({API}) {

    const [currentTransaction, setCurrentTransaction] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/transactions/${id}`)
        .then(response => response.json())
        .then(res => {
            setCurrentTransaction(res);
        })
        .catch((error) => {
            navigate("/dashboard");
        })
    }, [API, id, navigate])

    return (
        <div className='base-content-container'>
            <div className='component-title'>Transaction View</div>
            <form id='transaction-form' className='col'>
                <label for="cars">Select User:
                    <select name="Household Member" id="cars">
                        <option value="household">Household</option>
                        <option value="reggie">Reggie</option>
                        <option value="larry">Larry</option>
                    </select>
                </label>

                <label>Date
                    <p>{ currentTransaction.transactionDate}</p>
                    <input type='date' name='transactionDate'/>
                </label>

                <label>Description
                    <input type='text' name='transactionDescription'/>
                </label>

                <label>Origin
                    <input type='text' name='transactionOrigin'/>
                </label>

                <label>Type
                    <input type="button" name='income' value='Debit (-)'/>
                    <input type="button" name='expense' value='Credit (+)'/>
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
        </div>
    )
}

export default TransactionView