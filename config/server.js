const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

mongoose.connect(
    "mongodb+srv://WellSA:123@cluster0-yy2tm.mongodb.net/test?retryWrites=true",
    {
        useNewUrlParser: true
    }
);
//middleware
app.use((req, res, next) => {
    req.io = io

    return next()
})

app.use(cors())
app.use(express.json())

app.use(require('../src/routes/routes'))

module.exports = server