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
            <ol className="mission-ol">
              <li className="mission-li">
                We would give ourselves daily to the ministry of the word in
                study and meditation for our complete furnishing, to know God’s
                patterns for our living as Christians and we will live a life of
                complete obedience to whatsoever God commands us to do. Joshua
                1:8, James 1:25, Acts 6:4, Genesis 26:3-5, Deuteronomy 28:1-14,
                2 Timothy 2:15; 3:16-17, 1 Timothy 4:13-16, Romans 6:16-20, John
                15:14-15, 1 Peter 2:2.
              </li>
              <li className="mission-li">
                We would as laborers in God’s vineyard be committed to
                evangelism; in preaching the gospel and doing God’s works. John
                15:14-16, 2 Corinthians 5:17-19, Matthew 5:14-16; 28:19-20, Mark
                16:15-20, Acts 10:38, 1 Peter 1:12, 2 Timothy 4:2.{" "}
              </li>
              <li className="mission-li">
                Holiness will be our lifestyle in thoughts, word and actions. 2
                Timothy 2:19-21, 1 Peter 1;14-16, Ephesians 1:4, Philippians
                4:8, 2 Peter 3:13-14, 1 Timothy 4;12, 1 Thessalonians 4:7,
                Romans 6:16-20
              </li>
              <li className="mission-li">
                We would live a consistent prayer and fasting life to be
                spiritually-disciplined, so we would become that man that God
                wants us to be on the earth. Genesis 1:26-28, 1 Thessalonians
                5:17, Acts 2:42; 6:4, James 5:16-18, Colossians 4:2&12, 1
                Corinthians 9:24-27, Romans 12:12, Luke 18:1.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission
