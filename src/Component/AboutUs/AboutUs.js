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
      text: 'Who We Are',
      body:'We are a peculiar generation purified and zealous unto God.  A fellowship of brothers and sisters, established in faith, and growing daily unto the stature of Christ. We are dispensers of His realities, strengthened by Christ to fulfill our purpose in God and on campus.',
    },
    {
      url: About2,
      text: 'History Of The Fellowship',
      body:'The Redeemed Christian Fellowship, FUTA was founded in 1989 by . It started as a in The Redeemed Christian Fellowship, FUTA was founded in 1989 by . It started as a inThe Redeemed Christian Fellowship, FUTA was founded in 1989 by . It started as a in',
    },
    {
      url: About3,
      text: 'VISION STATEMENT',
      body:'1. To raise men and women who will stand out for Christ, to live righteously and Godly as peculiar beings in this present generation. 2 Corinthians 6:17-18; Daniel 1:38 Genesis 39: 5-9; Tituss 2:1-2.2. To see as many who has gone astray in this perverse generation brought back to the life of peculiarity they already have in Christ Jesus. 1 Peter 2:9, Matthew 5:13-16, Galatians 1:15-24.3. To see that children of God express peculiarity in all spheres of their lives (spiritually, academically, financially, socially, physically, morally, etc. Genesis 41: 38-42, Daniel 6:1-3.',
    },
    {
      url: About4,
      text: 'MISSION STATEMENT',
      body:'1. We shall give ourselves to in-depth study of Gods word by the help of the Holy Spirit and to prayer to understand our identity in Christ as peculiar people zealous for good works. 2 Timothy 2:15, 2 Timothy 3:15-17, Acts 17:11, John 8:31-32, Acts 6:4, Ephesians 1:15-23.2. We shall give ourselves to aggressive evangelism and effective follow up with the help of the Holy Spirit to bring as many souls who have gone astray and lost their relevance and peculiarity back to Christ and ensuring that they abide. John 15:16, Mark 16:15, Matthew 28:28-20, 1 Peter 1:12.3. We shall work with the Holy Spirit so that this life of peculiarity finds expression in our daily lives. Romans 8:14, John 14:26.',
    },
    {
      url: About5,
      text: 'Units In The Fellowship',
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





