import './BudgetSnippets.css'

function BudgetSnippets() {
    return (
        <div id="budget-snippets-container">
            <div id="income-container" class="snippet-container">
                <img className='snippet-icon' src='/assets/incomeicon.svg' alt='Income Snippet Icon'/>
                <div className='snippet-amount-container'>
                    <p className='snippet-title'>Monthly Income</p>
                    <p className='snippet-amount'>+ $4524.92</p>
                </div>
            </div>
            
            <div id="expense-container" class="snippet-container">
                <img className='snippet-icon' src='/assets/expenseicon.svg' alt='Expenses Snippet Icon'/>
                <div className='snippet-amount-container'>
                    <p className='snippet-title'>Monthly Expenses</p>
                    <p className='snippet-amount'>- $3400.49</p>
                </div>
            </div>

            <div id="net-container" class="snippet-container">
                <img className='snippet-icon' src='/assets/netincomeicon.png' alt='Net Income Snippet Icon'/>
                <div className='snippet-amount-container'>
                    <p className='snippet-title'>Monthly Net Income</p>
                    <p className='snippet-amount'>$1124.43</p>
                </div>
            </div>
        </div>
    )
}

export default BudgetSnippets