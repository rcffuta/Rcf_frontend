import React, { useState, useEffect } from 'react';
import About1 from '../../Assets/About1.png';
import About2 from '../../Assets/About2.png';
import About3 from '../../Assets/About3.png';
import About4 from '../../Assets/About4.png';
import About5 from '../../Assets/About5.png';
import "./AboutUs.css"

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const images = [
    {
      url: About1,
      text: 'Fellowship',
      body:'We are in Christ knitted in love and unity, called into the fellowship of the Holy Spirit through Jesus Christ our Lord and Saviour.',
    },
    {
      url: About2,
      text: 'A place where good things never cease!',
      body:'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.',
    },
    {
      url: About3,
      text: 'VISION STATEMENT',
      body:'1. To raise men and women who will stand out for Christ, to live righteously and Godly as peculiar beings in this present generation. 2 Corinthians 6:17-18; Daniel 1:38 Genesis 39: 5-9; Tituss 2:1-2.2. To see as many who has gone astray in this perverse generation brought back to the life of peculiarity they already have in Christ Jesus. 1 Peter 2:9, Matthew 5:13-16, Galatians 1:15-24.3. To see that children of God express peculiarity in all spheres of their lives (spiritually, academically, financially, socially, physically, morally, etc. Genesis 41: 38-42, Daniel 6:1-3.',
    },
    {
      url: About4,
      text: 'Spirituality',
      body:'We are a peculiar generation, God’s own people— a fellowship of young people expressing themselves in Christ',
    },
    {
      url: About5,
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
              <h2>{image.text}</h2>
              <div>{image.body}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="dots-container">{renderDots()}</div>
    </div>
  );
};

export default AboutUs;





