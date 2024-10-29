const express = require('express');
const db = require('../config/db');
const router = express.Router();

// @route   GET api/users
// @desc    Get all users
router.get('/', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.json(results);
    });
});

// @route   POST api/users
// @desc    Create a user
router.post('/', (req, res) => {
    const { name, email } = req.body;
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
        if (err) {
            return res.status(400).json({ message: err.message });
        }
        res.status(201).json({ id: results.insertId, name, email });
    });
});

module.exports = router;
