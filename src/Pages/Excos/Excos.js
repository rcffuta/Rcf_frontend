import React, { useState } from 'react';
import './Excos.css';
import Navbar from '../../Component/Navbar/Navbar';
import backgroundImage from '../../Assets/Excos.png';

const Excos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    // Add more image URLs here
  ];

  const handleScroll = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div className="excos-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <Navbar />
      <div className="image-scroll">
        <div className="left-arrow" onClick={() => handleScroll('left')}>
          &lt;
        </div>
        <div className="image-container">
          {images.map((image, index) => (
            <img
              key={index}
              className={`image ${index === currentIndex ? 'active' : ''}`}
              src={image}
              alt=""
            />
          ))}
        </div>
        <div className="right-arrow" onClick={() => handleScroll('right')}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Excos;
