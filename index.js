//require the server's configurations file
const app = require('./config/server')

//starts the server at the port 3000
app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000')
})