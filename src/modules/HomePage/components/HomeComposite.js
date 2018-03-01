import React from 'react'


const HomeComposite = (props) => {
  return (
    <div>
    <h1>L'app se rend...</h1>
    {JSON.stringify(props, 2, 2)}
    </div>
  )
}

export default HomeComposite