import React from 'react';
import hero_img from '../assets/Images/hero_img.jpg'
import WideButton from './WideButton';
import Title from './Title';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={hero_img} alt="" />
      <div className="hero-content">
        <h5>The Official Athlete Fit</h5>
        <Title head="UA UNSTOPPABLE WOVEN PANTS"  details= "Our premium woven material has all the performance tech you love—breathable, durable, water-repellent —and it's always on point"/>
        <WideButton />
      </div>
    </div>
  );
};

export default Hero;
