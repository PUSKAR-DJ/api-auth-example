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

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/PUSKAR-DJ/api-auth-example.git
cd api-auth-example
```
---

## 2️⃣ Setup

### Install dependencies:

```bash
npm install
```

---

## 3️⃣ Create a `.env` File

Add the following content to a new `.env` file in the root directory:

```env
SECRET_KEY=my_super_secret_key
```
---

## 4️⃣ Start the Server - `server.js`

### Use node to start the server in the Terminal:

```bash
node . 
```
OR

```bash
node server.js 
```
---

## ✅ Testing via Postman

1. **Import Postman Collection**
   - Open Postman and import the `Postman/Express JWT Auth API.postman_collection.json` file.
   - Use the collection to test the API endpoints as described in the guide.

2. **POST** `/api/login`  
     - **Body**: `{ "username": "admin", "password": "admin123" }`  
     - **Response**: Returns a `token`.

3. **GET** `/api/dashboard`  
     - **Header**: `Authorization: <token>`  
     - **Response**: Returns a protected message.

---

## 🛠️ Additional Instructions

**Refer to the Guide**
   - Open the `API_Auth_ExpressJS_Guide.pdf` file in the repository for a detailed source code of the implementation.

---