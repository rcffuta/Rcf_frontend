import React, { useState, useEffect, useRef } from 'react';
import './OnlineGiving.css';
import ClipboardJS from 'clipboard';
import Navbar from '../../Component/Navbar/Navbar';
import Footerlogo from "../../Assets/Footerlogo.png"
import OnlineGivingHeader from './onlineGivingHeader.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OnlineGiving = () => {
  const contentRef = useRef(null);
  function handleCopy(textToCopy) {
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
  
    document.body.appendChild(textArea);

    textArea.select();
  
    try {
      document.execCommand('copy');
      toast.success('Account number copied');
    } catch (err) {
      console.error('Unable to copy', err);
      toast.error('Failed to copy account number');
    }
  
    document.body.removeChild(textArea);
  }
  

  return (
    <div className="online-giving-container">
      <Navbar />
      <OnlineGivingHeader />
      <div className="online-giving-content" ref={contentRef}>
        <div style={{textAlign: 'center'}}>What would you like to give towards?</div>
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

        
        <div className="relative mx-8 flex justify-center items-center max-w-2xl gap-x-32 gap-y-14 xl:max-w-none">
          <div className='row '>  
            <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
              Bank Details
            </p>
            <p className="font-display text-2xl font-medium tracking-tighter text-blue-900 sm:text-2xl py-4">
              First Bank
            </p>
            <p>3041 232 323</p>
            <p className="mt-4 text-lg tracking-tight text-blue-900">
            The Redeemed Christian Fellowship, FUTA
            </p>
            <p className="mt-2 my-2 tracking-tight text-red-900 text-xs">
            Kindly Indicate purpose of transaction in the narrations
            </p>
          </div>
          <ToastContainer />
          <div className='row justify-center items-center'>
            <div className="copy-button" onClick={() => handleCopy('3041 232 323')}>
              {/* <ClipboardDocumentListIcon className="-ml-1.5 h-5 w-5 mx-1" aria-hidden="true" />  */}
                <button>
                  Copy
                </button>
              </div>
          </div>
        

          {/* <h2></h2> */}
          {/* <div className="bank-info">
            <div className="bank-name">First Bank</div>
            <div className="account-number">3041 232 323</div>
            <div className="account-name">The Redeemed Christian Fellowship, FUTA</div>
            <div>Kindly Indicate purpose of transaction in the narrations</div>
            <div className="copy-button" onClick={() => handleCopy('3041 232 323')}>
              Copy
            </div>
          </div> */}
        </div>
       
        <div className="online-giving-footer">
          <img className="online-giving-footer-image" src={Footerlogo} alt="" />
          <div>
          <p className='text-white'>A place where good things never cease</p>
          </div>
        </div>
        
      </div>
    </div>
    
  );
};

export default OnlineGiving;