import React, { memo } from 'react'

const User = (props) => {
    console.log('inner component  User');
  return (
    <div>
      <h1>user  {props.data}</h1>
    </div>
  )
}

export default memo(User)
