import './Budget.css'
import BudgetSnippets from './BudgetSnippets'

function Budget( {transactions, convertCentsToDollars}) {

    // income catgegory totals calculations
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
    function getBankTransferTotal(array){
        return array.filter(obj => obj.category === "Bank Transfer").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }
    function getBusinessTotal(array){
        return array.filter(obj => obj.category === "Business").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }
    function getOtherIncomeTotal(array){
        return array.filter(obj => obj.category === "Other").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }

    // expenses catgegory totals calculations
    function getHomeTotal(array){
        return array.filter(obj => obj.category === "Home").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }
    function getShoppingTotal(array){
        return array.filter(obj => obj.category === "Shopping").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }
    function getAutoTotal(array){
        return array.filter(obj => obj.category === "Auto").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }
    function getAutoTotal(array){
        return array.filter(obj => obj.category === "Auto").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }
    function getEntertainmentTotal(array){
        return array.filter(obj => obj.category === "Entertainment").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }
    function getTravelTotal(array){
        return array.filter(obj => obj.category === "Travel").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }
    function getFoodTotal(array){
        return array.filter(obj => obj.category === "Food").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }
    function getHealthWellnessTotal(array){
        return array.filter(obj => obj.category === "Health/Wellness").reduce((sum, obj) => sum + obj.amountInCents, 0);
    }
    function getOtherExpenseTotal(array){
        return array.filter(obj => obj.category === "Other").reduce((sum, obj) => sum + obj.amountInCents, 0);
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
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getBankTransferTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Business</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getBusinessTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Other</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getOtherIncomeTotal(transactions)) }</p>
                        </div>
                    </div>
                </div>
                <div className='budget-breakdown-section'>
                    <p id='expenses-title' className='budget-title ctr-text'>Expenses</p>
                    <div id='expenses-breakdown-cont' className='budget-breakdown row'>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Home</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getHomeTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Shopping</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getShoppingTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Auto</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getAutoTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Entertainment</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getEntertainmentTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Travel</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getTravelTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Food</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getFoodTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Health & Wellness</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getHealthWellnessTotal(transactions)) }</p>
                        </div>
                        <div className='budget-breakdown-category-cont col'>
                            <p className='category-title ctr-text'>Other</p>
                            <p className='category-amount ctr-text'>{ convertCentsToDollars(getOtherExpenseTotal(transactions)) }</p>
                        </div>
                    </div>
                </div>
            </div>
            <BudgetSnippets transactions={ transactions } convertCentsToDollars={ convertCentsToDollars }/>
        </>
    )  
}

export default Budget