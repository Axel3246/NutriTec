import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Inicio from './Pages/Inicio/Inicio';
import RestaurantCardGrid from './Pages/Comunidad/RestaurantCardGrid';

import './App.css'


function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/comunidad" element={<RestaurantCardGrid/>}/>
         </Routes>
        </Router>
    </>
  )
}

export default App
