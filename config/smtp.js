const nodemailer = require('nodemailer');

// Set up transport configuration to send mails
//@ToDo pegar valores das variáveis de ambiente
const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    } 
})
const hostMail = process.env.SMTP_EMAIL

// exports configured transport
module.exports = { transport, hostMail }