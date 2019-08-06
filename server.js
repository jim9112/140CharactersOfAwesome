const express = require('express');
const connectDB = require('./config/db');

const app = express();


// connect to database
connectDB();

// init middleware 
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome to the Social Media API....'}));

// define routes
app.use('/api/users', require('./routes/users'));

const PORT = process.env.PORT  || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));