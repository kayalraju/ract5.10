import React, { Component } from 'react'

export default class UpdateState extends Component {
    constructor(props){
        super(props);
        this.state={
            company:"webskitters",
            address:"kolkata"
        }
    }
    change=()=>{
        this.setState({company:"TCS"})

    }
  render() {
    return (
      <div>
        <h1> {this.state.company}</h1>

        <button onClick={this.change}>Update name</button>
      </div>
    )
  }
}
