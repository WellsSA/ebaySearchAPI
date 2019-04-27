//require the server's configurations file
const app = require('./config/server')

//starts the server at the port 3000
const port = 4000

app.listen(port, function(){
    console.log(`Server listening on port ${port}`)
})