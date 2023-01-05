import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card'
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title);
    // console.log('ExpenseItem evaluated by React');
    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount} Rupees</div>
            </div>
        </Card> </li>
    );
}
export default ExpenseItem;