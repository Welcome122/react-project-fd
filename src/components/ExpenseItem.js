import React,{ useState } from 'react';
import ExpenseDate from'./expenses/ExpenseDate';
import card from './card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    //function clickHandler() {}
const [title,setTitle] = useState(props.title);
   console.log('ExpenseItem evaluated by react');

const clickHandler = () => {
setTitle('Updated!');
console.log(title);
};
    return (
        <card className="expense-item">
           <ExpenseDate date={props.date}/>            <div 
              className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">${props.Amount}</div>
            </div>
            <button onClick={}>Change Title</button>
        </card>
    );
}

export default ExpenseItem;