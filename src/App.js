import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/NewExpenses/ExpenseForm";
import NewExpense from "./components/NewExpenses/NewExpense";


function App(){
  const expense=[
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

  return (
    <div>
      <NewExpense/>
      {expense.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          locationOfExpenditure={expense.locationOfExpenditure}
        />
      ))}
    </div>
  );
}
export default App


