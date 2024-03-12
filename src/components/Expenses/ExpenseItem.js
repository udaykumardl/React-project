import React ,{ useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [amount, setAmount] = useState(props.amount);

    const [title,setTitle]=useState(props.title);

    const clickHandler=()=>{
        setTitle('Updated!')
        console.log(title);
    }
    const amountClickHandler=()=> {
        setAmount(100);
        console.log(amount);
        
    }
    
    const deleteHandler=()=>{
        const ExpenseItem=document.getElementById(props.id)
        if(ExpenseItem){
            ExpenseItem.remove();
            
        }
    }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={(clickHandler)}>Change Title</button>
      <button onClick={amountClickHandler}>Change Amount</button>
      <button onClick={deleteHandler}>Delete Expenses</button>
    </Card>
  );
}

export default ExpenseItem;
