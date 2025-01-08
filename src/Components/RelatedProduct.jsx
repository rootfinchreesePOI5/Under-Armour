import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const RelatedProduct = ({ id, category }) => {
  const [relatedProducts, setRelated] = useState([]);

  const { products } = useContext(ShopContext);

  const applyRelated = () => {
    setRelated(
      products.filter((item) => item._id !== id && item.category === category)
    );
  };

  useEffect(() => {
    applyRelated();
  }, [products, id, category]);
  return (
    <div className="Related">
      <p className="related-title">Related Products</p>
      <div className="related-products">
        {relatedProducts.slice(0, 4).map((item, index) => (
          <Link
            key={index}
            onClick={() => scrollTo(0, 0)}
            className="product-items"
            to={`/products/${item._id}`}
          >
            <img src={item.image[0]} alt="" />
            <div className="text">
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
