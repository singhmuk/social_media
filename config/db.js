const mongoose = require('mongoose');

const dbConn = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/mernstack", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}.`)
    process.exit(1)
  }
}

module.exports = dbConn;
