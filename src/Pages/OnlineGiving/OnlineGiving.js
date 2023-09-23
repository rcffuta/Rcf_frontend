import React, { useEffect, useRef } from 'react';
import './OnlineGiving.css';
import Navbar from '../../Component/Navbar/Navbar';
import Footerlogo from "../../Assets/Footerlogo.png"
const OnlineGiving = () => {
  const contentRef = useRef(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Account number copied to clipboard!');
  };

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = contentRef.current;
      const scrollPosition = contentElement.scrollTop;

      contentElement.style.backgroundPositionY = `-${scrollPosition}px`;
    };

    const contentElement = contentRef.current;
    contentElement.addEventListener('scroll', handleScroll);

    return () => {
      contentElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="online-giving-container">
      <Navbar />
      <div className="online-giving-content" ref={contentRef}>
        <div>What would you like to give towards?</div>
        <div className="online-giving-sections">
          <div className="online-giving-section">
            <div className="online-giving-section-flex">
              <h1>Offering & Tithe</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vehicula commodo sed vitae eu ul Lorem ipsum dolor sit amet
                consectetur.
              </p>
            </div>
          </div>
          <div className="online-giving-section">
            <div className="online-giving-section-flex">
              <h1>Church Growth</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vehicula commodo sed vitae eu ul Lorem ipsum dolor sit amet
                consectetur.
              </p>
            </div>
          </div>
          <div className="online-giving-section">
            <div className="online-giving-section-flex">
              <h1>RW’23 Support</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Vehicula commodo sed vitae eu ul Lorem ipsum dolor sit amet
                consectetur.
              </p>
            </div>
          </div>
        </div>
        <div className="bank-details">
          <h2>Bank Details</h2>
          <div className="bank-info">
            <div className="bank-name">First Bank</div>
            <div className="account-number">3041 232 323</div>
            <div className="account-name">The Redeemed Christian Fellowship, FUTA</div>
            <div>Kindly Indicate purpose of transaction in the narrations</div>
            <div className="copy-button" onClick={() => handleCopy('3041 232 323')}>
              Copy
            </div>
          </div>
        </div>
        <div className="online-giving-footer">
          <img className="online-giving-footer-image" src={Footerlogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OnlineGiving;
