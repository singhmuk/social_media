require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const dbConn = require('./config/db.js');

const userRoutes = require('./routes/userRoutes.js');
const classRoutes = require('./routes/class');
const studetsRoutes = require('./routes/students');


dbConn();
app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/users', userRoutes)
app.use('/api/class', classRoutes);
app.use('/api/students', studetsRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () =>  console.log(`Server running in mode on port ${port}.`))
