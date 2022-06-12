
import React,{useState} from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import './ExpensesList.css'


export default function Expenses(props){
   const[filteredYear,setFilteredYear]=useState('2020');

  // const[filteredExpenseitems,setFilteredExpenseItems]=useState(props.items); // not needed

const filteredExpenses=props.items.filter((item)=> item.date.getFullYear().toString() === filteredYear);



const expenseChangeFilterHandler=(expensefilter)=>{

   setFilteredYear(expensefilter.toString());

  console.log(expensefilter);

  //not needed below simply filter in a const
// setFilteredExpenseItems(()=>{
//   return props.items.filter((item)=> item.date.getFullYear().toString() ===expensefilter

// );
// })

};


  return (
<div>

    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} filterValue={expenseChangeFilterHandler}/>
    <ExpensesChart expenses={filteredExpenses}/>
<ExpensesList items={filteredExpenses}/>
    

    </Card>
    </div>
  )
}
