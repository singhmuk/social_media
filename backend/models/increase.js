const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incrSchema = new Schema({
  username: { type: String, required: true },
  counts: [Number]
});

module.exports = mains = mongoose.model('increase', incrSchema);