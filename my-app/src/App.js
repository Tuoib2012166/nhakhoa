import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/user/header';
import Homepage from './components/user/homepage';
import Footer from './components/user/footer';
import Login from './components/user/login'; // Nhớ import Login
import Register from './components/user/register'; // Nhớ import Register



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />   
          {/* Thêm các route khác nếu cần */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
