import React from 'react'

const Title = ({head , details}) => {
  return (
    <div className='title'>
      <h1>{head}</h1>
      <p>{details}</p>
    </div>
  )
}

export default Title
