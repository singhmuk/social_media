const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },

  messages: { type: Number, required: true },          //count number of messages
  nameHistory: [String],                               //every time name chage
  testScore: [Number],

  date: { type: Date, default: Date.now }
})

module.exports = Contact = mongoose.model('contact', ContactSchema);