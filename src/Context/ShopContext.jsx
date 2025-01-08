import React, { createContext, useState } from 'react';
import { products } from '../assets/assets';
import logo from "../assets/Images/profile.png";
import pro2 from '../assets/Images/pro2.jpg'
import { ToastContainer ,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Create the context
export const ShopContext = createContext();

// Define the provider component
const ShopProvider = (props) => {
  const [Likeditems , setLikedItems] = useState([
  ])

  const addLikedItem = (newId , itemname  , itemPrice , itemDes) => {
    setLikedItems((prev) => [...prev, { id: newId , name: itemname , price: itemPrice , des: itemDes }]);
  };

  const removeLikedItem = (indexItem) => {
    setLikedItems(Likeditems.filter((_,index) => indexItem !== index ))
  };
  
  const [Cartitems , setCart] = useState([])
  const currencyLogo = '$';
  const [account , setAccount] = useState([
    {
      img: logo,
      email: 'mohamedabdiaziz515@gmail.com',
      password: '@pogba666',
      name:'Abdiaziz Mohamed Abdirahman'
    },
    {
      img: pro2,
      email: 'infintedev0@gmail.com',
      password: '@kareem30',
       name:'InfinteDev0'
    }
  ]);
  const notify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      closeButton: false,
    });
  };
  

  const value = {
    products,
    currencyLogo,
    account,
    setAccount,
    notify,
    Likeditems,
    setLikedItems,
    addLikedItem,
    removeLikedItem
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;

