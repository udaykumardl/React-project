
import './ExpenseItem.css';


function ExpenseItem(props){
    const expensedate=new Date(2022,3,12)
    const expensetitle='Car Insurance';
    const expenseAmount=100
    const locationOfExpenditure='Grocery store';
    
    return (
    <div className="expense-item">
        <div>{props.date.toISOString()} </div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            <div className="expense-item__locationOfExpenditure">{props.locationOfExpenditure}</div>
        </div> 
    </div>
    
    )
}
export default ExpenseItem;