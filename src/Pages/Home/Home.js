import React from 'react'
import "./Home.css"
import Navbar from '../../Component/Navbar/Navbar'

import Footer from '../../Component/Footer/Footer'
import Slide from '../../Component/Slide/Slide'


const Home = () => {
  return (
    <div className='Home'>
       
      <Navbar/>
      <Slide/>
      
   
    </div>
  )
}

export default Home