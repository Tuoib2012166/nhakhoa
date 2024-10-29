
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../assets/css/header.css';

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/"> 
          <img src="img/logo.png" alt="Phòng Khám Nha Khoa Logo" />
        </Link>
      </div>
      <nav className="main-menu">
        <ul>
          <li className="dropdown">
            <a href="#">Dịch vụ &#9662;</a>
            <ul className="dropdown-content">
              <li><Link to="/braces">Niềng Răng</Link></li> 
              <li><Link to="/trong-rang-implant">Trồng răng Implant</Link></li>
              <li><Link to="/rang-su-tham-my">Răng sứ thẩm mỹ</Link></li>
              <li><Link to="/nha-khoa-tong-quat">Nha khoa tổng quát</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#">Bảng giá &#9662;</a>
            <ul className="dropdown-content">
              <li><Link to="/sanpham">Sản phẩm</Link></li>
              <li><Link to="/priceList">Bảng giá chi tiết các dịch vụ</Link></li>
            </ul>
          </li>
          <li><Link to="/thong-tin-khach-hang">Thông tin khách hàng</Link></li>
          <li className="dropdown">
            <a href="#">Kiến thức nha khoa &#9662;</a>
            <ul className="dropdown-content">
              <li><Link to="/kien-thuc-nieng-rang">Kiến thức niềng răng</Link></li>
              <li><Link to="/kien-thuc-cay-ghep">Kiến thức cấy ghép</Link></li>
            </ul>
          </li>
          <li><Link to="/gio-hang">Giỏ hàng</Link></li>
          <li><Link to="/login">Đăng nhập</Link></li>
          <li><Link to="/register">Đăng ký</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
