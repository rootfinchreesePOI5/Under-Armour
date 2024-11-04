import React, { useContext, useState , useEffect} from 'react'
import {ShopContext} from '../Context/ShopContext'
import Productitems from '../Components/ProductItems'

const LatestCollection = () => {

  const {products} = useContext(ShopContext);
  const [latestProducts , setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0,4));
},[])   

  return (
    <div className='Latest-container'>
      <div className="latest-items">
        {
          latestProducts.map((item , index) => (
            <Productitems key={index} id={item._id} image={item.image} name={item.name} price={item.price}  />
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
