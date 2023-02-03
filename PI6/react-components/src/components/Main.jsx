import React, { Component } from 'react'
import Button from './Button'

export class Main extends Component {

    state = {clicks:0}

    clickHandler(){
        this.setState(prev=>({clicks: prev.clicks+1}))
    }
  render() {
    return (

        <Button clickHandler={()=>this.clickHandler()} clicks={this.state.clicks}/>
        )
  }
}

export default Main