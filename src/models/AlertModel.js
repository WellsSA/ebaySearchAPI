const mongoose = require('mongoose')

const AlertSchema = new mongoose.Schema({
    email: String,
    searchPhrase: String,
    interval: Number
})

module.exports = mongoose.model('Alert', AlertSchema)