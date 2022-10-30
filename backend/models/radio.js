const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const radioSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, default:'professional' }     //personal, professional
})

module.exports = Contact = mongoose.model('radio', radioSchema);