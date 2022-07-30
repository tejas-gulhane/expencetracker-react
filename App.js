import './style.css';
import Expence from './Expence Component/expenxe.js'
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      locationofexpenditure:"Supermarket"
    },
    { id: 'e2',
     title: 'New TV',
      amount: 799.49,
       date: new Date(2021, 2, 12) ,
       locationofexpenditure:"mall"
      },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      locationofexpenditure:"phone-pe"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      locationofexpenditure:"amazon"
    },
  ];
let expencearr=[]
  for(let i=0;i<expenses.length;i++)
  {
    expencearr.push(<Expence title={expenses[i].title}  amount={expenses[i].amount}  date={expenses[i].date} locationofexpenditure={expenses[i].locationofexpenditure} />)
  } 

  return (
<div>
<h1>Expence tracker</h1>
      
        {expencearr}  
    
</div>

  );
}

export default App;
