import React, { useState } from 'react';
import './Excos.css';
import Navbar from '../../Component/Navbar/Navbar';
import backgroundImage from '../../Assets/Excos.png';

const Excos = () => {
  const [startIndex, setStartIndex] = useState(0); // Index of the first visible image
  const numVisibleBoxes = 5; // Number of visible boxes at a time
  const totalImages = 50; // Total number of images
  const boxHeightPercentage = 16; // Height of each box as a percentage of the screen height
  const arrowHeightPercentage = 2; // Height of each arrow as a percentage of the screen height
  const boxSpacingPercentage = 2; // Spacing between boxes as a percentage of the screen height

  const handleScroll = (direction) => {
    if (direction === 'up') {
      setStartIndex((prevStartIndex) => Math.max(prevStartIndex - 1, 0));
    } else if (direction === 'down') {
      setStartIndex((prevStartIndex) => Math.min(prevStartIndex + 1, totalImages - numVisibleBoxes));
    }
  };

  // Example image URLs for the 5 visible boxes
  const visibleImages = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image5.jpg',
  ];

  return (
    <div className="excos-container">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <Navbar />
      <div className="image-scroll">
        <div className="left-arrow" onClick={() => handleScroll('up')} style={{ height: `${arrowHeightPercentage}%` }}>
          &lt;
        </div>
        <div className="image-container" style={{ height: `${100 - 2 * arrowHeightPercentage}%` }}>
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="image-box"
              style={{
                height: `${boxHeightPercentage}%`,
                marginBottom: `${boxSpacingPercentage}%`,
              }}
            >
              <img
                className={`image`}
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="right-arrow" onClick={() => handleScroll('down')} style={{ height: `${arrowHeightPercentage}%` }}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Excos;
