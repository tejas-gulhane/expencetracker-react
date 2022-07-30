import React from 'react'
import './expence.css';

function Expensedetails(props) {
    return (
        <div className='expense-item__description'>
            <h2>{props.title}</h2>

            <div className="expense-item__price">{props.amount}</div>


            <h2>{props.locationofexpenditure}</h2>
        </div>
    )
}

export default Expensedetails