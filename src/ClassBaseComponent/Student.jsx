import React, { Component } from 'react'

export default class Student extends Component {
  state={
    name:"Raju kayal",
    phone:"9933968569"
  }


  render() {

    return (
      <div>
        <h1>This Is a Class component</h1>
        <h1>Name : {this.state.name}</h1>
        <h1>Name : {this.state.phone}</h1>
      </div>
    )
    
  }
}
