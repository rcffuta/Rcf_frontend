import React, { useState, useEffect } from 'react';
import About1 from '../../Assets/About1.png';
import About2 from '../../Assets/About2.png';
import About3 from '../../Assets/About3.png';
import About4 from '../../Assets/About4.png';
import About5 from '../../Assets/About5.png';
import "./AboutUs.css"
import Footer from '../Footer/Footer';

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const images = [
    {
      url: About1,
      text: 'Who We Are',
      body: 'We are a peculiar generation purified and zealous unto God. A fellowship of brothers and sisters, established in faith, and growing daily unto the stature of Christ. We are dispensers of His realities, strengthened by Christ to fulfill our purpose in God and on campus.',
    },
    {
      url: About2,
      text: 'History Of The Fellowship',
      body: 'The Redeemed Christian Fellowship, FUTA was founded in 1989 by... It started as a...',
    },
    {
      url: About3,
      text: 'VISION STATEMENT',
      body: [
        {
          sectionNumber: 1,
          sectionContent: 'The Redeemed Christian Fellowship, FUTA was founded in 1989 by...'
        },
        {
          sectionNumber: 2,
          sectionContent: 'It started as a...'
        },
      ],
    },
    {
      url: About4,
      text: 'MISSION STATEMENT',
      body: 'We would give ourselves daily to the ministry of the word in study and meditation for our complete furnishing, to know God’s patterns for our living as Christians and we will live a life of complete obedience to whatsoever God commands us to do...',
    },
    {
      url: About5,
      text: 'Units In The Fellowship',
      body: 'We are a peculiar generation, God’s own people— a fellowship of young people expressing themselves in Christ',
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
            <img src={image.url} alt={image.text} />
            <div className="slide-text">
              <h2 className='image-text'>{image.text}</h2>
              {Array.isArray(image.body) ? (
                image.body.map((section, i) => (
                  <div key={i}>
                    <p>{section.sectionContent}</p>
                  </div>
                ))
              ) : (
                <div className='image-body'>{image.body}</div>
              )}
            </div>
            <Footer />
          </div>
        ))}
      </div>
      <div className="dots-container">{renderDots()}</div>
    </div>
  );
};

export default AboutUs;
