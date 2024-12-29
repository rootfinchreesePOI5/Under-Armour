import React, { useEffect, useState } from 'react'
import { pages } from '../assets/pages'
import { Link } from 'react-router-dom'

const NewArrivals = () => {

  const [pagesLink , setPages] = useState([]);
  const date = new Date();
  const today = date.getHours();
  console.log(today)

  const setLink = () =>{
    today > 15 ? setPages(pages.slice(4,8)) : setPages(pages.slice(0 , 4))
  }

useEffect(() =>{
  setLink()
},[pages])

  return (
    <div className='NEW'>
      <p className='new_title'>New Arrivals</p>
      <div className='new-container'>
      <div className='new_arrivals'>
        {
            pagesLink.map((item , index) => {
                return <Link key={index} className='arrivals'  onClick={() =>{scrollTo(0 , 0)}} to={`/categories${item.path}`}>
                    <img src={item.img} alt="" />
                    <div>
                        <h5>{item.name}</h5>
                        <hr />
                    </div>
                </Link>
            })
        }
      </div>
      </div>
    </div>
  )
}

export default NewArrivals
