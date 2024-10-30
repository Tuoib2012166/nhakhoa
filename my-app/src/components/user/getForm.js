import '../../assets/css/login.css';
import React, { useState } from 'react';

const GetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    gender: '',
    birthYear: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gửi thành công: ${JSON.stringify(formData)}`);
    setFormData({
      name: '',
      phone: '',
      address: '',
      gender: '',
      birthYear: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Đặt lịch ngay</h2>
      <div className="form-container">
        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Họ và tên:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="phone">Số điện thoại:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <label htmlFor="address">Địa chỉ:</label>
          <input
            type="text"
            id="address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />

          <div className="gender-container">
            <label>Giới tính:</label>
            <div className="gender-options">
              <label className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={formData.gender === 'male'}
                />
                <span className="custom-radio"></span> Nam
              </label>
              <label className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender === 'female'}
                />
                <span className="custom-radio"></span> Nữ
              </label>
            </div>
          </div>

          <label htmlFor="birthYear">Năm sinh:</label>
          <input
            type="number"
            id="birthYear"
            name="birthYear"
            required
            value={formData.birthYear}
            onChange={handleChange}
            placeholder="YYYY"
            min="1900"
            max="2023"
            style={{ width: '200px' }} // Đảm bảo ô năm sinh không bị ảnh hưởng CSS
          />

          <label htmlFor="message">Nội dung:</label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="submit-button">Gửi</button>
        </form>
      </div>
    </section>
  );
};

export default GetForm;
