import React, { useState } from 'react';
import Title from './Title';
import { sports } from '../assets/pages';
import { Link } from 'react-router-dom';
import chevron from '../assets/Icons/chevron.svg';
import back_chevron from '../assets/Icons/back_chevron.svg';

const Sport = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false); // state to control showing more items
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

  const handleShowMore = () => {
    setShowMore(true); // Show more items when clicked
  };

  const handleShowLess = () => {
    setShowMore(false); // Hide additional items when clicked
  };

  return (
    <div className='Sport'>
      <Title head="Shop By Sports" details="" />
      <div className="sports-container">
        {sports.slice(0, currentIndex + 3).map((item, index) => (
          <Link to={`${item.path}`} key={index} className='sport-item'>
            <img src={item.img} alt={item.name} />
            <h5>{item.name}</h5>
          </Link>
        ))}
      </div>

      {/* Show more button */}
      {!showMore && (
        <button id='showmore' className='Wide-btn' onClick={handleShowMore}>Show More</button>
      )}

      {/* Show less button */}
      {showMore && (
        <div className='more'>
          <div className="more-items">
            {sports.slice(currentIndex + 3).map((item, index) => (
              <Link to={`${item.path}`} key={index} className='sport-item'>
                <img src={item.img} alt={item.name} />
                <h5>{item.name}</h5>
              </Link>
            ))}
          </div>
          <button id='showless' className='Wide-btn' onClick={handleShowLess}>Show Less</button>
        </div>
      )}
    </div>
  );
}

export default Sport;
