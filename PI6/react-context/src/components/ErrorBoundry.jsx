import React, { Component } from 'react'

class ErrorBoundry extends Component {

    state = {hasError: false}

    componentDidCatch(error){
        console.log('Catched Error');
        this.setState({hasError: true})
    }

  render() {
    if(this.state.hasError){
        return <p> Something Went Wrong</p>
    }else{
        return this.props.children
    }
}
}

export default ErrorBoundry