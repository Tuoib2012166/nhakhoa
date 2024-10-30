import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import Banner from './banner';
import MainContent from './mainContent';
import Footer from './footer';

function Homepage() {
  return (
      <div className="App">
        <Header />
        <Banner/>
        <MainContent/>
        <Footer />
      </div>
  
  );
}

export default Homepage;
