import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import HonorCollection from '../Components/HonorCollection'
import Connect from '../Components/Connect'
import Uatshirts from '../Components/Uatshirts'
import Sport from '../Components/Sport'
const Home = () => {
  return (
    <div className='home'>
      <Hero/>
      <LatestCollection/>
      <HonorCollection/>
      <Connect/>
      <Uatshirts/>
      <Sport/>
    </div>
  )
}

export default Home
