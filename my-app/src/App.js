import React, { useEffect } from 'react';
import axios from "axios";
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
import News from './components/user/news';
import NewsImplant from './components/user/newsImplant';


function App() {
  // useEffect(() => {
  //   const fetchHelloWorld = async () => {
  //     const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/api/`);
  //     // const res = await axios.get(`http://localhost:8080/v1/api`);
  //     console.log(">>> check res: ",res)
  //   }

  //   fetchHelloWorld()
  // }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />   
          <Route path="/braces" element={<Braces />} />  
          <Route path="/priceList" element={<Pricelist />} />
          <Route path="/news" element={<News />} />
          <Route path="/newsImplant" element={<NewsImplant />} />
        </Routes>
        <QuickActions/>
        <TopScroll />
      </div>
    </Router>
  );
}

export default App;
