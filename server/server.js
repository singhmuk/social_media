require('dotenv').config();
const express = require('express');
const app = express();
const dbConn = require('./config/db.js');

const pagesRoutes = require('./routes/paginations');


dbConn();
app.use(express.json())

app.use('/api/posts', pagesRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () =>  console.log(`Server running in mode on port ${port}.`))
