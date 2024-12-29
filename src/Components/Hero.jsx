import React from 'react'
import heroImg from '../assets/Images/hero_img.avif'
import Title from './Title'

const Hero = () => {
  return (
    <section className='Herosection'>
        <img className='heroImg' src={heroImg} alt="" />
        <Title h5={'D.FOX 1'} title={'HAPPY FOX DAY ALT'} p={'From De-Aarons birthday to the holidays—this kind of speed is a gift worth celebrating.'} btn_text='Shop Now' params='Curry'/>
    </section>
  )
}

export default Hero
