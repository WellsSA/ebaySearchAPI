const nodemailer = require('nodemailer');

// Set up transport configuration to send mails
//@ToDo pegar valores das variáveis de ambiente
const transport = nodemailer.createTransport({
    host: 'host',
    port: '587',
    auth: {
        user: 'User',
        pass: 'Pass'
    } 
});

// exports configured transport
module.exports = transport