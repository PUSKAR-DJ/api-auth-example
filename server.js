const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("Loaded secret key:", process.env.SECRET_KEY);
