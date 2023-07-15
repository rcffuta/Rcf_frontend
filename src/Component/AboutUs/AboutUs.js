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
      body:'To raise men who would be complete examples of God’s mind and be templates for others to follow. 1 Timothy 4:11-12, Titus 2:6-8, 2 Thessalonians 3:6-9.That every member of the church be thoroughly equipped for the master’s use amd fruitful in every good works in accordance with the ministry of reconciliation. 2 Timothy 2:19-21; 3:16-17, 2 Corinthians 4:1-2; 6:3-10, Colossians 1:9-10To raise mature disciples who will be able to teach others the ways of God, who will not be deceived by fables and false doctrines. Ephesians 4:13-14, Hebrews 5:11-14, Colossians 2:6-8, Matthew 28:19-20',
    },
    {
      url: About4,
      text: 'MISSION STATEMENT',
      body:' We would give ourselves daily to the ministry of the word in study and meditation for our complete furnishing, to know God’s patterns for our living as Christians and we will live a life of complete obedience to whatsoever God commands us to do. Joshua 1:8, James 1:25, Acts 6:4, Genesis 26:3-5, Deuteronomy 28:1-14, 2 Timothy 2:15; 3:16-17, 1 Timothy 4:13-16, Romans 6:16-20, John 15:14-15, 1 Peter 2:2. We would as laborers in God’s vineyard be committed to evangelism; in preaching the gospel and doing God’s works. John 15:14-16, 2 Corinthians 5:17-19, Matthew 5:14-16; 28:19-20, Mark 16:15-20, Acts 10:38, 1 Peter 1:12, 2 Timothy 4:2.Holiness will be our lifestyle in thoughts, word and actions. 2 Timothy 2:19-21, 1 Peter 1;14-16, Ephesians 1:4, Philippians 4:8, 2 Peter 3:13-14, 1 Timothy 4;12, 1 Thessalonians 4:7, Romans 6:16-20 We would live a consistent prayer and fasting life to be spiritually-disciplined, so we would  become that man that God wants us to be on the earth. Genesis 1:26-28, 1 Thessalonians 5:17, Acts 2:42; 6:4, James 5:16-18, Colossians 4:2&12, 1 Corinthians 9:24-27, Romans 12:12, Luke 18:1.',
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
              <h2 className='image-text'>{image.text}</h2>
              <div className='image-body'>{image.body}</div>
            </div>
            <Footer/>
          </div>
        ))}
      </div>
      <div className="dots-container">{renderDots()}</div>
    </div>
  );
};

export default AboutUs;





