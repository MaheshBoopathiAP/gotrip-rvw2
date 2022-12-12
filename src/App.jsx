import React from 'react'
import LoginPage from './Project/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import HomePage from './Project/HomePage';
import PageOne from './Project/PageOne'
import './App.css'
import Support from './Project/Support';
import AboutUs from './Project/AboutUs';
import PageTwo from './Project/PageTwo';
import PageThree from './Project/PageThree';
import PageFour from './Project/PageFour';
import PageFive from './Project/PageFive';
import PageSix from './Project/PageSix';


function App() {
 

  return (
    <div ><BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="/PageOne" element={<PageOne/>}/>
      <Route path="/PageTwo" element={<PageTwo/>}/>
      <Route path="/PageThree" element={<PageThree/>}/>
      <Route path="/PageFour" element={<PageFour/>}/>
      <Route path="/PageFive" element={<PageFive/>}/>
      <Route path="/PageSix" element={<PageSix/>}/>
      </Routes>
      </BrowserRouter></div>
  )
}

export default App