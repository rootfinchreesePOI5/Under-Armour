import React from 'react'
import Hero from '../Components/Hero'
import NewArrivals from '../Components/NewArrivals'
import OuterWear from '../Components/OuterWear'
import Athletes from '../Components/Athletes'
import Rewards from '../Components/Rewards'
import Login from '../Pages/Login'

const Home = ({login ,setStatus , type , setType ,setToken}) => {
  return (
    <div>
      <Hero/>
      <NewArrivals/>
      <OuterWear/>
      <Athletes/>
      <Rewards/>
      <Login login={login} setStatus={setStatus} type={type} setType={setType} setToken={setToken}/>
    </div>
  )
}

export default Home
