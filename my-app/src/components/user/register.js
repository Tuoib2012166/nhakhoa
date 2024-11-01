import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import '../../assets/css/login.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    phone: '',
    address: '',
    gender: 1,
    birthYear: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Để xác định loại thông báo

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi yêu cầu đăng ký đến server
    fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setMessage(data); // Cập nhật thông báo
        setIsSuccess(true); // Xác định thông báo thành công hay thất bại
        setTimeout(() => {
          setMessage(''); // Tắt thông báo sau 1 giây
        }, 3000);
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('Có lỗi xảy ra. Vui lòng thử lại.');
        setIsSuccess(false);
        setTimeout(() => {
          setMessage(''); // Tắt thông báo sau 1 giây
        }, 3000);
      });
  };

  return (
    <>
      <Header />
      <section id="login">
        <div className="logo-container">
          <img src="img/logo.png" alt="Logo" />
        </div>
        <h2>Đăng ký tài khoản</h2>
        {message && (
          <div className={`message-box ${isSuccess ? 'success' : 'error'}`}>
            {message}
          </div>
        )} {/* Hiển thị thông báo */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Tài khoản:</label>
          <input
            type="text"
            id="name"
            name="username"
            required
            placeholder="Nhập tài khoản"
            value={formData.username}
            onChange={handleChange}
          />

          <label htmlFor="name">Họ và tên:</label>
          <input
            type="text"
            id="name"
            name="fullname"
            required
            placeholder="Nhập họ và tên"
            value={formData.fullname}
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

          <label htmlFor="address">Địa chỉ:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            placeholder="Nhập địa chỉ"
            value={formData.address}
            onChange={handleChange}
          />

          <label>Giới tính:</label>
          <div className="gender-options">
            <label className="gender-option">
              <input type="radio" name="gender" value="1" onChange={handleChange} checked/>
              <span className="custom-radio"></span> Nam
            </label>
            <label className="gender-option">
              <input type="radio" name="gender" value="0" onChange={handleChange} />
              <span className="custom-radio"></span> Nữ
            </label>
          </div>

          <label htmlFor="birthYear">Năm sinh:</label>
          <input
            type="number"
            id="birthYear"
            name="birthYear"
            required
            placeholder="Nhập năm sinh"
            value={formData.birthYear}
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

          <button type="submit">Đăng ký</button>
        </form>
        <p className="redirect">
          Đã có tài khoản? <a href="/login">Đăng nhập ngay</a>
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Register;
