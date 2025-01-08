import React, { useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Categories from './Pages/Categories'
import LikedItems from './Pages/LikedItems'
import Profile from './Pages/Profile'
import Footer from './Components/Footer'

const App = () => {
  const [login , setStatus]  = useState(false);
  const [logintype , setType] = useState('login');
  const [token, setToken] = useState(true);
  return (
    <div>
    <Navbar login={login} setStatus={setStatus} type={logintype} setType={setType} token={token} setToken={setToken}/>
      <Routes>
        <Route path='/' element={<Home  login={login} setStatus={setStatus} type={logintype} setType={setType}  setToken={setToken}/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/' element={<Products/>}/>
        <Route path='/products/:id' element={<Products/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/:id' element={<Categories/>}/>
        <Route path='/likedItems' element={<LikedItems/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
