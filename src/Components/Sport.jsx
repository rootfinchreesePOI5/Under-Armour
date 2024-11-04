import React, { useState } from 'react';
import Title from './Title';
import { sports } from '../assets/pages';
import { Link } from 'react-router-dom';
import chevron from '../assets/Icons/chevron.svg';
import back_chevron from '../assets/Icons/back_chevron.svg';

const Sport = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = sports.length;

  const nextSlide = () => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='Sport'>
      <Title head="Shop By Sports" details="" />
      <div className="sports-container">
        {sports.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <Link to={`${item.path}`} key={index} className='sport-item'>
            <img src={item.img} alt={item.name} />
            <h5>{item.name}</h5>
          </Link>
        ))}
        {currentIndex > 0 && (
          <img className='back' src={back_chevron} alt="Back" onClick={prevSlide} />
        )}
        {currentIndex < totalItems - 3 && (
          <img className='chevron' src={chevron} alt="Next" onClick={nextSlide} />
        )}
      </div>
      <button id='showmore' className='Wide-btn'>show more</button>
    </div>
  );
}

export default Sport;
