# 🔐 Express.js API Authentication with JWT – Mini Example

This guide demonstrates how to implement token-based authentication using **JWT (JSON Web Tokens)** in an **Express.js** application. Follow the steps below to set up a secure API authentication system.

---

## 📁 Folder Structure

```
api-auth-example/
├── server.js
├── routes/
│   └── auth.js
├── middleware/
│   └── verifyToken.js
├── .env
├── package.json
```

---

## 1️⃣ Setup

### Install dependencies:

```bash
npm init -y
npm install express jsonwebtoken dotenv body-parser
```

---

## 2️⃣ Create `.env`

Add the following to your `.env` file:

```env
SECRET_KEY=my_super_secret_key
```

---

## 3️⃣ `server.js` – Entry Point

Create the `server.js` file to initialize the Express server and set up routes:

```js
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

## 4️⃣ `routes/auth.js` – Auth Routes

Define the authentication routes in `routes/auth.js`:

```js
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
```

---

## 5️⃣ `middleware/verifyToken.js` – Token Middleware

Create a middleware to verify the JWT token in `middleware/verifyToken.js`:

```js
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};
```

---

## ✅ Testing via Postman

1. **POST** `/api/login`  
     - **Body**: `{ "username": "admin", "password": "admin123" }`  
     - **Response**: Returns a `token`.

2. **GET** `/api/dashboard`  
     - **Header**: `Authorization: <token>`  
     - **Response**: Returns a protected message.

---

## 🛠️ Additional Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PUSKAR-DJ/api-auth-example.git
   cd api-auth-example
   ```

2. **Create a `.env` File**
   - Add the following content to a new `.env` file in the root directory:
     ```env
     SECRET_KEY=my_super_secret_key
     ```

3. **Refer to the Guide**
   - Open the `API_Auth_ExpressJS_Guide.pdf` file in the repository for a detailed explanation of the implementation.

4. **Import Postman Collection**
   - Open Postman and import the `Postman/Express JWT Auth API.postman_collection.json` file.
   - Use the collection to test the API endpoints as described in the guide.