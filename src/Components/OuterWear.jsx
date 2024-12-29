import React, { useEffect, useState } from 'react'
import { products } from '../assets/assets';
import fire from '../assets/Icons/Fire_icon.svg'
import { Link, useNavigate } from 'react-router-dom';

const OuterWear = () => {
    const [OuterWear , setOutwear] = useState([]);
    const [Image ,setimage] = useState(true);

    const navigate = useNavigate()

    const applyFilter = () => {
        setOutwear(products.filter(item => item.subCategory === 'OuterWear'))
    }

    useEffect(() =>{
        applyFilter();
    },[products])
  return (
    <div className='OUT'>
      <p className='new_title'>Outerwear</p>
      <div className="outwear-container">
      <div className="outerwear_products">
      {
        OuterWear.slice(0 , 4).map((item , index) => (
           <Link  className='outerwear-items' to={`/products/${item._id}`} key={index}>
             <img onMouseOver={() => setimage(index)} src={Image === index ? item.image[0]  :item.image[1]} alt="" />
             <div className='product-info'>
                <div className='new-hot'>
                    <img src={fire} alt="" />
                    <p>NEW</p>
                </div>
                <div className="text">
                <p>{item.name}</p>
                <p>${item.price}</p>
                </div>
             </div>
           </Link>
        ))
      }
      </div>
      <button className='Shop' onClick={() => navigate('/products#outerwear')}>Shop now</button>
      </div>
    </div>
  )
}

export default OuterWear
