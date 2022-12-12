import React from 'react'
import LoginPage from './Project/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import HomePage from './Project/HomePage';
import PageOne from './Project/PageOne'
import './App.css'


function App() {
 

  return (
    <div ><BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/PageOne" element={<PageOne/>}/>
      </Routes>
      </BrowserRouter></div>
  )
}

export default App