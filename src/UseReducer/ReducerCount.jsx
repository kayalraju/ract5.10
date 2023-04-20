import React, { useReducer, useState } from 'react'
const initialValue=0

const reducer=(state,action)=>{
    switch(action.type){
        case "intriment":
            return state+1
        case "decrimrnt":
            return state-1
            default:
                throw new Error()
    }

}

const ReducerCount = () => {
   // const [counter,setCounter]=useState(0)
   const [state,dispatch]=useReducer(reducer,initialValue)

    // const incriment=()=>{
    //     setCounter(counter+1)
        
    // }
    // const drcriment=()=>{
    //     setCounter(counter-1)
    // }

  return (
    <div>
      {/* <h1>value = {counter}</h1> */}
      <h1>value {state}</h1>
      {/* <button onClick={incriment}>Incriment</button>
      <button onClick={drcriment}>Decriment</button> */}
      <button onClick={()=>dispatch({type:"intriment"})}>Incriment</button>
      <button onClick={()=>dispatch({type:"decrimrnt"})}>Decriment</button>
    </div>
  )
}

export default ReducerCount
