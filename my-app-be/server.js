const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Cấu hình kết nối cơ sở dữ liệu MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb"
});

// API login
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE sdt = ? AND password = ?";

    db.query(sql, [req.body.phone, req.body.password], (err, data) => {
        if (err) return res.json("Error");
        if (data.length > 0) {
            return res.json("Login Successfully");
        } else {
            return res.json("Login Not Successfully");
        }
    });
});

// Lắng nghe cổng 8081
app.listen(8081, () => {
    console.log("Listening on port 8081...");
});
