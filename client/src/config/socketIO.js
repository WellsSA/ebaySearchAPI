import socket from 'socket.io-client'

const API_URL = 'http://localhost:4000'

const io = socket(API_URL)

export default io;