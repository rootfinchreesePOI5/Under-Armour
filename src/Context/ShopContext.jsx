import React, { createContext } from 'react';
import { products } from '../assets/assets';

// Create the context
export const ShopContext = createContext();

// Define the provider component
const ShopProvider = (props) => {
  const currencyLogo = '$';

  const value = {
    products,
    currencyLogo,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

