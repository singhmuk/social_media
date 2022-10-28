require('dotenv').config();
const express = require('express');
const app = express();

const dbConn = require('./config/db');

dbConn;
app.use(express.json());
app.use(express.urlencoded({extended:true}));



const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
