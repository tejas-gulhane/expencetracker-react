import './expence.css';
import Expensedate from './Expensedate';
import Expensedetails from './Expensedetails';

function expence(props) {
    return (
        <div>
            <div className="expense-item">
                <div className='expense-item__description'>
                    <Expensedate date={props.date}/>
                    <Expensedetails title={props.title} amount={props.amount} locationofexpenditure={props.locationofexpenditure} />
                </div>
            </div>
        </div>
    );

}
export default expence;
