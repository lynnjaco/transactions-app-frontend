import { useState, useEffect, useRef } from 'react'
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

    // helper functions for converting data for user's view
    function getMemberId(name){
        let selectedMember = members.find( member => member.memberName.toLowerCase() === name.toLowerCase());
        return selectedMember.id;
    }
    function getMemberNameFromID(id, firstLetter = false){
        let targetMember = members.find( member => member.id === id);
        return firstLetter ? targetMember?.memberName[0] : targetMember?.memberName;
    }
    function convertDollarsToCents(amount){
        return amount * 100;
    }
    function convertCentsToDollars(amount){
        return `$${(amount/100).toFixed(2)}`;
    }

    // transaction control options
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
        .then( data => {
            setTransactionObject({});
            navigate(`/transactions/${data.id}`);

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
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
    // resets transactionObject values to empty, the form, and returns to dashboard view
    function handleCancel(e){
        e.preventDefault();
        setTransactionObject({});
        navigate("/dashboard");

    }
    // resets the transaction view to empty and the form inputs
    const newTransactionForm = useRef();
    function handleReset(e){
        e.preventDefault();
        setTransactionObject({});
        newTransactionForm.current.reset();
    }
    // updates the transaction view when on the transactions/:id routes
    function handleUpdate(e){
        e.preventDefault();
        const jsonData = JSON.stringify(transactionObject);

        fetch(`${API}/transactions/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => response.json())
        .then( data => {
            setTransactionObject({});
            navigate(`/transactions/${data.id}`);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    // handle inputs
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

    if (!id) {
        return (
            <div className='base-content-container row'>
               
                <div id="transaction-form-container" className="col">
                    <div className='component-title'>New Transaction</div>
                    <p className='form-instructions'>Fill in transaction details and submit when your transaction preview is correct.</p>
                    <div>
                        <form id='transaction-form' className='col' ref={newTransactionForm}>
                            <label for="members" className='new-transaction-label'>Select Member
                                <select name="members" id="members" onChange={handleMemberChange} className='form-choice' required>
                                    {members.map( mem => (
                                        <option key={ mem.id }value={`${mem.memberName.toLowerCase()}`}>{`${mem.memberName}`}</option>
                                    ))}
                                </select>
                            </label>

                            <label className='new-transaction-label'>Date
                                <input type='date' name='transactionDate' onChange={handleDateChange} className='form-choice' required/>
                            </label>

                            <label className='new-transaction-label'>Description
                                <input type='text' name='transactionDescription' onChange={handleDescriptionChange} className='form-choice' required/>
                            </label>

                            <label className='new-transaction-label'>Origin
                                <input type='text' name='transactionOrigin' onChange={handleOriginChange} className='form-choice' required/>
                            </label>

                            <div className='new-transaction-label'>
                                <div className='row'>
                                    <label>
                                        <br />Debit (-)
                                        <input
                                            type="radio"
                                            name="transactionTypeSelection"
                                            value="Debit"
                                            checked={transactionObject.transactionType === "Debit"}
                                            onChange={handleTypeChange}
                                        />
                                    </label>

                                    <label>
                                        <br />Credit (+)
                                        <input
                                            type="radio"
                                            name="transactionTypeSelection"
                                            value="Credit"
                                            checked={transactionObject.transactionType === "Credit"}
                                            onChange={handleTypeChange}
                                        />
                                    </label>
                                </div>
                                <div id="select-category-container">
                                    {transactionObject.transactionType === "Credit" && (
                                        <label for="incomeCategory" className='new-transaction-label'>Select Income Type
                                            <select name="incomeCategory" id="incomeCategory" onChange={handleIncomeCategoryChange} className='form-choice' required>
                                                <option value="Wages">Wages</option>
                                                <option value="Interest">Interest</option>
                                                <option value="Investment">Investment</option>
                                                <option value="Gift">Gift</option>
                                                <option value="Bank Transfer">Bank Transfer</option>
                                                <option value="Business">Business</option>
                                                <option value="Other Income">Other</option>
                                            </select>
                                        </label>
                                    )}

                                    {transactionObject.transactionType === "Debit" && (
                                        <label for="expenseCategory" className='new-transaction-label'>Select Expense Type
                                            <select name="expenseCategory" id="expenseCategory" onChange={handleExpenseCategoryChange} className='form-choice' required>
                                                <option value="Home">Home</option>
                                                <option value="Shopping">Shopping</option>
                                                <option value="Auto">Auto</option>
                                                <option value="Entertainment">Entertainment</option>
                                                <option value="Travel">Travel</option>
                                                <option value="Food">Food</option>
                                                <option value="Health/Wellness">Health/Wellness</option>
                                                <option value="Other Expense">Other</option>
                                            </select>
                                        </label>
                                    )}
                                </div>
                            </div>

                            <label className='new-transaction-label'>Amount
                                <input type='number' name='transactionAmount' onChange={handleAmountChange} className='form-choice' required/>
                            </label>

                            <label for="frequency" className='new-transaction-label'>Frequency
                                <select name="frequency" onChange={handleFrequencyChange} className='form-choice' required>
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
                                <button id="cancel-transaction-button" className="transaction-form-button" onClick={handleCancel}>Cancel</button>
                                <button id="reset-transaction-button" className="transaction-form-button" onClick={handleReset}>Reset</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="transaction-show-container" className="col">
                <div className='member-avatar'><p>{getMemberNameFromID(transactionObject.transactionMemberID, true)}</p></div>
                    <p id="transaction-member-text">{transactionObject.transactionMemberID ? getMemberNameFromID(transactionObject.transactionMemberID) : "Member"}'s Transaction</p>
    
                    <div id="transaction-source-container" className="row">
                        <p className='trasnaction-info-text'>{transactionObject.transactionName}</p>
                        <p id="from">from</p>
                        <p className='trasnaction-info-text'>{transactionObject.transactionOrigin}</p>
                    </div>
                    
                    <div id="amount-container">
                        <p id="transaction-amount">{ transactionObject.transactionType === "Credit" ? "+ " + convertCentsToDollars(transactionObject.amountInCents) : "- " + convertCentsToDollars(transactionObject.amountInCents) }</p>
                        <p id="transaction-type">{transactionObject.transactionType}</p>
                    </div>
                    
                    <div id="details-container" className="col">
                        
                        <div className="detail row">
                        <p className="transaction-detail-title">Category</p>
                        <p className="transaction-detail-text">{transactionObject.category}</p>
                        </div>
                        
                        <div className="detail row">
                        <p className="transaction-detail-title">Date</p>
                        <p className="transaction-detail-text">{transactionObject.transactionDate}</p>
                        </div>

                        <div className="detail row">
                        <p className="transaction-detail-title">Frequency</p>
                        <p className="transaction-detail-text">{transactionObject.frequency}</p>
                        </div>
                        
                        <div className="detail row">
                        <p className="transaction-detail-title">Transaction ID</p>
                        <p className="transaction-detail-text">{transactionObject.transactionMemberID}</p>
                        </div>
                    </div>

                    <div id="transactions-button-containter" className='row'>
                        <button id="submit-transaction-button" className="transaction-view-button" onClick={handleSubmit}>Submit Transaction</button>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className='base-content-container row'>
                <div id="transaction-show-container" className="col">
                    <div className='member-avatar'><p>{getMemberNameFromID(currentTransaction.transactionMemberID, true)}</p></div>
                    <p id="transaction-member-text">{getMemberNameFromID(currentTransaction.transactionMemberID)}'s Transaction</p>
    
                    <div id="transaction-source-container" className="row">
                        <p className='trasnaction-info-text'>{currentTransaction.transactionName}</p>
                        <p id="from">from</p>
                        <p className='trasnaction-info-text'>{currentTransaction.transactionOrigin}</p>
                    </div>
                    
                    <div id="amount-container">
                        <p id="transaction-amount">{ currentTransaction.transactionType === "Credit" ? "+ " + convertCentsToDollars(currentTransaction.amountInCents) : "- " + convertCentsToDollars(currentTransaction.amountInCents) }</p>
                        <p id="transaction-type">{currentTransaction.transactionType}</p>
                    </div>
                    
                    <div id="details-container" className="col">
                        
                        <div className="detail row">
                        <p className="transaction-detail-title">Category</p>
                        <p className="transaction-detail-text">{currentTransaction.category}</p>
                        </div>
                        
                        <div className="detail row">
                        <p className="transaction-detail-title">Date</p>
                        <p className="transaction-detail-text">{currentTransaction.transactionDate}</p>
                        </div>

                        <div className="detail row">
                        <p className="transaction-detail-title">Frequency</p>
                        <p className="transaction-detail-text">{currentTransaction.frequency}</p>
                        </div>
                        
                        <div className="detail row">
                        <p className="transaction-detail-title">Transaction ID</p>
                        <p className="transaction-detail-text">{currentTransaction.id}</p>
                        </div>
                    </div>

                    <div id="transactions-button-containter" className='row'>
                        <button id="edit-transaction-button" className="transaction-view-button">Edit</button>
                        <button id="delete-transaction-button" className="transaction-view-button" onClick={handleDelete}>Delete</button>
                    </div>  
                </div>

                <div id="transaction-form-container col">
                    <div className='component-title'> Edit Transaction</div>
                    <p className='form-instructions'>Fill in desired transaction detail updates and submit when your transaction preview is correct.</p>
                    <form id='edit-transaction-form' className='col'>
                        <label for="members" className='new-transaction-label'>Select Member
                            <select name="members" id="members" onChange={handleMemberChange} className='form-choice' required>
                                {members.map( mem => (
                                    <option key={ mem.id }value={`${mem.memberName.toLowerCase()}`}>{`${mem.memberName}`}</option>
                                ))}
                            </select>
                        </label>

                        <label className='new-transaction-label'>Date
                            <input type='date' name='transactionDate' onChange={handleDateChange} className='form-choice' required/>
                        </label>

                        <label className='new-transaction-label'>Description
                            <input type='text' name='transactionDescription' onChange={handleDescriptionChange} className='form-choice' required/>
                        </label>

                        <label className='new-transaction-label'>Origin
                            <input type='text' name='transactionOrigin' onChange={handleOriginChange} className='form-choice' required/>
                        </label>

                        <div className='new-transaction-label'>
                            <div className='row'>
                                <label>
                                    <br />Debit (-)
                                    <input
                                        type="radio"
                                        name="transactionTypeSelection"
                                        value="Debit"
                                        checked={transactionObject.transactionType === "Debit"}
                                        onChange={handleTypeChange}
                                    />
                                </label>

                                <label>
                                    <br />Credit (+)
                                    <input
                                        type="radio"
                                        name="transactionTypeSelection"
                                        value="Credit"
                                        checked={transactionObject.transactionType === "Credit"}
                                        onChange={handleTypeChange}
                                    />
                                </label>
                            </div>
                            <div id="select-category-container">
                                {transactionObject.transactionType === "Credit" && (
                                    <label for="incomeCategory" className='new-transaction-label'>Select Income Type
                                        <select name="incomeCategory" id="incomeCategory" onChange={handleIncomeCategoryChange} className='form-choice' required>
                                            <option value="Wages">Wages</option>
                                            <option value="Interest">Interest</option>
                                            <option value="Investment">Investment</option>
                                            <option value="Gift">Gift</option>
                                            <option value="Bank Transfer">Bank Transfer</option>
                                            <option value="Business">Business</option>
                                            <option value="Other Income">Other</option>
                                        </select>
                                    </label>
                                )}

                                {transactionObject.transactionType === "Debit" && (
                                    <label for="expenseCategory" className='new-transaction-label'>Select Expense Type
                                        <select name="expenseCategory" id="expenseCategory" onChange={handleExpenseCategoryChange} className='form-choice' required>
                                            <option value="Home">Home</option>
                                            <option value="Shopping">Shopping</option>
                                            <option value="Auto">Auto</option>
                                            <option value="Entertainment">Entertainment</option>
                                            <option value="Travel">Travel</option>
                                            <option value="Food">Food</option>
                                            <option value="Health/Wellness">Health/Wellness</option>
                                            <option value="Other Expense">Other</option>
                                        </select>
                                    </label>
                                )}
                            </div>
                        </div>

                        <label className='new-transaction-label'>Amount
                            <input type='number' name='transactionAmount' onChange={handleAmountChange} className='form-choice' required/>
                        </label>

                        <label for="frequency" className='new-transaction-label'>Frequency
                            <select name="frequency" onChange={handleFrequencyChange} className='form-choice' required>
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
                            <button className="transaction-form-button" onClick={handleUpdate}>Update Transaction</button>
                        </div>
                    </form>
                    <p>{JSON.stringify(transactionObject)}</p>
                </div>
        </div>
        )

    }
}

export default TransactionView