import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

export default function ExpensesList(props) {

if(props.items.length===0)
{
    return <h2 className='expenses-list__fallback'>Found no Expenses.</h2>
}


  return (
    <div>
        <ul className='expenses-list'>
      {props.items.map((item,index)=>{
    return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>

  })
}
</ul>
    </div>
  )
}
