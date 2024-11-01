import '../../assets/css/login.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    gender: '',
    birthYear: '',
    message: '',
    appointmentDate: '',
    appointmentTime: '',
    doctor: '',
  });

  const [doctors, setDoctors] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/doctors');
        setDoctors(response.data);
        // toast.success('Doctors fetched successfully', { autoClose: 3000 });
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    if (isFirstRender.current) {
      fetchDoctors();
      isFirstRender.current = false;
    }
  }, []); // Empty dependency array ensures this runs only once

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/appointment', formData);
      if (response.status === 200) {
        toast.success('Bạn đã đặt lịch khám thành công! Vui lòng tới trung tâm đúng ngày và giờ hẹn!', { autoClose: 3000 });
        setFormData({
          name: '',
          phone: '',
          address: '',
          gender: '',
          birthYear: '',
          message: '',
          appointmentDate: '',
          appointmentTime: '',
          doctor: '',
        });
      } else {
        toast.error('Failed to submit form', { autoClose: 3000 });
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form', { autoClose: 3000 });
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Đặt lịch ngay</h2>
      <div className="form-container">
        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="fullname">Họ và tên:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            value={formData.fullname}
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
                  value="1"
                  onChange={handleChange}
                  checked={formData.gender === '1'}
                />
                <span className="custom-radio"></span> Nam
              </label>
              <label className="gender-option">
                <input
                  type="radio"
                  name="gender"
                  value="0"
                  onChange={handleChange}
                  checked={formData.gender === '0'}
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

          <label htmlFor="appointmentDate">Ngày hẹn:</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            required
            value={formData.appointmentDate}
            onChange={handleChange}
          />

          <label htmlFor="appointmentTime">Giờ hẹn:</label>
          <input
            type="time"
            id="appointmentTime"
            name="appointmentTime"
            required
            value={formData.appointmentTime}
            onChange={handleChange}
          />

          <label htmlFor="doctor">Chọn bác sĩ:</label>
          <select
            id="doctor"
            name="doctor"
            required
            value={formData.doctor}
            onChange={handleChange}
          >
            <option value="">Chọn bác sĩ</option>
            {doctors.map((doctor) => (
              <option value={doctor.id} key={doctor.id}>
                {doctor.fullname} - {doctor.specialty}
              </option>
            ))}
          </select>

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
