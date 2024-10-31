import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../../assets/css/login.css';
import axios from 'axios'

function Login() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8081/login', {phone, password})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  return (
    <>
    <Header/>
    <section id="login">
      <div className="logo-container">
        <img src="img/logo.png" alt="Logo" />
      </div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit} action="submit-login.html" method="POST">
        <label htmlFor="phone">Số điện thoại:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required  onChange={e => setPhone(e.target.value)}/>

        <label htmlFor="password">Mật khẩu:</label>
        <input type="password" id="password" name="password" required onChange={e => setPassword(e.target.value)}/>

        <button type="submit">Đăng nhập</button>
      </form>
      <p>Bạn chưa có tài khoản? <a href="register.html">Đăng ký ngay</a></p>
    </section>
    <Footer />
    </>
  );
}

export default Login;
