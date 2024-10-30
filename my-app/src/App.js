import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/user/header';
import Homepage from './components/user/homepage';
import Footer from './components/user/footer';
import Login from './components/user/login';
import Register from './components/user/register'; 
import Pricelist from './components/user/priceList';
import Braces from './components/user/braces';
import TopScroll from './components/user/topScroll';
import QuickActions from './components/user/quickActions';




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />   
          <Route path="/braces" element={<Braces />} />  
          <Route path="/priceList" element={<Pricelist />} />
           
        </Routes>
        <QuickActions/>
        <TopScroll />
      </div>
    </Router>
  );
}

export default App;
