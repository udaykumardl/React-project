import { useState } from "react";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/NewExpenses/ExpenseForm";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expense";

const DUMMY_EXPENSES=[
  {
    title:'car insurance', 
    amount:200,
    date:new Date(2020,2,28),
    locationOfExpenditure:'insurance company'
  },
  {
    title:'toilet paper',
    amount:159,
    date:new Date(2021,3,28),
    locationOfExpenditure:'grocery'
  },
  {
    title:'sugar',
    amount:100,
    date:new Date(2022,2,28),
    locationOfExpenditure:'Super Market'
  },
  {
    title:'bed',
    amount:500,
    date:new Date(2023,4,24),
    locationOfExpenditure:'Furniture Store'
  },
]


const App=()=> {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)

  const addExpenseHandler=(expense)=>{
   setExpenses(prevExpenses=>{
    return [expense,...prevExpenses]
   })
  }
  
  return (
   <div>
    
   
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses} setExpenses={setExpenses}/>
    
   </div>
  );
}

export default App


