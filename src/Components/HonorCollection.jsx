import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductItems from './ProductItems'
import Honor from '../assets/Images/Honor.jpg'
import Title from './Title'
import WideButton from './WideButton'

const HonorCollection = () => {

  const { products } = useContext(ShopContext)
  const [Honorcollection, setHonor] = useState([])
  useEffect(() => {
    setHonor(products.slice(4, 8))
  }, [])
  return (
    <div className='Honor'>
      <img src={Honor} alt="" />
      <div className="Honor-title">
        <Title head="BADGE OF HONOR COLLECTION" details="This gear represents growth. Every step forward, no matter how hard, becomes our badge of honor" />
        <WideButton />
      </div>
      <div className='Latest-container'>
        <div className="latest-items">
          {
            Honorcollection.map((item, index) => (
              <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HonorCollection
