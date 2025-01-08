import React, { useContext, useEffect, useState } from 'react'
import p1 from '../assets/Images/p_image_1.avif'
import p2 from '../assets/Images/p_image_1.avif'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'
import pro1 from '../assets/Images/pro2.jpg'

const LikedItems = () => {

  const {Likeditems , notify, removeLikedItem} = useContext(ShopContext);
  

  return (
    <div className='Likeitems'>
      <p className='liked-title'>Your <span>UA</span> Favorites</p>
      <div className="liked-items-container">
        {
          Likeditems.map((item , index) => (
           <div  className='liked-item'>
             <Link key={index} to={`/products/${item.id}`}>
              <div className='liked-left'>
              <img src={pro1} alt="" />
              <div className="myliked-item-dets">
                <h3>{item.name}</h3>
                <p>{item.des}</p>
                <h4>${item.price}</h4>
              </div>
              </div>
            </Link >
              <button className='remove-like' onClick={() => { removeLikedItem(index) , notify('removed from favorites')}}>Remove item</button>
           </div>
          ))
        }
      </div>
    </div>
  )
}

export default LikedItems
