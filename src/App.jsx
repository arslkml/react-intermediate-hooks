import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import List from './components/List/List';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <div>
        <div className={''}>
          <Navbar />
        </div>
        <div className={'max-w-xl my-10 mx-auto p-5'}>
          <AboutMe />  
        </div>
        <Home />
        <Footer />
      </div>
    </>
  );
}
 
export default App;
