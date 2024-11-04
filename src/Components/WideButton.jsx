import React from 'react'
import { Link } from 'react-router-dom'

const WideButton = () => {
  return (
    <Link to='/Product'>
      <button className='Wide-btn'>Shop now</button>
    </Link>
  )
}

export default WideButton
