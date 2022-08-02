import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);

    
    
  };
  const filteredexpense = props.items.filter(ele => {

    return  (ele.date.getFullYear()==filteredYear) 
  } 

  )
  let expenseContent = <p>No Content Found</p>

  if(filteredexpense.length>0)
  {
    expenseContent=filteredexpense.map((expense) =>  <ExpenseItem
    key={expense.id}
    title= {expense.title}
    amount={expense.amount}
    date={expense.date}
  /> )
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

        {expenseContent}
       
        
      </Card>
    </div>
  );
};

export default Expenses;