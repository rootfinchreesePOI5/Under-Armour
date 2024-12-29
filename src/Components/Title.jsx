import React from 'react'
import { useNavigate } from 'react-router-dom'

const Title = ({h5 , title , p , btn_text , params}) => {
  const navigate = useNavigate()
  return (
    <div className='Title'>
        <div className='item1'>
            <h5>{h5}</h5>
            <h1>{title}</h1>
        </div>
        <p>{p}</p>
        <button className='Shop' onClick={() => navigate(`/categories/Collections#${params}`)}>{btn_text}</button>
    </div>
  )
}

export default Title
