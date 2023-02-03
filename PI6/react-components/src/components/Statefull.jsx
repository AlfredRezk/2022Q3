import React, { Component } from "react";

class Statefull extends Component {

  state = {value:''}

  inputHandler(e){
    this.setState({value: e.target.value})
  }

  render() {
    return (
      <>
        <input type="text" class="my-5 form-control" onChange={(e)=>this.inputHandler(e)}/>
        <p>{this.state.value}</p>
      </>
    );
  }
}

export default Statefull;
