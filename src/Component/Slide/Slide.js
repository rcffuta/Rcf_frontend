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
      url: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1697753745/rcf/Slide1_h48ptb.png",
      text: 'Fellowship',
      body:'We are in Christ knitted in love and unity, called into the fellowship of the Holy Spirit through Jesus Christ our Lord and Saviour.',
    },
    {
      url: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1697753738/rcf/Slide2_tlfm5y.png",
      text: 'A place where good things never cease!',
      body:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    },
    {
      url: "https://res.cloudinary.com/dutcp8qkx/image/upload/v1697753745/rcf/Slide3_u1ygqj.png",
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
    <div>
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${currentIndex === index ? 'active' : ''}`}
          >
            <img src={image.url} alt="" className="relative h-full w-full object-cover"/>
            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white text-center pb-60 xs:bottom-0">
              <h2 className='image-slide'>{image.text}</h2>
              <div className='body-slide-flex'>
              <div className='body-slide'>{image.body}</div>
             
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

