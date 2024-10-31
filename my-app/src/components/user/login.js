import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../../assets/css/login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Admin from '../admin/admin';

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8080/login', { phone, password })
      .then(res => {
        if (res.status === 200) {
          setMessage(res.data); // Hiển thị thông báo đăng nhập thành công
          setTimeout(() => {
            navigate('/admin'); // Chuyển hướng đến trang admin sau 1 giây
          }, 1000); // Thay đổi thời gian thành 1000ms
        }
      })
      .catch(err => {
        if (err.response) {
          setMessage(err.response.data); // Hiển thị thông báo từ server
        } else {
          setMessage("Có lỗi xảy ra. Vui lòng thử lại!"); // Thông báo lỗi chung
        }
        // Tắt thông báo sau 1 giây
        setTimeout(() => {
          setMessage('');
        }, 3000); // Thay đổi thời gian thành 1000ms
      });
  }

  return (
    <>
      <Header />
      <section id="login">
        <div className="logo-container">
          <img src="img/logo.png" alt="Logo" />
        </div>
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone">Số điện thoại:</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            pattern="[0-9]{10}" 
            required 
            onChange={e => setPhone(e.target.value)} 
          />

          <label htmlFor="password">Mật khẩu:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            onChange={e => setPassword(e.target.value)} 
          />

          <button type="submit">Đăng nhập</button>
        </form>
        {message && (
          <div className="message-box">
            {message}
          </div>
        )}
        <p>Bạn chưa có tài khoản? <a href="/register">Đăng ký ngay</a></p>
      </section>
      <Footer />
    </>
  );
}

export default Login;
