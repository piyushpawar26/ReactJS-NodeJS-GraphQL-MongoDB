const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerSchema = new Schema({
    name: String,
    skillset: String
});

module.exports = mongoose.model('Worker', workerSchema);
