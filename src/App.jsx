import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import Categories from './Pages/Categories'
import LikedItems from './Pages/LikedItems'
import Profile from './Pages/Profile'

const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products/' element={<Products/>}/>
        <Route path='/products/:id' element={<Products/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/categories/:id' element={<Categories/>}/>
        <Route path='/likedItems' element={<LikedItems/>}/>
      </Routes>
    </div>
  )
}

export default App
