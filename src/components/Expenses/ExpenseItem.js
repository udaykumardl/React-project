import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const clickHandler=()=>{
        console.log('clicked!!!')
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
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={(clickHandler)}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expenses</button>
    </Card>
  );
}

export default ExpenseItem;
