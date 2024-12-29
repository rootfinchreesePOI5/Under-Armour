import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {products} from '../assets/assets.js'

const Categories = () => {
  const {id: category} = useParams();
  console.log(category)
const [FilteredProducts, setProducts] = useState([])

const applyFilter = () =>{
  setProducts(products.filter(item => item.category === category));
}

useEffect(() =>{
  console.log(FilteredProducts)
  applyFilter();
},[products , category])
  

  return (
    <div>
      {
        FilteredProducts.map((item , index) =>{
          return <div key={index}>
            <img src={item.image} alt="" />
          </div>
        })
      }
    </div>
  )
}

export default Categories
