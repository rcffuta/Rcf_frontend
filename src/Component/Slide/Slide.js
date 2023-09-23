import React, { useState, useEffect } from 'react';
import Slide1 from '../../Assets/Slide1.png';
import Slide2 from '../../Assets/Slide2.png';
import Slide3 from '../../Assets/Slide3.png';
import EastIcon from '@mui/icons-material/East';
import Footer from "../Footer/Footer"
import './Slide.css';

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const images = [
    {
      url: Slide1,
      text: 'Fellowship',
      body:'We are in Christ knitted in love and unity, called into the fellowship of the Holy Spirit through Jesus Christ our Lord and Saviour.',
    },
    {
      url: Slide2,
      text: 'A place where good things never cease!',
      body:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    },
    {
      url: Slide3,
      text: 'Spirituality',
      body:'We are a peculiar generation, God’s own people— a fellowship of young people expressing themselves in Christ',
    },

  ];

  useEffect(() => {
    startSlider(); 
    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  const startSlider = () => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 
    setIntervalId(id);
  };

  const handleDotClick = (index) => {
    clearInterval(intervalId); 
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
              <h2 className='image-slide'>{image.text}</h2>
              <div className='body-slide-flex'>
              <div className='body-slide'>{image.body}</div>
              <EastIcon fontSize='small' className='Arrow'/>
              </div>
              <div className="footer-wrapper">
            <Footer />
          </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dots-container">{renderDots()}</div>
      
    </div>
  );
};

export default Slide;

