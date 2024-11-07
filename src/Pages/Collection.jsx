import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext'
import FilterSection from '../Components/FilterSection'
import { Link } from 'react-router-dom'
import fire from '../assets/Icons/Fire_icon.svg'



const Collection = () => {
  const { products } = useContext(ShopContext)


  return (
    <div className='Collection'>
      <div className="collection-container">
        <FilterSection />
        <div className="product-list">
          <div className='product-total'>
            <h2><span>{products.length}</span>Items</h2>
          </div>
          <div className='product-display'>
            {products.map(product => (
              <Link key={product._id} to={`/Product/${product._id}`}>
                <div className="product-item">
                  <div className="product-img" style={{ backgroundImage: `url(${product.image[0]})` }} >
                    <div className="new-like">
                      <h1><img src={fire} alt="" />New</h1>
                    </div>
                  </div>
                  <p>{product.name}</p>
                  <h5>{product.price}$</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection

