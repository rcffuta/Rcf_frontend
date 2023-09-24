import React from 'react'
import "./Sermons.css"
import sermonBg from '../../Assets/sermons.png'
import Navbar from '../../Component/Navbar/Navbar'

const Sermons = () => {
  return (
    <>
      <Navbar />
      <div className='sermon-container'>
        <img src={sermonBg} alt="" />
        <div className="sermon-text">
          <div className="sermon-text-conatiner">
            <div className="text-left">
              <p className="date">June 28,2023</p>
              <h1>Epignosis</h1>
              <p className="preacher">Pst Sam Neye</p>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Sermons