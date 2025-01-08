import React, { useEffect, useState } from 'react'
import Athlete from '../assets/Images/Athletes.avif'
import Title from './Title'
import { Players } from '../assets/assets'
import uashirts from '../assets/Images/UA_TShirt.jpg'
import { Link } from 'react-router-dom'
import fire from '../assets/Icons/Fire_icon.svg'


const Athletes = () => {
    const AthleteName = 'Josua'
    const [playerItems , setItems] = useState([]);
      const date = new Date();
      const today = date.getHours();
      console.log(today)
    
      const setProducts = () =>{
        today > 15 ? setItems(Players.slice(4,8)) : setItems(Players.slice(0 , 4))
      }
    
    useEffect(() =>{
      setProducts();
    },[Players , today])
  return (
    <div className='Athletes'>
      <img src={today > 15 ? Athlete : uashirts} alt="" />
      {
        today > 15 ?
      <Title title={'THE NEXT BIG THING FROM JOSHUA VIDES'} p={'Suit up in limited-edition gear created for elite high school athletes by all-star artist Joshua Vides.'} btn_text='Shop Now' params={AthleteName}/> 
      :
      <Title title={'UA T-SHIRTS'} p={'A wide range of products to meet the needs of athletes not only during training but also in everyday life.'} btn_text='Shop Now' params={'uashirts'}/> 
      }
      <div className='Players_info'>
              {
                playerItems.map((item , index) => (
                         <Link  className='outerwear-items' to={`/Collections#uashirts`} key={index}>
                           <img src={item.image} alt="" />
                           <div className='product-info'>
                              <div className='new-hot'>
                                  <img src={fire} alt="" />
                                  <p>NEW</p>
                              </div>
                              <div className="text">
                              <p>{item.name}</p>
                              <p>${item.price}</p>
                              </div>
                           </div>
                         </Link>
                      ))
                    }
            </div>
    </div>
  )
}

export default Athletes
