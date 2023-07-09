import React from 'react'
import Arrow from "../../../Assets/Arrow.svg"
import EastIcon from '@mui/icons-material/East';
import "./Slide2.css"

const Slide2 = () => {
  return (
    <div className='Slide2'>
      <div className='Slide2_text'>
      <p>A place where good things never cease!</p>
      </div>
      <div className='Slide2_body'>
        <p>The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.</p>
       <EastIcon className='Arrow'/>
      </div>
        
    </div>
  )
}

export default Slide2;