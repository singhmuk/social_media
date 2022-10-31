const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    text: { type: String, required: true },
    title: { type: String, required: true }
});

module.exports = mongoose.model('paginations', pageSchema);