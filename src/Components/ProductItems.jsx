import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom'
import fire from '../assets/Icons/Fire_icon.svg'

const ProductItems = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div className='Product_items'>
      <Link to={`/Product/${id}`}>
        <div className="product-img" style={{ backgroundImage: `url(${image[0]})` }} >
          <div className="new-like">
            <h1><img src={fire} alt="" />New</h1>
          </div>
        </div>
        <p>{name}</p>
        <h5>{currency}{price}</h5>
      </Link>
    </div>
  )
}

export default ProductItems
