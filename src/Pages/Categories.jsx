import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../assets/assets.js";
import { category, filterButton } from "../assets/pages.js";
import arrow from "../assets/Icons/arrow.svg";
import fire from '../assets/Icons/Fire_icon.svg'
import { use } from "react";

const Categories = () => {
  const { id: category } = useParams();
  console.log(category);
  const [FilteredProducts, setProducts] = useState([]);
  const [show, setShow] = useState(0);
  const navigate = useNavigate()
  // const [totalproducts , setNumber] = useState(products.length)

  const applyFilter = () => {
    if(category){
      setProducts(products.filter((item) => item.category === category))
      // setNumber(FilteredProducts.length)
    }
    else{
      setProducts(products)
      // setNumber(products.length)
    }
  };
  useEffect(() => {
    applyFilter();
  }, [products, category]);

  return (
    <div className="Categories">

      {/* left: filter Section */}
      <div className="filter-items">
        <p className="filter">Filter</p>
        {filterButton.slice(1,3).map((item, index) => {
          return (
            <div className="filter-byCategory" key={index}>
              <p onClick={() => setShow(index)} className="filter-categories">
                {item.type.name} <img src={arrow} alt="" />
              </p>
              <div
                style={
                  show === index ? { display: "flex" } : { display: "none" }
                }
                className="category-dropdown"
              >
                <div className="categories">
                  <p style={category === item.type.t1 ? {color: 'crimson'} :{color:'black'}} onClick={() => navigate(`/categories/${item.type.t1}`)}>{item.type.t1}</p>
                  <p style={category === item.type.t2 ? {color: 'crimson'} :{color:'black'}} onClick={() => navigate(`/categories/${item.type.t2}`)}>{item.type.t2}</p>
                  <p style={category === item.type.t3 ? {color: 'crimson'} :{color:'black'}} onClick={() => navigate(`/categories/${item.type.t3}`)}>{item.type.t3}</p>
                  <p style={category === item.type.t4 ? {color: 'crimson'} :{color:'black'}} onClick={() => navigate(`/categories/${item.type.t4}`)}>{item.type.t4}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* right: products div*/}
      <div>
        <p className="total-items">{
          FilteredProducts.length} <span>items</span></p>
        <div className="Products">
        {FilteredProducts.map((item, index) => {
          return (
            <Link key={index} onClick={() => scrollTo(0 , 0)} className="product-items" to={`/products/${item._id}`}>
              <img src={item.image[0]} alt="" />
              <div className="text">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
