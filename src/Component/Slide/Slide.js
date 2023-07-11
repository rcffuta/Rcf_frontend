// import React from 'react'
// import "./Slide.css"


// const Slide = () => {
//   return (
//     <div>Slide</div>
//   )
// }

// export default Slide

import React, { useState, useEffect } from 'react';
import Slide1 from '../../Assets/Slide1.png';
import Slide2 from '../../Assets/Slide2.png';
import Slide3 from '../../Assets/Slide3.png';
import './Slide.css';

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const images = [
    {
      url: Slide1,
      text: 'Text 1',
    },
    {
      url: Slide2,
      text: 'Text 2',
    },
    {
      url: Slide3,
      text: 'Text 3',
    },
    {
      url: 'url_4.jpg',
      text: 'Text 4',
    },
  ];

  useEffect(() => {
    startSlider(); // Start the slider when the component mounts
    return () => {
      clearInterval(intervalId); // Clear the interval when the component unmounts
    };
  }, []); // Empty dependency array to run the effect only once

  const startSlider = () => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Set the interval to 30 seconds
    setIntervalId(id);
  };

  const handleDotClick = (index) => {
    clearInterval(intervalId); // Clear the interval when dot is clicked
    setCurrentIndex(index);
  };

  const renderDots = () => {
    return images.map((_, index) => (
      <div
        key={index}
        className={`dot ${currentIndex === index ? 'active' : ''}`}
        onClick={() => handleDotClick(index)}
      />
    ));
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${currentIndex === index ? 'active' : ''}`}
          >
            <img src={image.url} alt="" />
            <div className="slide-text">
              <h2>{image.text}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="dots-container">{renderDots()}</div>
    </div>
  );
};

export default Slide;

