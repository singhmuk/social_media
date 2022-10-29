require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const dbConn = require('./config/db.js');

const userRoutes = require('./routes/userRoutes');
const followRoutes = require('./routes/follow');


dbConn();
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/users', userRoutes)
app.use('/api/follows', followRoutes)


const port = process.env.PORT || 5000;
app.listen(port, () =>  console.log(`Server running in mode on port ${port}.`))
