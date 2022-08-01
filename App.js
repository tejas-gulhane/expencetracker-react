import './style.css';
import Expence from './Expence Component/expenxe.js'
import Addexpense from './Expence Component/Addexpense';
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
// let expencearray=[]
//   for(let i=0;i<expenses.length;i++)
//   {
    // expencearray.push(<Expence title={expenses[i].title}  amount={expenses[i].amount}  date={expenses[i].date} locationofexpenditure={expenses[i].locationofexpenditure}  expencearr={expenses} id={i}/>)
  // } 

  return (
      <div>
      <h1>Expence tracker</h1>
      <Addexpense />
            
      <Expence title={expenses[0].title}  amount={expenses[0].amount}  date={expenses[0].date} locationofexpenditure={expenses[0].locationofexpenditure}  expencearr={expenses} id={0}/>
      <Expence title={expenses[1].title}  amount={expenses[1].amount}  date={expenses[1].date} locationofexpenditure={expenses[1].locationofexpenditure}  expencearr={expenses} id={1}/>
      <Expence title={expenses[2].title}  amount={expenses[2].amount}  date={expenses[2].date} locationofexpenditure={expenses[2].locationofexpenditure}  expencearr={expenses} id={2}/>
      <Expence title={expenses[3].title}  amount={expenses[3].amount}  date={expenses[3].date} locationofexpenditure={expenses[3].locationofexpenditure}  expencearr={expenses} id={3}/> 
          
      </div>

  );
}

export default App;
