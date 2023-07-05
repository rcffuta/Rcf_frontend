import React from 'react'
 import Navbar from '../../Component/Navbar/Navbar'
import "./Vision.css"

const Vision = () => {
  return (
    <div className='vision'>
      <Navbar />
      <div className='contents'>
        <div className='header'><h1>VISION STATEMENT</h1></div>
        <br></br>
        <div className='texts'>
          <p>1. To raise men and women who will stand out for Christ, 
            to live righteously and Godly as peculiar beings in this present generation. 
            2 Corinthians 6:17-18; Daniel 1:38 Genesis 39: 5-9; Tituss 2:1-2.</p>

          <p>2. To see as many who has gone astray in this perverse generation brought 
          back to the life of peculiarity they already have in Christ Jesus. 1 Peter 2:9, Matthew 5:13-16, Galatians 1:15-24.</p>

          <p>3. To see that children of God express peculiarity in all spheres of their lives 
            (spiritually, academically, financially, socially, physically, morally) etc. Genesis 41: 38-42, Daniel 6:1-3.</p>
        </div>
      </div>
    </div>
  )
}

export default Vision