import '../Expence Tracker/expence.css';
import Expensedate from './Expensedate';
import Expensedetails from './Expensedetails';

function expence(props) {
    return (
        <div>
            <div className="expense-item">
                <div className='expense-item__description'>
                    <Expensedetails title={props.title} amount={props.amount} locationofexpenditure={props.locationofexpenditure} />
                    <Expensedate date={props.date}/>
                </div>
            </div>
        </div>
    );

}
export default expence;
