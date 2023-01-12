// import React from 'react';
import React, { useEffect } from 'react';
import './App.css';
import BackGround from './backGround';
import Footer from './footer';
import NavBar from './navBar.js';
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ContactsPage from './ContactsPage';
import VideoSlider from './VideoSlider';
import AboutPage from './AboutPage';
import NavBar2 from './nav2';






function App() {
  useEffect(()=>{
    document.querySelector('title').innerHTML = "Ghana Righteous Stars"
},[])
  return (
    <>
    
     <Router>
      <Routes>
      <Route path="/" element= {<BackGround/>}  />
        <Route path='/VideoSlider' element= {<VideoSlider/>}  />
        <Route path='/AboutPage' element= {<AboutPage/>}  />
        <Route path='/ContactsPage' element= {<ContactsPage/>}  />
      </Routes> 
    </Router>
    <Footer/> 

  </>
  );
}

export default App;
