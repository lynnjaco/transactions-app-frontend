import './Budget.css'
import BudgetSnippets from './BudgetSnippets'

function Budget( {transactions}) {

    function convertCentsToDollars(num){
        return num ? `$${(num/100).toFixed(2)}` : "";
    }

    function getWagesTotal(array){
        return array.filter(obj => obj.category === "Wages").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }

    function getInterestTotal(array){
        return array.filter(obj => obj.category === "Interest").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }

    function getInvestmentTotal(array){
        return array.filter(obj => obj.category === "Investment").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }

    function getGiftTotal(array){
        return array.filter(obj => obj.category === "Gift").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }

    return (
        <>
            <div id="budget-breakdown-container">
                <div className='budget-breakdown-section'>
                    <p id='income-title' className='budget-title ctr-text'>Income</p>
                    <div id='income-breakdown-cont' className='budget-breakdown row'>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Wages</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getWagesTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Interest</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getInterestTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Investment</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getInvestmentTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Gift</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getGiftTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Bank Transfer</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Business</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Other</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                    </div>
                </div>
                <div className='budget-breakdown-section'>
                    <p id='expenses-title' className='budget-title ctr-text'>Expenses</p>
                    <div id='expenses-breakdown-cont' className='budget-breakdown row'>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Home</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Shopping</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Auto</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Entertainment</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Travel</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Food</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Health & Wellness</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Other</p>
                            <p className='category-amount ctr-text'>$1120.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <BudgetSnippets />
        </>
    )  
}

export default Budget