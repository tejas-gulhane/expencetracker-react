import React ,{ useState } from 'react'
import './addexpense.css'

const Addexpense = () => {  

    const [title,settitle]=useState()
    const [amount,setamount]=useState('')
    const [date,setdate]=useState('')

    const showdata =()=>{
        console.log(amount,date,title)
        console.log("hi")
    }
    
  return (
 <div>
    <input type="text"  placeholder='EXPENSE TITLE' value={title} onChange={e => settitle(e.target.value)}/>
    <input type="text"  placeholder='AMOUNT' value={amount} onChange={e=> setamount(e.target.value)}/>
    <input type="date"  placeholder='DATE' value={date} onChange={ e=> setdate(e.target.value)}/>
    <button onClick={showdata}>ADD</button>
 </div>
 
  )    
}

export default Addexpense