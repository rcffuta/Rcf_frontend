import Navbar from "../Navbar/Navbar"
import "./mission.css"

const Mission = () => {
  return (
    <div>
      <div className="mission-body">
        <div>
          <Navbar />
        </div>
        <div className="mission-content">
          <h1 className="header">MISSION STATEMENT</h1>
          <div className="mission-statement">
            1. We shall give ourselves to in-depth study of God's word by the
            help of the Holy Spirit and to prayer to understand our identity in
            Christ as peculiar people zealous for good works. 2 Timothy 2:15, 2
            Timothy 3:15-17, Acts 17:11, John 8:31-32, Acts 6:4, Ephesians
            1:15-23. 2. We shall give ourselves to aggressive evangelism and
            effective follow up with the help of the Holy Spirit to bring as
            many souls who have gone astray and lost their relevance and
            peculiarity back to Christ and ensuring that they abide. John 15:16,
            Mark 16:15, Matthew 28:28-20, 1 Peter 1:12. 3. We shall work with
            the Holy Spirit so that this life of peculiarity finds expression in
            our daily lives. Romans 8:14, John 14:26.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
