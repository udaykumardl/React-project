import Card from "./Card";


const ExpenseDetails=(props) =>{
    return (
        <Card className="expense-details">
            <div className="expense-details__title">{props.title}</div>
            <div className="expense-details__amount">{props.amount}</div>
        </Card>
    );
}

export default ExpenseDetails;

