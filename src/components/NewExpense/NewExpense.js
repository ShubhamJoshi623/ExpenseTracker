import React ,{useState}from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import './ExpenseForm.css'

export default function NewExpense(props) {
 const[isEditing, setEditing] =useState(false);

    const onSaveExpenseData=(enteredExpenseData)=>{
const expenseData={
    id:Math.random().toString(),
...enteredExpenseData

};
props.onAddExpense(expenseData); // IMP passing data UP to parent app.js !!!!

setEditing(false);

    };

const addNewExpenseHandler=()=>{
    setEditing(true);

};

const stopEditingHandler=()=>{
    setEditing(false);

};
  return (
      <div>
    <div className='new-expense'>
        { !isEditing &&
    <div className="new-expense__actions">
    <center><button onClick={addNewExpenseHandler}>Add new Expense</button></center>
            </div>
}
     { isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={stopEditingHandler}/>}
    </div>
    </div>
  )
}
