const express = require('express')
const mongoose = require('mongoose')

const app = express()


mongoose.connect(
    "mongodb+srv://WellSA:123@cluster0-yy2tm.mongodb.net/test?retryWrites=true",
    {
        useNewUrlParser: true
    }
);

app.use(express.json())

app.use(require('../src/routes/routes'))

module.exports = app