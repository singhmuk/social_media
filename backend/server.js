require('dotenv').config();
const express = require('express');
const app = express();
const dbConn = require('./config/db.js');

const radioRoutes = require('./routes/radio');


dbConn();
app.use(express.json())

app.use('/api/radio', radioRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () =>  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}.`))
