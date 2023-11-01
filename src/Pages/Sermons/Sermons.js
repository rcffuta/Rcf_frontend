import React from 'react'
import "./Sermons.css"
import sermonBg from '../../Assets/sermons.png'
import Navbar from '../../Component/Navbar/Navbar'
import HeadsetIcon from '@mui/icons-material/Headset';
import CloudDownloadIcon from '@mui/icons-material/CloudDownloadOutlined';
import EastIcon from '@mui/icons-material/East';
import NewSermon from './sermon';
const Sermons = () => {
  return (
    <>
    <Navbar />
    <div>
    {/* <img src={sermonBg} alt="" /> */}
    <NewSermon/>
    </div>
    {/* <div className='sermon-container'> */}
      {/* <img src={sermonBg} alt="" /> */}
      
      {/* <div className="sermon-text">
        <div className="sermon-text-conatiner">
          <div className="text-left">
            <p className="date">June 28,2023</p>
            <h1>Epignosis</h1>
            <p className="preacher">Pst Sam Neye</p>
            <div className="sermon-icon">
              <HeadsetIcon/>
              <CloudDownloadIcon />
            </div>
          </div>
          <div className="text-right">
            <span className="more-message">
              <p>more sermons</p>
              <p>view all</p>
            </span>
            <table>
              <tr>
                <p className="date-posted">June 28, 2023</p>
                <div>
                  <p className="message-title">Throughly furnished</p>
                  <EastIcon/>
                </div>
                <hr />
              </tr>
              <tr>
                <p className="date-posted">June 28, 2023</p>
                <div>
                  <p className="message-title">Throughly furnished</p>
                  <EastIcon/>
                </div>
                <hr />
              </tr>
              <tr>
                <p className="date-posted">June 28, 2023</p>
                <div>
                  <p className="message-title">Throughly furnished</p>
                  <EastIcon/>
                </div>
                <hr />
              </tr>
              <tr>
                <p className="date-posted">June 28, 2023</p>
                <div>
                  <p className="message-title">Throughly furnished</p>
                  <EastIcon/>
                </div>
                <hr />
              </tr>
              <tr>
                <p className="date-posted">June 28, 2023</p>
                <div>
                  <p className="message-title">Throughly furnished</p>
                  <EastIcon/>
                </div>
                <hr />
              </tr>
            </table>
          </div>
        </div>
      </div> */}
    {/* </div> */}
  </>

  )
}

export default Sermons

