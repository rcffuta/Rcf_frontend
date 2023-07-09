import React from 'react';
import Arrow from "../../../Assets/Arrow.svg";
import EastIcon from '@mui/icons-material/East';
import "./Slide2.css";

const Slide2 = () => {
  return (
    <div className='Slide2'>
      <div>
        <span className='Slide2_text'>A place where good things never cease!</span><br/>
        <div className='Slide2_flex'>
          <span className='Slide2_body'>
            The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning;
            <span className='Slide2_faithfulness'> great is your faithfulness. </span>
          </span>
          <span className='Slide2_arrow'><EastIcon fontSize='small' className='Arrow'/></span>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
