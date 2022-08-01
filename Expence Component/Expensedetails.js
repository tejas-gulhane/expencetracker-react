import React ,{useState} from 'react'
import './expence.css';
import Addexpense from './Addexpense';

function Expensedetails(props) {
    return (
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
        </div>
    )
}

export default Expensedetails