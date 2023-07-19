import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Inicio from './Pages/Inicio/Inicio';


import './App.css'


function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
         </Routes>
        </Router>
    </>
  )
}

export default App