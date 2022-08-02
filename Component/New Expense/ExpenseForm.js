import React from 'react'
import { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [title,settitle] = useState('');
    const [amount,setamount] = useState('');
    const [date,setdate] = useState('');

    

    const submithandler = (e)=>{
            e.preventDefault();
            console.log(title,amount,date)
            setamount("")
            setdate('')
            settitle ("")
            props.onsavedata( title,amount,date);
    }

  return (
 
        <form onSubmit={submithandler}>

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                        <input  type="text"  placeholder='Expence Item' value={title} onChange ={e =>{settitle(e.target.value)}}/>
                </div>
                <div className='new-expense__control'>
                        <input  type="text"  placeholder='Amount' value={amount} onChange ={e =>{setamount(e.target.value)}}/>
                </div>
                <div className='new-expense__control'>
                        <input  type="date"  value={date} onChange ={e =>{setdate(e.target.value)}}/>
                </div>
            </div> 
             
            <div><button className='button'>ADD EXPENCE </button></div>
        </form>


  )
}

export default ExpenseForm;