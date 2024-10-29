import React from "react";
import '../../assets/css/sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <h3>Bài Viết Dịch Vụ</h3>
                <ul>
                    <li>Nắn răng - Chỉnh nha</li>
                    <li>Cấy ghép Implant</li>
                    <li>Bọc răng sứ</li>
                    <li>Dán sứ veneer</li>
                    <li>Cười hở lợi</li>
                    <li>Nhổ răng khôn</li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3>Đội Ngũ Bác Sĩ</h3>
                <img src="img/sidebar/doctor-sb.png" alt="Đội ngũ bác sĩ" className="sidebar-image" />
            </div>
            <div className="sidebar-section">
                <h3>Thông Tin Ưu Đãi</h3>
                <img src="img/doctor/doctor1.png" alt="Thông tin ưu đãi" className="sidebar-image" />
            </div>
            <div className="sidebar-section">
                <h3>Nha Khoa Hiện Đại</h3>
                <ul>
                    <li>Nhổ răng</li>
                    <li>Điều trị tủy</li>
                    <li>Trám - Hàn răng</li>
                    <li>Cắt lợi</li>
                    <li>Tẩy trắng răng</li>
                    <li>Cạo vôi răng</li>
                </ul>
            </div>
            <div className="sidebar-section">
                <h3>Hệ Thống Chi Nhánh</h3>
                <ul className="branch-info">
                    <li>Hà Nội: Thanh Xuân - Cầu Giấy - Hai Bà Trưng</li>
                    <li>TP. Hồ Chí Minh: Quận 10 - Bình Thạnh</li>
                    <li>Thành phố Lào Cai</li>
                </ul>
                <div className="contact-info">
                    <p>Hotline 24/7: 0123456789</p>
                    <p>Đăng ký: 0123456789</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
