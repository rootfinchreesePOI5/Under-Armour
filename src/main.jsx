import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './responsive.css'
import {BrowserRouter} from 'react-router-dom'
import ShopProvider from './Context/ShopContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopProvider>
      <App/>
  </ShopProvider>
  </BrowserRouter>,
)
