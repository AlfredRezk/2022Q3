// import React, { Component } from 'react'

// export class Todo extends Component {

//     state={edit:false};

//     componentDidMount(){
//         console.log('Component mounted to the DOM');
//     }

//     componentDidUpdate(){
//         console.log('Component get updated !')
//     }

//     componentWillUnmount(){
//         console.log('Component will be removed from DOM')
//     }

//     changeTitle(){
//         this.setState({edit:true})
//     }

//     render() {
//         console.log('Component rendered...')

//     return (

//         <div className="card card-body shadow d-flex flex-row justify-content-between align-items-center my-2">
//             {(this.state.edit)&& <h3>Title changed</h3>}
//             {!this.state.edit &&    <h3>{this.props.title}</h3>}

//             <div>
//                 <button className='btn btn-warning mx-2' onClick={()=>this.changeTitle()}> Change</button>
//                 <button className='btn btn-danger mx-2' onClick={()=> this.props.delete(this.props.id)}>
//                 Delete
//                 </button>
//             </div>
//         </div>
//     )
//   }
// }

// export default Todo

import React, {useState, useEffect} from "react";
import Card from './Card'

const Todo = (props) => {
    const [edit, setEdit] = useState(false)


    // component did mount - start of the app render in dom
    useEffect(()=>{
        console.log('Component mounted to the DOM')

        return  ()=>{
            console.log('Component, removed')
         }
    }, [])

    // componentDidUpdated
    useEffect(()=>{
        console.log('Component get updated ')
    }, [edit, setEdit])





    const changeTitle = ()=>{
        setEdit(true);
    }
    const {title, id, onDelete} = props; 
  return (




    // <div className="card card-body shadow d-flex flex-row justify-content-between align-items-center my-2">
 <Card>
    {edit && <h3>Title changed</h3>}
      {!edit && <h3>{title}</h3>}

      <div>
        <button
          className="btn btn-warning mx-2"
          onClick={() => changeTitle()}
        >
          Change
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
      </Card>
 
    // </div>
  );
};

export default Todo;
