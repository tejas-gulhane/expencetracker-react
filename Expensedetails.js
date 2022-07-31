import React ,{useState} from 'react'
import './expence.css';

function Expensedetails(props) {
   
     const [title, settitle] = useState(props.title);
     const [price, setprice] = useState(props.amount);

 
    const changehandler =(e)=>{
     settitle("updated title")
    }

    const changepricehandler =(e)=>{
        setprice("100$")
       }


    return (
        <div className='expense-item__description'>
            <h2>{title}</h2>

            <div className="expense-item__price">{price}</div>


            <h2>{props.locationofexpenditure}</h2>
            <button onClick={changehandler} id={props.id}>Change Title</button>
            <button onClick={changepricehandler}>Change price</button>
        </div>
    )
}

export default Expensedetails