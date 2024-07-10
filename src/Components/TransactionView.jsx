import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './TransactionView.css'

function TransactionView({API, transactionObject, setTransactionObject, members}) {

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
            console.error(error);
            navigate("/dashboard");
        })
    }, [API, id, navigate])

    function getMemberId(name, memberArray){
        let selectedMember = memberArray.find( member => member.memberName.toLowerCase() === name.toLowerCase());
        return selectedMember.id;
    }

    function convertDollarsToCents(amount){
        return amount * 100;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const jsonData = JSON.stringify(transactionObject);

        fetch(`${API}/transactions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json())
        .then( () => {
            navigate("/dashboard");
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    function handleMemberChange(e) {
        setTransactionObject(prevTransactionObject => ({
            ...prevTransactionObject,
            transactionMemberID: getMemberId(e.target.value, members)
        }));
    }
    function handleDateChange(e) {
        setTransactionObject(prevTransactionObject => ({
            ...prevTransactionObject,
            transactionDate: e.target.value
        }));
    }
    function handleDescriptionChange(e) {
        setTransactionObject(prevTransactionObject => ({
            ...prevTransactionObject,
            transactionName: e.target.value
        }));
    }
    function handleOriginChange(e) {
        setTransactionObject(prevTransactionObject => ({
            ...prevTransactionObject,
            transactionOrigin: e.target.value
        }));
    }
    function handleTypeChange(e) {
        setTransactionObject(prevTransactionObject => ({
            ...prevTransactionObject,
            transactionType: e.target.value
        }));
    }
    function handleIncomeCategoryChange(e) {
        setTransactionObject(prevTransactionObject => ({
            ...prevTransactionObject,
            category: e.target.value
        }));
    }
    function handleExpenseCategoryChange(e) {
        setTransactionObject(prevTransactionObject => ({
            ...prevTransactionObject,
            category: e.target.value
        }));
    }
    function handleAmountChange(e) {
        setTransactionObject(prevTransactionObject => ({
            ...prevTransactionObject,
            amountInCents: +convertDollarsToCents(e.target.value)
        }));
    }
    function handleFrequencyChange(e) {
        setTransactionObject(prevTransactionObject => ({
            ...prevTransactionObject,
            frequency: e.target.value
        }));
    }

    // deletes a transaction from the list
    function handleDelete(e) {
        e.preventDefault();
        fetch(`${API}/transactions/${id}`, {
        method: "DELETE"
        })
        .then(() => {
        navigate("/dashboard")
        })
        .catch((error) => console.error(error))
    }


    return (
        <div className='base-content-container'>
            <div className='component-title'>Transaction View</div>
            <form id='transaction-form' className='col'>
                <label for="members">Select Member
                    <select name="members" id="members" onChange={handleMemberChange}>
                        {members.map( mem => (
                            <option key={ mem.id }value={`${mem.memberName.toLowerCase()}`}>{`${mem.memberName}`}</option>
                        ))}
                    </select>
                </label>

                <label>Date
                    <input type='date' name='transactionDate' onChange={handleDateChange}/>
                </label>

                <label>Description
                    <input type='text' name='transactionDescription' onChange={handleDescriptionChange}/>
                </label>

                <label>Origin
                    <input type='text' name='transactionOrigin' onChange={handleOriginChange}/>
                </label>

                <div>
                    <div className='row'>
                        <label>
                            <br />Debit (+)
                            <input
                                type="radio"
                                name="transactionTypeSelection"
                                value="Debit"
                                checked={transactionObject.transactionType === "Debit"}
                                onChange={handleTypeChange}
                            />
                        </label>

                        {transactionObject.transactionType === "Debit" && (
                            <label htmlFor="incomeCategory">Select Income Type
                                <select name="incomeCategory" id="incomeCategory" onChange={handleIncomeCategoryChange}>
                                    <option value="wages">Wages</option>
                                    <option value="interest">Interest</option>
                                    <option value="investment">Investment</option>
                                    <option value="gift">Gift</option>
                                    <option value="bankTransfer">Bank Transfer</option>
                                    <option value="business">Business</option>
                                    <option value="otherIncome">Other</option>
                                </select>
                            </label>
                        )}

                        <label>
                            <br />Credit (-)
                            <input
                                type="radio"
                                name="transactionTypeSelection"
                                value="Credit"
                                checked={transactionObject.transactionType === "Credit"}
                                onChange={handleTypeChange}
                            />
                        </label>

                        {transactionObject.transactionType === "Credit" && (
                            <label htmlFor="expenseCategory">Select Expense Type
                                <select name="expenseCategory" id="expenseCategory" onChange={handleExpenseCategoryChange}>
                                    <option value="home">Home</option>
                                    <option value="shopping">Shopping</option>
                                    <option value="auto">Auto</option>
                                    <option value="entertainment">Entertainment</option>
                                    <option value="travel">Travel</option>
                                    <option value="food">Food</option>
                                    <option value="healthWellness">Health/Wellness</option>
                                    <option value="otherExpense">Other</option>
                                </select>
                            </label>
                        )}
                    </div>
                </div>

                <label>Amount
                    <input type='number' name='transactionAmount' onChange={handleAmountChange}/>
                </label>

                <label for="frequency">Frequency
                    <select name="frequency" onChange={handleFrequencyChange}>
                        <option value="one-time">One-Time</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="bi-weekly">Bi-Weekly</option>
                        <option value="bi-monthly">Bi-Monthly</option>
                        <option value="monthly">Monthly</option>
                        <option value="annually">Annually</option>
                    </select>
                </label>

                <div id="transaction-form-buttons">
                    <button id="edit-transaction-button" className="transaction-form-button">Edit</button>
                    <button id="delete-transaction-button" className="transaction-form-button" onClick={handleDelete}>Delete</button>
                    <button id="submit-transaction-button" className="transaction-form-button" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            <p>{JSON.stringify(transactionObject)}</p>
        </div>
    )
}

export default TransactionView