import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../../assets/css/login.css';


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic xử lý đăng ký
    console.log('Đăng ký với dữ liệu:', formData);
  };

  return (
    <>
    <Header/>
    <section id="login">
      <div className="logo-container">
        <img src="img/logo.png" alt="Logo" />
      </div>
      <h2>Đăng ký tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Họ và tên:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Nhập họ và tên"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="phone">Số điện thoại:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="Nhập số điện thoại"
          value={formData.phone}
          onChange={handleChange}
        />

        <label htmlFor="password">Mật khẩu:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Nhập mật khẩu"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="confirm-password">Xác nhận mật khẩu:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          required
          placeholder="Xác nhận mật khẩu"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button type="submit" name="btn-reg">Đăng ký</button>
      </form>
      <p>Bạn đã có tài khoản? <a href="login.html">Đăng nhập</a></p>
    </section>
    <Footer />
    </>
  );
}

export default Register;