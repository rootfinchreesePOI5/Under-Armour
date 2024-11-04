import React, { useContext, useEffect, useState } from 'react'
import shirt from '../assets/Images/UA_TShirt.jpg'
import Title2 from './Title2'
import { ShopContext } from '../Context/ShopContext'
import ProductItems from './ProductItems'
import shirt_BM from '../assets/Images/UA_TShirt_MB.jpg'

const Uatshirts = () => {
  const {products} = useContext(ShopContext);
  const [UaShirt , setShirt] = useState([])
  useEffect(()=>{
    setShirt(products.slice(8,12))
  },[])

  return (
    <div className='UaTshirts'>
      <div className="tshirt-container">
        <img src={shirt} className='ls' alt="" />
        <img src={shirt_BM} className='
        mb' alt="" />
        <Title2 title={"UA T-SHIRTS"} details={"A wide range of products to meet the needs of athletes not only during training but also in everyday life."} />
      </div>
      <div className='Latest-container'>
        <div className="latest-items">
          {
            UaShirt.map((item, index) => (
              <ProductItems key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Uatshirts
