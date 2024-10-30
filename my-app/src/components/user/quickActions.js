import React, { useState } from 'react';
import '../../assets/css/quickActions.css';
import GetForm from './getForm';

const QuickActions = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // State để kiểm soát hiển thị form

  const handleAppointmentClick = () => {
    setIsFormVisible(true); // Hiển thị form khi nhấn nút
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Ẩn form khi nhấn nút đóng
  };

  return (
    <div className="fixed-panel">
      <button className="appointment-button" onClick={handleAppointmentClick}>
        <i className="fas fa-calendar-alt"></i>
      </button>
      <button className="message-button">
        <i className="fas fa-comment"></i>
      </button>

      {isFormVisible && (
        <div className="form-overlay"> {/* Phần nền đen phía sau form */}
          <div className="form-popup"> {/* Form nổi */}
            <button className="close-button" onClick={handleCloseForm}>
              &times; {/* Dấu x để đóng form */}
            </button>
            <GetForm /> {/* Hiển thị form */}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickActions;
