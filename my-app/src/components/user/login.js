import React from 'react';
import Header from './header';
import Footer from './footer';
import '../../assets/css/login.css';

function Login() {
  return (
    <>
    <Header/>
    <section id="login">
      <div className="logo-container">
        <img src="img/logo.png" alt="Logo" />
      </div>
      <h2>Đăng nhập</h2>
      <form action="submit-login.html" method="POST">
        <label htmlFor="phone">Số điện thoại:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />

        <label htmlFor="password">Mật khẩu:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Đăng nhập</button>
      </form>
      <p>Bạn chưa có tài khoản? <a href="register.html">Đăng ký ngay</a></p>
    </section>
    <Footer />
    </>
  );
}

export default Login;
