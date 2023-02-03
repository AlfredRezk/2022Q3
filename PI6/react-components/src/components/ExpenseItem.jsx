// import {Component} from 'react';

import ExpenseDate from "./ExpeseDate/ExpenseDate";

// class ExpenseItem  extends Component{

//     render(){
//         return(

//             <div className="card card-body shadow-sm my-3">
//                 <div className='d-flex justify-content-between align-items-center'>
//                 <div>
//                     <h1 className='card-title h4'>
//                     {this.props.expense.title}
//                     </h1>
//                 </div>
//                 <h4> <span className='badge bg-primary'>${this.props.expense.amount} </span></h4>
//                 </div>
//             </div>
//             )
//     }
// }

// export default ExpenseItem;

function ExpenseItem({expense}) {
 const {title, amount, date, type} = expense;
  return (
    <div className="card card-body shadow-sm my-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
            <ExpenseDate date={date}/>
          <h1 className="card-title h4 ms-5">{title}</h1>
        </div>
        <h4> <span className={`badge ${type=='expense'? 'bg-danger': 'bg-success'}`}> 
        {type=='expense'? '-':'+'}${amount}</span>
        </h4>
      </div>
    </div>
  );
}

export default ExpenseItem;
