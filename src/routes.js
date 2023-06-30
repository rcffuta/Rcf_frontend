import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Excos from './Pages/Excos/Excos';
import Sermons from './Pages/Sermons/Sermons';
import AboutUs from './Pages/AboutUs/AboutUs';

const routes = () => {
  return (
    <div>
        <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route index path="/blog" element={<Blog />}></Route>
        <Route index path="/excos" element={<Excos />}></Route>
        <Route index path="/sermons" element={<Sermons />}></Route>
        <Route index path="/about" element={<AboutUs/>}></Route>
        </Routes>
    </div>
  )
}

export default routes