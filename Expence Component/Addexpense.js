import React ,{ useState } from 'react'
import './addexpense.css'
import Expence from './expenxe.js'



const Addexpense = () => {  

    const [title,settitle]=useState('')
    const [amount,setamount]=useState('')
    const [date,setdate]=useState('')

    const showdata =()=>{
        console.log(date)
        console.log("hi")
        setamount("")
        settitle("")
        setdate("")
    }
    
  return (
 <div>
    <input type="text"  placeholder='EXPENSE TITLE' value={title} onChange={e => settitle(e.target.value)}/>
    <input type="text"  placeholder='AMOUNT' value={amount} onChange={e=> setamount(e.target.value)}/>
    <input type="date"  placeholder='DATE' value={date} onChange={ e=> setdate(e.target.value)}/>
    <button onClick={showdata}>ADD</button>

    <Expence    date ={date} title={title} amount={amount} />
 </div>
 
  )    
}

export default Addexpense;