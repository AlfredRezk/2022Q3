import React, { Component } from 'react'

class Counter extends Component {

    state = {counter: 0, show: true}   // initial value for the state 

 increase(){
    this.setState((prevState)=> ({counter: prevState.counter+1}))
 }

 decrease(){
    this.setState(ps=> ({counter: ps.counter-1}));
 }

 toggleShow(){

    this.setState(prev=> ({show: !prev.show}))
 }

  render() {

   let output = '';
   if(this.state.show){
      output = <h4> {this.state.counter}</h4>
   }


    return (
        <div className='mt-5'>
            <button className='btn btn-primary mx-2' onClick={this.increase.bind(this)}> + </button>
            <button className='btn btn-primary mx-2' onClick={()=>{ this.decrease()}}> -</button>
            <button className='btn btn-primary mx-2' onClick={()=>{this.toggleShow()}}> Hide</button>
            {/* {this.state.show === true?  <h4> {this.state.counter}</h4> : ''} */}
            {/* {this.state.show&&  <h4> {this.state.counter}</h4>} */}
            {output}
        </div>
        )
  }
}

export default Counter