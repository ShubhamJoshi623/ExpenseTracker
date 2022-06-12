import React,{ useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {

const[enteredtitle,setEnteredTitle]=useState("");
const[enteredAmount,setEnteredAmount]=useState("");
const[enteredDate,setEnteredDate]=useState("");

// const[userInput,setUserInput]=useState({enteredTitle:'',enteredAmount:'',enteredDate:''})



const titleChangeHandler=(event)=>{

    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // });     wrong way

    // setUserInput((prevState)=>{    // correct way
    //         return {...userInput,enteredTitle:event.target.value};

    // });
    setEnteredTitle(event.target.value);
};

const amountChangeHandler=(event)=>{
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // });
    setEnteredAmount(event.target.value);
};

const dateChangeHandler=(event)=>{
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // });

    setEnteredDate(event.target.value);
};

const submitHandler = (event) => {
  event.preventDefault();

  const expenseData = {
    title: enteredtitle,
    amount: +enteredAmount,
    date: new Date(enteredDate)
  };

 props.onSaveExpenseData(expenseData);// IMP passing data back to parent NewExpense.js !!!!!
  setEnteredAmount('');
  setEnteredTitle('');
  setEnteredDate('');
};


  return (
    <div>
      <form onSubmit={submitHandler} id='expenseForm'>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredtitle} onChange={titleChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
          </div>
        </div>
        <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add expense</button>
        </div>
      </form>
    </div>
  );
}
