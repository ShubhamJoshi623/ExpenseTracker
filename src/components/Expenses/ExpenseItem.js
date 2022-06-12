import React,{useState} from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
  const[title, setTitle] = useState(props.title);

  return (
    <Card className='expense-item'>
     <div>
         <ExpenseDate date={props.date}/>
     </div>
     <div className='expense-item__description'>
         <h2 >{title}</h2>
         <div className='expense-item__price'>{props.amount}</div>
     </div>
    </Card>
  )
}
