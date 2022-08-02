import './style.css';
import Expence from './Component/Expense/Expense'
import ExpenseForm from './Component/New Expense/ExpenseForm'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: "$94.12",
      date: new Date(2020, 7, 14),
      locationofexpenditure:"Supermarket"
    },
    { id: 'e2',
     title: 'New TV',
      amount: "$799.49",
       date: new Date(2021, 2, 12) ,
       locationofexpenditure:"mall"
      },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: "$294.67",
      date: new Date(2021, 2, 28),
      locationofexpenditure:"phone-pe"
    },
    {
      id: 'e4',
      title: '"New Desk (Wooden)',
      amount: '$450',
      date: new Date(2021, 5, 12),
      locationofexpenditure:"amazon"
    },
    
  ];

  let expencearray=[];

  for(let i=0;i<expenses.length;i++)
  {
    expencearray.push(<Expence title={expenses[i].title}  amount={expenses[i].amount}  date={expenses[i].date} locationofexpenditure={expenses[i].locationofexpenditure}  expencearr={expenses} id={i}/>)
  } 

  const onsavedatahanlder =(title,amount,date)=>{
    console.log(title,amount,date)

  }

  return (
    <div className="App">
      <ExpenseForm onsavedata={onsavedatahanlder}/>
      {expencearray}
    </div>
  );
}

export default App;
