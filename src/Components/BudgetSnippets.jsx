import './BudgetSnippets.css'

function BudgetSnippets( {transactions, convertCentsToDollars, calculateIncome, calculateExpenses}) {

    function calculateNetIncome(array){
        let net = calculateIncome(array) - calculateExpenses(array);
        return net < 0 ? `- ${convertCentsToDollars(Math.abs(net))}` : `${convertCentsToDollars(net)}`;
    }

    return (
        <div id="budget-snippets-container">
            <div id="income-container" className="snippet-container">
                <img className='snippet-icon' src='/assets/incomeicon.svg' alt='Income Snippet Icon'/>
                <div className='snippet-amount-container'>
                    <p className='snippet-title'>Monthly Income</p>
                    <p className='snippet-amount'>+ { convertCentsToDollars(calculateIncome(transactions)) }</p>
                </div>
            </div>
            
            <div id="expense-container" className="snippet-container">
                <img className='snippet-icon' src='/assets/expenseicon.svg' alt='Expenses Snippet Icon'/>
                <div className='snippet-amount-container'>
                    <p className='snippet-title'>Monthly Expenses</p>
                    <p className='snippet-amount'>- { convertCentsToDollars(calculateExpenses(transactions)) }</p>
                </div>
            </div>

            <div id="net-container" className="snippet-container">
                <img className='snippet-icon' src='/assets/netincomeicon.png' alt='Net Income Snippet Icon'/>
                <div className='snippet-amount-container'>
                    <p className='snippet-title'>Monthly Net Income</p>
                    <p className='snippet-amount'>{ calculateNetIncome(transactions) }</p>
                </div>
            </div>
        </div>
    )
}

export default BudgetSnippets