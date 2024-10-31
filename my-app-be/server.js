// Import thư viện dotenv để quản lý biến môi trường
require('dotenv').config();

// Import thư viện express để xây dựng ứng dụng web
const express = require('express');

// Import thư viện mysql để kết nối với cơ sở dữ liệu MySQL
const mysql = require('mysql');

// Import thư viện cors để cho phép các yêu cầu từ các nguồn khác nhau
const cors = require('cors');

// Import thư viện bcrypt để mã hóa mật khẩu
const bcrypt = require('bcrypt');

// Tạo một instance của ứng dụng Express
const app = express();

// Cấu hình middleware để xử lý dữ liệu JSON trong các yêu cầu
app.use(express.json());
app.use(cors());

// Tạo kết nối đến cơ sở dữ liệu MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "nhakhoa"
});

// Định nghĩa route cho đăng nhập
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM nguoidung WHERE SDT = ?";

    db.query(sql, [req.body.phone], (err, data) => {
        if (err) return res.status(500).json("Error");

        if (data.length > 0) {
            const isValidPassword = bcrypt.compareSync(req.body.password, data[0].MatKhau);
            if (isValidPassword) {
                // Kiểm tra giá trị TaiKhoan
                const taiKhoanValue = data[0].TaiKhoan;
                if (taiKhoanValue === 2) {
                    return res.status(200).json({ message: "Đăng nhập thành công", redirect: "/admin" });
                } else if (taiKhoanValue === 1) {
                    return res.status(200).json({ message: "Đăng nhập thành công", redirect: "/" });
                }
            } else {
                return res.status(401).json("Mật khẩu không đúng");
            }
        } else {
            return res.status(401).json("Số điện thoại không tồn tại");
        }
    });
});

// Định nghĩa route cho đăng ký
app.post('/register', (req, res) => {
    const { name, phone, address, birthYear, password } = req.body;

    const checkUserSql = "SELECT * FROM nguoidung WHERE SDT = ?";
    db.query(checkUserSql, [phone], (err, data) => {
        if (err) return res.json("Error");

        if (data.length > 0) {
            return res.json("Số điện thoại đã được đăng ký");
        } else {
            const hashedPassword = bcrypt.hashSync(password, 10);
            const sql = "INSERT INTO nguoidung (Ten, SDT, DiaChi, NamSinh, MatKhau, TaiKhoan) VALUES (?, ?, ?, ?, ?, CURRENT_DATE, 1)";
            db.query(sql, [name, phone, address, birthYear, hashedPassword], (err, result) => {
                if (err) return res.json("Error");
                return res.json("Đăng ký thành công");
            });
        }
    });
});

// Khởi động server và lắng nghe các yêu cầu trên cổng 8080
app.listen(8080, () => {
    console.log("Listening...");
});
