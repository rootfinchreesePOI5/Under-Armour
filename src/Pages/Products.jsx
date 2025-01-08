import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import like from "../assets/Icons/like2.svg";
import liked from "../assets/Icons/liked.svg";
import { rating } from "../assets/pages";
import RelatedProduct from "../Components/RelatedProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Products = () => {
  const { id: product_id } = useParams();
  const { products , currencyLogo , notify  , addLikedItem} = useContext(ShopContext);

 const gender = {
  men : 'Men',
  women: 'Women', 
  kids: 'Kids'
 }

  const [SelectedItem, setItem] = useState([]);
  const [LikedItem, setLike] = useState(false);

  const Like = () => {
    LikedItem === false ? setLike(true) : setLike(false);
  };

  const applySelect = () => {
    setItem(products.filter((item) => item._id === product_id));
  };

  useEffect(() => {
    applySelect();
  }, [products, product_id]);

  return (
    <div>
        {/* left: item_image */}
        <div>
          {SelectedItem.map((item, index) => {
            return (
              <div className="Products-page">
                <div className="selected-product-container">
              <div key={index} className="product-image">
                <img src={item.image[0]} alt="" key={index} />
                <div className="Like">
                  <img
                    onClick={() =>{Like() , notify('added to favorites') ,  addLikedItem(item._id , item.name , item.price)}}
                    src={LikedItem === false ? like : liked}
                    alt=""
                  />
                </div>
              </div>

              <div className="product-description">
                <div className="stock">
                  <p className="item-name">{item.name}</p>
                  {item.bestseller === true ? (
                    <div className="instock">
                      <span></span>
                      <p>Available</p>
                    </div>
                  ) : (
                    <p className="outofstock">Out-of-stock</p>
                  )}
                </div>
                <p className="item-description">{item.description}</p>
                <div className="rating-price">
                  <p>
                    {currencyLogo}
                    {item.price}
                  </p>
                  <div className="rating-gp">
                    <div>
                      {rating.slice(0, item.ratings).map((item, index) => (
                        <img src={item.img} alt="" />
                      ))}
                    </div>
                    <p className="gp">{item.ratings} stars</p>
                  </div>
                </div>
                <div className="gender">
                  <p>Gender</p>
                  <div className="gender-type">
                    <button style={item.category === gender.men ? {border: '2px solid red'} : {border: '1px solid'}} id="Men">Men</button>
                    <button style={item.category === gender.women ? {border: '2px solid red'} : {border: '1px solid'}} id="Women">Women</button>
                    <button style={item.category === gender.kids ? {border: '2px solid red'} : {border: '1px solid'}} id="Women">Kids</button>
                  </div>
                </div>
                <div className="sizes">
                  <p>Size</p>
                  <div className="size-btn">
                    {
                      item.sizes.map((size , index)=> {
                       return item.bestseller === true ? (
                        <button key={index}>{size}</button>
                       ) : (
                        <button style={{cursor: 'not-allowed'}}  key={index} disabled>{size}</button>
                       )
                      })
                    }
                  </div>
                </div>
                <div>
                  {
                    item.bestseller === true ? 
                    <div className="add-to-bag">
                    <button onClick={() => notify("Item added to bag!")}>Add to Bag</button>
                    <button onClick={() => {notify("Item added to favorites!"), addLikedItem(item._id , item.name , item.price , item.description)}}>
                      <img src={like} alt="" />
                      Favorite
                    </button>
                    <ToastContainer />
                  </div>
                   :
                    <div className="out">
                    <button disabled style={{cursor: 'not-allowed'}}>Add to Bag</button>
                    <button disabled style={{cursor: 'not-allowed'}}><img src={like} alt="" />Favorite</button> 
                  </div>
                  }
                  
                </div>
              </div>
            </div>
              <RelatedProduct id={product_id} category={item.category}/>
              </div>
            );
          })}
        </div>
    </div>
  );
};

export default Products;
