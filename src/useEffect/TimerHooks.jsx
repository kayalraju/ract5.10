import React, { useEffect, useState } from 'react'

const TimerHooks = () => {
    const[countTime,setCountTime]=useState(0)

    useEffect(()=>{
        console.log('hi');
        setTimeout(()=>{
            setCountTime((count)=>count+1)
        },1000)
    },[])

  return (
    <div>
      <h1>Time count </h1>

      <h1>count time {countTime}</h1>
    </div>
  )
}

export default TimerHooks
