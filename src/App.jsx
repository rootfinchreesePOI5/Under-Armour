import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import PlaceOrder from './Pages/PlaceOrder'
import Men from './Pages/Men'
import Order from './Pages/Order'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Footer from './Components/Footer'
import message from './assets/Icons/message.svg'
import Collection from './Pages/Collection'

const App = () => {
  return (
    <div className='Main'>
      <Navbar />
      <div className="message">
        <Link to={'/contact'}>
          <img src={message} alt="" />
        </Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/collection' element={<Collection/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
