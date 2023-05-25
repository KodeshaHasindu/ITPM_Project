import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import MovieDetails from './pages/PostDetails/MovieDetails';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/footer/Footer';
import './app.scss'

const App = () => {

  return (
    <BrowserRouter>
      <div className='nav'> 
        <Navbar />
      </div>
        <Routes>
          <Route path="/" exact element={ <Navigate to="/movies" />} />
          <Route path="/movies" exact element={<Home/>} />
          <Route path="/movies/search" exact element={<Home/>} />
          <Route path="/movies/:id" exact element={<MovieDetails/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
        </Routes>
        <Footer className='footer'/>
    </BrowserRouter>
  );
};



export default App;