import React, { createContext, useState } from "react";
import { products as initialProducts } from "../assets/assets";

export const ShopContext = createContext();


const ShopContextProvider = (props) => {
    const [selectedFilters, setSelectedFilters] = useState({
        category: '',
        subCategory: '',
        size: '',
        bestseller: false,
    });

    const currency = '$';
    const delivery_fee = 10;

    const filterProducts = () => {
        return initialProducts.filter(product => {
            const matchesCategory = selectedFilters.category ? product.category === selectedFilters.category : true;
            const matchesSubCategory = selectedFilters.subCategory ? product.subCategory === selectedFilters.subCategory : true;
            const matchesSize = selectedFilters.size ? product.sizes.includes(selectedFilters.size) : true;
            const matchesBestseller = selectedFilters.bestseller ? product.bestseller === true : true;

            return matchesCategory && matchesSubCategory && matchesSize && matchesBestseller;
        });
    };

    const value = {
        products: filterProducts(),
        currency,
        delivery_fee,
        setSelectedFilters,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
