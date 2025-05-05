const express = require('express');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

const users = [
  { id: 1, username: 'admin', password: 'admin123' },
];

// Login route (generates token)
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route
router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the protected dashboard', user: req.user });
});

module.exports = router;
