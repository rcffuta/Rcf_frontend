import React from 'react'
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Excos from './Pages/Excos/Excos';
import Sermons from './Pages/Sermons/Sermons';
import AboutUs from './Pages/AboutUs/AboutUs';
import OnlineGiving from './Pages/OnlineGiving/OnlineGiving';



const RouteFile = () => {
  return (
    <div>
<Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/excos" element={<Excos />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/online_giving" element={<OnlineGiving />} />
  </Routes>
    </div>
  )
}

export default RouteFile