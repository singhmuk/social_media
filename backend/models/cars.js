const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
  name: String,
  carMake: String,
  model: String
});

module.exports = Car = mongoose.model('car', carSchema);